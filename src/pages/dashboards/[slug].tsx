// you will need to install via 'npm install jsonwebtoken' or in your package.json
import React from 'react';
import jwt from 'jsonwebtoken';

import { CommonLayout } from '@/components/Common/Layout/CommonLayout';
import { ContentCard } from '@/components/Common/ContentCard/ContentCard';

export default function Home() {
  const METABASE_SITE_URL = 'https://saudeintegrada.pmfi.pr.gov.br';
  const METABASE_SECRET_KEY = '9675c1c210962ecd9af041eb27b62689e87a0e67dd33fc8306bf46c8612d19a3';

  const payload = {
    resource: { dashboard: 109 },
    params: {},
    exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  const iframeUrl =
    METABASE_SITE_URL +
    '/embed/dashboard/' +
    token +
    '#theme=transparent&bordered=false&titled=true';

  return (
    <CommonLayout title="Dashboards">
      <ContentCard h="100%">
        <iframe
          src={iframeUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          allowTransparency
        ></iframe>
      </ContentCard>
    </CommonLayout>
  );
}
