import { Sidebar } from "@/components/shared-components";
import { Navbar } from "@/components/ui/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex ">
      <section className="">
        <Sidebar />
      </section>

      <section className=" flex-1">
        <Navbar />
        {children}
      </section>
    </div>
  );
}
