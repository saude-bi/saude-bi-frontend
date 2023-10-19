import { AuthProvider } from '@/context/auth';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CommonLayout>{children}</CommonLayout>
    </AuthProvider>
  );
}
