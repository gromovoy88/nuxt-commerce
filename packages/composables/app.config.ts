export default defineAppConfig({
  composablesLayer: {
    name: 'Composables layer'
  }
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    composablesLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
