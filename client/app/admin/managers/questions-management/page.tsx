import React from "react";
import DefaultLayout from "../../../../components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "  question manager  ",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
export default function page() {
  return (
    <DefaultLayout>
      <h1>questions Manager</h1>
      
    </DefaultLayout>
  );
}