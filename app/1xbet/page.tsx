import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "1xbet",
  description: "1xbet pillar page.",
};

export default function OneXBetPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "1xbet", href: "/1xbet" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-bold">1xbet</h1>
      <p className="mt-4 text-gray-600">Pillar page placeholder content.</p>
    </main>
  );
}
