import AdminLayout from '../../components/layout/AdminLayout';
import AuthGuard from '../../components/AuthGuard';
import ProductManagement from '../../components/admin/ProductManagement';

const ProductManagementPage = () => {
  return (
    <AuthGuard>
      <AdminLayout>
        <ProductManagement />
      </AdminLayout>
    </AuthGuard>
  );
};

export default ProductManagementPage;
