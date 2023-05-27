import InternalPageLayout from '@/layout/internalPageLayout';
import { useFindAllEstablishmentsQuery } from '@/store/establishments';
import { useEffect } from 'react';

export default function Home() {
  const { isLoading, data: establishments } = useFindAllEstablishmentsQuery();

  useEffect(() => {
    console.log(establishments);
  }, [establishments]);

  return (
    <InternalPageLayout>
      <p>Bem Vindo!</p>
    </InternalPageLayout>
  );
}
