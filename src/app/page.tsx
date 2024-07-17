import Image from "next/image";
import MainLayout from "@components/layout/MainLayout";
import Hero from "@components/Hero";
import ProductCard from "@components/common/ProductCard";


export default function Home() {
  return (
    <MainLayout>
      
      <Hero/>
      
       <ProductCard />
    
     
    
    </MainLayout>
  
  );
}
