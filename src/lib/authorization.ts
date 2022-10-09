const CREDENTIAL_KEY = 'CREDENTIALS';

export const setAuthorization = (token: string) => localStorage?.setItem(CREDENTIAL_KEY, token);

export const getAuthorization = () => localStorage?.getItem(CREDENTIAL_KEY);

export const getAuthorizationHeader = () => `Bearer ${getAuthorization()}`;
