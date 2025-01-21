import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Work from "@/components/Work";


export default function Home() {
  return (
    <main className="bg-[#090A0F]">
      <Hero />
      <Services />
      <Products />
      <Work />
      {/* <Clients /> */}
      {/* <Team /> */}
      {/* <Contact /> */}
    </main>
  )
}

