import React from 'react';
import InternalPageLayout from '@/layout/internalPageLayout';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <InternalPageLayout>
      <>
        <h1>Search Page</h1>
        {q ? <p>Results for: {q}</p> : <p>No search term</p>}
      </>
    </InternalPageLayout>
  );
}
