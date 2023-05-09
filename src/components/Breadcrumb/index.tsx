import React from 'react';
import { useRouter } from 'next/router';
import styles from './Breadcrumb.module.css';
import Link from 'next/link';

export default function Breadcrumb() {
  const router = useRouter();
  const { pathname } = router;
  const pathParts = pathname.split('/').filter(Boolean);

  return (
    <nav className={styles.breadcrumb}>
      {pathParts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className={styles.separator}>&gt;</span>}
          <Link href={`/${pathParts.slice(0, index + 1).join('/')}`}>
            <span className={styles.link}>{part}</span>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
