

const getEncodedPath = (path: string, uriParams: string): string => {
    return `${path}${uriParams !== '' ? '?' + encodeURIComponent(uriParams): ''}`;
}

export const getPreviewPath = (modulePath: string, id: number, uriParams: string = ''): string => {
    return getEncodedPath(`/${modulePath}/${id}`, uriParams);
}

export const getUpdatePath = (modulePath: string, id: number, uriParams: string = ''): string => {
    return getEncodedPath(`/${modulePath}/${id}/update`, uriParams);
}

export const getCreatePath = (modulePath: string, uriParams: string = ''): string => {
    return getEncodedPath(`/${modulePath}/create`, uriParams);
}