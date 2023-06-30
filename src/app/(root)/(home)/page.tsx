import { Suspense } from 'react';
import { ClientDashboards } from './client';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <ClientDashboards />
      </Suspense>
    </>
  );
}
