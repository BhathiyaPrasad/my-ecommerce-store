import Image from "next/image";
import MainLayout from "@components/layout/MainLayout";
import Hero from "@components/Hero";
import ProductCard from "@components/common/ProductCard";
import Title from "@components/common/Title";

export default function Home() {
  return (
    <MainLayout>
      
      <Hero/>
      <Title text="New Arrivals" />
       <ProductCard />
     
    
    
    </MainLayout>
  
  );
}
