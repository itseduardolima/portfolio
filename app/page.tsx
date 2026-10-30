import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Private, Stack, Studies } from "@/components/Sections";
import { ScrollBar } from "@/components/Motion";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ScrollBar />
      <Header />
      <main>
        <Hero />
        <Products />
        <Private />
        <Stack />
        <Studies />
      </main>
      <Footer />
    </>
  );
}
