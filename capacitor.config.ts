import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'CorburApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
