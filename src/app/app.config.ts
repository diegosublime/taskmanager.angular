import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authConfig } from './auth/auth.config';
import { provideAuth } from 'angular-auth-oidc-client';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {httpClientAuthInterceptorInterceptor} from './shared/interceptors/http-client-auth.interceptor-interceptor';
  
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideRouter(routes), 
    provideAuth(authConfig), 
    provideHttpClient(
      withInterceptors([
        httpClientAuthInterceptorInterceptor
      ])
    )],
};
