import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse frontend and full-stack projects, explore technologies, and open project details.",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
