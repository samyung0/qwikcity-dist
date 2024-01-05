
declare module '@qwik-city-plan' {
  export const routes: any[];
  export const menus: any[];
  export const trailingSlash: boolean;
  export const basePathname: string;
  export const cacheModules: boolean;
  export const allowedParams = {};
  const defaultExport: {
    routes: any[];
    menus: any[];
    trailingSlash: boolean;
    basePathname: string;
    cacheModules: boolean;
    allowedParams: Record<string, string[]>
  };
  export default defaultExport;
}
