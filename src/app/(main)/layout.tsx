import type { Metadata } from "next";
import { site } from "@/constants/index";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: `Reviews - ${site.title}`,
};

const layout = ({ children }: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <main className="w-full h-screen mx-auto flex flex-col items-center justify-start">
      <header className="w-full bg-[#F2F6FD] dark:bg-transparent">
        <Navbar />
        <Header />
      </header>
      <section className="w-full pb-4 lg:py-6 px-4 md:px-6 lg:px-12 max-w-[1400px]">
        {children}
      </section>
    </main>
  );
}

export default layout