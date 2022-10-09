/**
 * @deprecated
 * */

export const parseJwt = (token?: string | null): PartialCredentials => {
  if (!token) {
    return {};
  }
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64, 'base64')
        .toString()
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    return {};
  }
};

/**
 * @deprecated
 * */

export const getCredentials = (): AuthenticationResponse => {
  const strCredentials =
    typeof window !== 'undefined' ? window.localStorage.getItem('CREDENTIALS') : null;
  return strCredentials ? JSON.parse(strCredentials) : {};
};

/**
 * @deprecated
 * */

export const saveCredentials = (response: AuthenticationResponse): void => {
  const newCredentials = { ...getCredentials(), ...response };
  typeof window !== 'undefined' &&
    window.localStorage.setItem('CREDENTIALS', JSON.stringify(newCredentials));
};

/**
 * @deprecated
 * */

export const removeCredentials = (): void => {
  typeof window !== 'undefined' && window.localStorage.removeItem('CREDENTIALS');
};

/**
 * @deprecated
 * */

export const isLoggedInState = () => {
  const { access_token } = getCredentials();
  const decodeCredentials = parseJwt(access_token);
  const now = new Date().getTime() / 1000;
  return (
    !!access_token &&
    !!decodeCredentials?.user_id &&
    !!decodeCredentials?.exp &&
    now < decodeCredentials?.exp
  );
};

/**
 * @deprecated
 * */

export const getDecodeCredentials = (): PartialCredentials => {
  const { access_token } = getCredentials();
  return access_token ? parseJwt(access_token) : {};
};

/**
 * @deprecated
 * */

export const decodeCredentials = (access_token: string): PartialCredentials =>
  parseJwt(access_token);
