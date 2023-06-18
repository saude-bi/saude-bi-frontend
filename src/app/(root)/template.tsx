'use client';

import { CommonLayout } from '@/components/Common/Layout/CommonLayout';

export default function Template({ children }: { children: React.ReactNode }) {
  return <CommonLayout title="Dashboards">{children}</CommonLayout>;
}
