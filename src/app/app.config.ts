import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'landing-modelo',
          appId: '1:424109880255:web:ae69a41b680b13a557670a',
          storageBucket: 'landing-modelo.appspot.com',
          apiKey: 'AIzaSyDTrBU2Ujwqd4vvYTBRArnYEgHNxhBRpH4',
          authDomain: 'landing-modelo.firebaseapp.com',
          messagingSenderId: '424109880255',
          measurementId: 'G-6T6GVZWELS',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};
