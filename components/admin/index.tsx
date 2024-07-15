import AdminLayout from '../../components/layout/AdminLayout';
import AuthGuard from '../../components/AuthGuard';
import Dashboard from '../../components/admin/Dashboard';

const AdminDashboard = () => {
  return (
    <AuthGuard>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </AuthGuard>
  );
};

export default AdminDashboard;
