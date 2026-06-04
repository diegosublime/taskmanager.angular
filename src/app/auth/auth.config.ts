import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: '***',
    redirectUrl: '***',
    postLogoutRedirectUri: '***',
    clientId: '***',
    scope: 'email openid phone', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30,
  },
};

export const customAuthConfig = {
  amazonCognitoLogoutUrl: "***"
}
