import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "1xbet Rabit Jadid",
  description: "1xbet new link page.",
};

export default function RabitJadidPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "1xbet", href: "/1xbet" },
          { name: "Rabit Jadid", href: "/1xbet/rabit-jadid" },
        ]}
      />
      <h1 className="mt-6 text-3xl font-bold">1xbet Rabit Jadid</h1>
      <p className="mt-4 text-gray-600">Placeholder content.</p>
    </main>
  );
}
