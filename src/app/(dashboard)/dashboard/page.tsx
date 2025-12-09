import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Private dashboard area for future authenticated experiences in Bolanle Afrika.",
  robots: {
    index: false,
    follow: false,
  },
};

const DashboardHomePage = () => (
  <section className="space-y-4">
    <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      This is a placeholder dashboard view. Wire feature modules (analytics,
      users, etc.) into this layout as your domain grows.
    </p>
  </section>
);

export default DashboardHomePage;
