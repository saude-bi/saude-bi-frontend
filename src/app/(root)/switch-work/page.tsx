'use client';

import { Suspense } from 'react';
import { ClientSwitchWork } from './client';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <ClientSwitchWork />
      </Suspense>
    </>
  );
}
