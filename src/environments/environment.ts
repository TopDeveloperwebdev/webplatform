// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCZx6hTBKw-xTlhIpmY4MbfplMYDGkFSDA",
    authDomain: "runtrip-ar.firebaseapp.com",
    databaseURL: "https://runtrip-ar.firebaseio.com",
    projectId: "runtrip-ar",
    storageBucket: "runtrip-ar.appspot.com",
    messagingSenderId: "654028737360",
    appId: "1:654028737360:web:acee98dca94c09a8553a55",
    measurementId: "G-YD5S2HS061"
  },
  AUTH_SERVER_ADDRESS : 'https://tripadvisor1.p.rapidapi.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
