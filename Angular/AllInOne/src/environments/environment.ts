// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // NodeUrl:'http://localhost:3000'
  //  NodeUrl:'http://10.154.79.190:1337'
  NodeUrl: 'http://localhost:8080/api',
  ServerUrl: 'http://localhost:8080/Sampleannotationconfig/api',
  enkey: 'aesEncryptio12!@', // length=22
  eniv: 'encryptionIn12!@' // length=22
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
