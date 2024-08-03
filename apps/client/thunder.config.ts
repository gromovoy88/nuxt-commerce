export interface ThunderThemeConfig {
  logo: string;
  cartToken: string;
  authToken: string;
  storeToken: string;
  reloadedToken: string;
  fallbackImage: string;
}

const config: ThunderThemeConfig = {
  logo: '/images/logo.svg',
  cartToken: 'cart_token',
  authToken: 'auth_token',
  storeToken: 'store_token',
  reloadedToken: 'is_reloaed',
  fallbackImage: '/images/placeholder.jpg'
};

export default config;
