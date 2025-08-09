"use client";

import React from "react";

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function NoSSR({ children, fallback = null }: NoSSRProps) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
