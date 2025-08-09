import { NextRequest, NextResponse } from "next/server";

import { IG_GraphQLResponseDto } from "@/features/api/_dto/instagram";

import { getInstagramPostGraphQL } from "./utils";

interface RouteContext {
  params: Promise<{
    shortcode: string;
  }>;
}

export async function GET(_: NextRequest, context: RouteContext) {
  const { shortcode } = await context.params;

  if (!shortcode) {
    return NextResponse.json(
      { error: "noShortcode", message: "shortcode is required" },
      { status: 400 }
    );
  }

  try {
    const response = await getInstagramPostGraphQL({
      shortcode,
    });

    const status = response.status;
    
    console.log("Instagram API HTTP Status:", status);

    if (status === 200) {
      const responseData = await response.json() as IG_GraphQLResponseDto;
      
      // Debug logging
      console.log("Instagram API Response:", JSON.stringify(responseData, null, 2));
      
      const { data } = responseData;
      if (!data || !data.xdt_shortcode_media) {
        console.log("Missing xdt_shortcode_media in response:", data);
        console.log("Shortcode attempted:", shortcode);
        console.log("Full response structure:", JSON.stringify(responseData, null, 2));
        
        // Check if the response indicates the post is not accessible
        if (data && data.xdt_shortcode_media === null) {
          return NextResponse.json(
            { 
              error: "postNotAccessible", 
              message: "This post is not accessible. It may be private, deleted, or you may not have permission to view it." 
            },
            { status: 404 }
          );
        }
        
        return NextResponse.json(
          { error: "notFound", message: "post not found" },
          { status: 404 }
        );
      }

      // Support both videos and photos
      const media = data.xdt_shortcode_media;
      
      console.log("Media type:", media.__typename, "is_video:", media.is_video, "has display_url:", !!media.display_url);
      
      // Check if it's a carousel post (multiple media items)
      if (media.__typename === "GraphSidecar" || media.__typename === "XDTGraphSidecar") {
        console.log("Carousel post detected!");
        console.log("edge_sidecar_to_children present:", !!media.edge_sidecar_to_children);
        if (media.edge_sidecar_to_children) {
          console.log("Number of children:", media.edge_sidecar_to_children.edges.length);
          media.edge_sidecar_to_children.edges.forEach((edge, index) => {
            console.log(`Child ${index + 1}:`, edge.node.is_video ? "video" : "photo", "URL:", edge.node.display_url ? "present" : "missing");
          });
        }
        // For carousel posts, we'll handle them differently
        return NextResponse.json({ data }, { status: 200 });
      }
      
      // For single media posts (video or photo)
      if (!media.is_video && !media.display_url) {
        return NextResponse.json(
          { error: "noMedia", message: "post contains no downloadable media" },
          { status: 400 }
        );
      }

      return NextResponse.json({ data }, { status: 200 });
    }

    if (status === 404) {
      return NextResponse.json(
        { error: "notFound", message: "post not found" },
        { status: 404 }
      );
    }

    // For other HTTP status codes
    return NextResponse.json(
      { error: "apiError", message: `Instagram API returned status ${status}` },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error fetching Instagram post:", error);
    return NextResponse.json(
      { error: "internalError", message: "Internal server error" },
      { status: 500 }
    );
  }
}