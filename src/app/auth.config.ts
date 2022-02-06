import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'https://localhost:8443/msj4sample/secure/add',
    redirectUri: 'http://localhost:4200/feed',
    clientId: '8944eb75-406e-49c4-a5bd-cfb7dcbce26f',
    responseType: 'code',
    strictDiscoveryDocumentValidation: false,
}
