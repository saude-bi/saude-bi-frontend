import { useEffect } from 'react';
import { useFindAllDashboardsQuery } from '@/store/dashboards';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';

export default function Home() {
  const { data: dashboards } = useFindAllDashboardsQuery();

  useEffect(() => {
    console.log(dashboards);
  }, [dashboards]);

  return (
    <CommonLayout>
      <p>Bem Vindo!</p>
    </CommonLayout>
  );
}
