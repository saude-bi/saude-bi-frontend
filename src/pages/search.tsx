import React from 'react';
import { useRouter } from 'next/router';
import { CommonLayout } from '@/components/Common/Layout/CommonLayout';

export const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <CommonLayout>
      <h1>Search Page</h1>
      {q ? <p>Results for: {q}</p> : <p>No search term</p>}
    </CommonLayout>
  );
};
