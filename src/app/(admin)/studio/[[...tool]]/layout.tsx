// import { adminStatus } from "@/lib/db/user";
// import { redirect } from "next/navigation";
// import React from "react";

// export default async function layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const isAdmin = await adminStatus();

//   if (!isAdmin) {
//     redirect("/");
//   }
//   return <>{children}</>;
// }

// src/app/admin/studio/layout.tsx
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
