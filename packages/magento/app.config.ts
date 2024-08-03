export default defineAppConfig({
  magentoLayer: {
    name: 'Magento layer'
  }
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    magentoLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
