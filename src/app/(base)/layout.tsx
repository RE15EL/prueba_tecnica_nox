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
      <section className="w-20 md:w-64">
        <Sidebar />
      </section>

      <section className="flex-1 min-h-screen px-2 md:px-4 bg-white flex flex-col">
        <Navbar />
        <section className="flex-1 rounded-tl-[50px] bg-[#F9FAFB] overflow-hidden">{children}</section>
        <Footer classes="mb-2 bg-[#F9FAFB]"/>
      </section>
    </div>
  );
}
