import { Suspense } from 'react';
import MedicalWorkerDatatable from './_components/medical-worker-datatable';

export default function MedicalWorkerPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MedicalWorkerDatatable />
    </Suspense>
  );
}
