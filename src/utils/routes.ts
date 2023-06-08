import { NextRouter } from 'next/router';

export const routePushToPreviousPage = (router: NextRouter): void => {
  const finalSlashIndex = router.asPath.lastIndexOf('/');
  const previousPath = router.asPath.slice(0, finalSlashIndex);
  router.push(previousPath);
};

const getEncodedPath = (path: string, uriParams: string): string => {
  return `${path}${uriParams !== '' ? '?' + encodeURIComponent(uriParams) : ''}`;
};

export const getPreviewPath = (modulePath: string, id: number, uriParams: string = ''): string => {
  return getEncodedPath(`${modulePath}/${id}`, uriParams);
};

export const getUpdatePath = (modulePath: string, id?: number, uriParams: string = ''): string => {
  const entityPath = id ? `${modulePath}/${id}` : modulePath;
  return getEncodedPath(`${entityPath}/update`, uriParams);
};

export const getCreatePath = (modulePath: string, uriParams: string = ''): string => {
  return getEncodedPath(`${modulePath}/create`, uriParams);
};
