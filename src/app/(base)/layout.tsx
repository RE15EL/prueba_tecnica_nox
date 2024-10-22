import { Sidebar } from "@/components/shared-components";
import { Footer } from "@/components/ui/footer/Footer";
import { Navbar } from "@/components/ui/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex ">
      <section>
        <Sidebar />
      </section>

      <section className="flex-1 min-h-screen px-4 bg-white border flex flex-col">
        <Navbar />
        <section className="flex-1 grow">{children}</section>
        <Footer />
      </section>
    </div>
  );
}
