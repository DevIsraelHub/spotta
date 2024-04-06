import type { Metadata } from "next";
import { site } from "@/constants/index";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: `Reviews - ${site.title}`,
};

const layout = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <main className="w-full h-screen mx-auto flex flex-col items-center justify-start max-w-[1300px]">
      <Navbar />
      <section className="w-full py-6 px-4 md:px-6 lg:px-12">
        {children}
      </section>
    </main>
  );
}

export default layout