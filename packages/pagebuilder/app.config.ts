export default defineAppConfig({
  magentoLayer: {
    name: 'Page Builder layer'
  }
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    pageBuilder?: {
      /** Project name */
      name?: string;
    };
  }
}
