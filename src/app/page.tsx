"use client"

import Image from "next/image";
import MainLayout from "@components/layout/MainLayout";
import Hero from "@components/Hero";
import ProductCard from "@components/common/ProductCard";
import Title from "@components/common/Title";
import Divider from "@components/common/Divider";
import ProductList from "@components/ProductList";
import './globals.css'

export default function Home() {
  return (
    <MainLayout>
      
      <Hero/>
      
      <Title text="New Arrivals" />
       
      
       <ProductList
       category=""
       order=">="
       limits={12}
       group='Item_ID_Auto'
       type=''
      
      />
    
    </MainLayout>
  
  );
}
