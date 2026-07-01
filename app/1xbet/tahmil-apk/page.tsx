import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "1xbet Tahmil APK",
  description: "1xbet APK download page.",
};

export default function TahmilApkPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "1xbet", href: "/1xbet" },
          { name: "Tahmil APK", href: "/1xbet/tahmil-apk" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-bold">1xbet Tahmil APK</h1>
      <p className="mt-4 text-gray-600">Placeholder content.</p>
    </main>
  );
}
