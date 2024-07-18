import { useRouter } from 'next/router';
import MainLayout from '../../components/layout/MainLayout';
import ProductDetails from '../../components/ProductDetails';
import '../../src/app/globals.css'

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      {id ? <ProductDetails productId={id as string} /> : <p>Loading...</p>}
    </MainLayout>
  );
};

export default ProductDetailsPage;
