import InternalPageLayout from '@/layout/internalPageLayout';
import { useEffect } from 'react';
import { useFindAllDashboardsQuery } from '@/store/dashboards';
export default function Home() {
  const { isLoading, data: dashboards } = useFindAllDashboardsQuery();

  useEffect(() => {
    console.log(dashboards);
  }, [dashboards]);

  return (
    <InternalPageLayout>
      <p>Bem Vindo!</p>
    </InternalPageLayout>
  );
}
