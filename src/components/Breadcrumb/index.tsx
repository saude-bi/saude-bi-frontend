import React from 'react';
import { useRouter } from 'next/router';
import styles from './Breadcrumb.module.css';
import Link from 'next/link';

export default function Breadcrumb() {
  const router = useRouter();
  const { pathname } = router;

  // Remove empty strings from the pathname split by '/'
  const pathParts = pathname.split('/').filter(Boolean);

  return (
    <nav className={styles.breadcrumb}>
      {pathParts.map((part, index) => {
        // gera um link para cada parte do breadcrumb
        const breadcrumbLink = `/${pathParts.slice(0, index + 1).join('/')}`;

        return (
          <React.Fragment key={index}>
            {/* adiciona um > antes da parte do breadcrum, se esse não for o primeiro */}
            {index > 0 && <span className={styles.separator}>&gt;</span>}
            <Link href={breadcrumbLink}>
              <span className={styles.link}>{part}</span>
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
