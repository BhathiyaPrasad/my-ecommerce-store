import AdminLayout from '../../components/layout/AdminLayout';
// import AuthGuard from '../../components/AuthGuard';
import UserManagement from '../../components/admin/UserManagement';

const UserManagementPage = () => {
  return (
    // <AuthGuard>
      <AdminLayout>
        <UserManagement />
      </AdminLayout>
    // </AuthGuard>
  );
};

export default UserManagementPage;
