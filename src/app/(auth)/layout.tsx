import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col justify-center">
      {children}
    </div>
  );
}
