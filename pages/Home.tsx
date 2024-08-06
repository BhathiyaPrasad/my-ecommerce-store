import MainLayout from '../components/layout/MainLayout';
import ProductList from '../components/ProductList';
import '../src/app/globals.css'
import Hero from '@components/Hero';
export default function Home() {
  return (
    <MainLayout>
  <Hero />
      <ProductList
      category=""
      order=">="
      limit={12}
      group='Brand'
      type=''
       />
    </MainLayout>
  );
}

