import MainLayout from '../components/layout/MainLayout';
import ProductList from '../components/ProductList';
import '../src/app/globals.css'

export default function Home() {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
}

