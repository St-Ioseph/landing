import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_BGMPX5oY.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/darthkenar/IOSEPH/landing/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.js","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.TiVat4Yl.css"}],"routeData":{"route":"/blog/article","isIndex":true,"type":"page","pattern":"^\\/blog\\/article\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"article","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/article/index.astro","pathname":"/blog/article","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.TiVat4Yl.css"},{"type":"inline","content":".shape-divider-bottom-1665343298{width:100%;overflow:hidden;line-height:0}.shape-divider-bottom-1665343298 svg{position:relative;display:block;width:calc(100% + 1.3px);height:200px}.hero-title-gradient{background:-webkit-linear-gradient(white,#b4add1);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.shape-divider-bottom-1665696614{width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.shape-divider-bottom-1665696614 svg{position:relative;display:block;width:calc(100% + 1.3px);height:127px;transform:rotateY(180deg)}.shape-divider-top-1665696661{overflow:hidden;line-height:0}.shape-divider-top-1665696661 svg{position:relative;display:block;width:calc(100% + 1.3px);height:127px;transform:rotateY(180deg)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/darthkenar/IOSEPH/landing/src/pages/blog/article/index.astro",{"propagation":"none","containsHead":true}],["/home/darthkenar/IOSEPH/landing/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@js":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/blog/article/index@_@astro":"pages/blog/article.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B2CsaYhr.mjs","/home/darthkenar/IOSEPH/landing/src/components/Navbar.jsx":"_astro/Navbar.Dw0tIQyF.js","/home/darthkenar/IOSEPH/landing/src/components/ScrollUpButton":"_astro/ScrollUpButton.B_kio9i0.js","/home/darthkenar/IOSEPH/landing/src/components/Hero.jsx":"_astro/Hero.Vf8SBw9x.js","/home/darthkenar/IOSEPH/landing/src/components/Features1.jsx":"_astro/Features1.Bo1hxPws.js","/home/darthkenar/IOSEPH/landing/src/components/Features2.jsx":"_astro/Features2.BeYG8hgb.js","@astrojs/react/client.js":"_astro/client.C4rGbYxV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/blog1.UgsBnp9Y.jpg","/_astro/feature1.D_pBMN-q.webp","/_astro/feature2.D-DsZO40.jpg","/_astro/feature3.BDhSYK7X.jpg","/_astro/feature4.Bl4cjQX_.jpg","/_astro/feature5.DIa3yUVV.jpg","/_astro/feature6.CECimZdD.jpg","/_astro/dashboard.C84uFB28.png","/_astro/inter-cyrillic-ext-400-normal.Dc4VJyIJ.woff2","/_astro/inter-cyrillic-400-normal.BLGc9T1a.woff2","/_astro/inter-greek-ext-400-normal.Bput3-QP.woff2","/_astro/inter-greek-400-normal.DxZsaF_h.woff2","/_astro/inter-vietnamese-400-normal.DMkecbls.woff2","/_astro/inter-latin-ext-400-normal.hnt3BR84.woff2","/_astro/inter-latin-400-normal.BOOGhInR.woff2","/_astro/inter-cyrillic-ext-500-normal.BShVwWPj.woff2","/_astro/inter-cyrillic-500-normal.D4Vwzodn.woff2","/_astro/inter-greek-ext-500-normal.B6guLgqG.woff2","/_astro/inter-greek-500-normal.CeQXL5ds.woff2","/_astro/inter-vietnamese-500-normal.DOriooB6.woff2","/_astro/inter-latin-ext-500-normal.CIS2RHJS.woff2","/_astro/inter-latin-500-normal.D2bGa7uu.woff2","/_astro/inter-cyrillic-ext-600-normal.CaqZN2hq.woff2","/_astro/inter-cyrillic-600-normal.BGBWG807.woff2","/_astro/inter-greek-ext-600-normal.Cnui8OiR.woff2","/_astro/inter-greek-600-normal.Dhlb-90d.woff2","/_astro/inter-vietnamese-600-normal.Cc8MFFhd.woff2","/_astro/inter-latin-ext-600-normal.BnYJhD27.woff2","/_astro/inter-latin-600-normal.D273HNI0.woff2","/_astro/inter-cyrillic-ext-700-normal.ClVoMEGq.woff2","/_astro/inter-cyrillic-700-normal.bGtGjVdZ.woff2","/_astro/inter-greek-ext-700-normal.SzCdnevJ.woff2","/_astro/inter-greek-700-normal.Cxpycf-U.woff2","/_astro/inter-vietnamese-700-normal.CGpBpxLq.woff2","/_astro/inter-latin-ext-700-normal.CzikT_rs.woff2","/_astro/inter-latin-700-normal.Sckx8rpT.woff2","/_astro/inter-cyrillic-ext-800-normal.DkJRRbRv.woff2","/_astro/inter-cyrillic-800-normal.Gn5VisWc.woff2","/_astro/inter-greek-ext-800-normal.JPzvdjtt.woff2","/_astro/inter-greek-800-normal.C7uvZBs2.woff2","/_astro/inter-vietnamese-800-normal.Cm7tD1pz.woff2","/_astro/inter-latin-ext-800-normal.DhAspwKZ.woff2","/_astro/inter-latin-800-normal.qNthNgub.woff2","/_astro/inter-cyrillic-ext-900-normal.BduYe0K2.woff2","/_astro/inter-cyrillic-900-normal.rsB9enUl.woff2","/_astro/inter-greek-ext-900-normal.gmbm0Gan.woff2","/_astro/inter-greek-900-normal.DTZD6r2W.woff2","/_astro/inter-vietnamese-900-normal.C4P836tE.woff2","/_astro/inter-latin-ext-900-normal.dyE6OXMT.woff2","/_astro/inter-latin-900-normal.CcF180C5.woff2","/_astro/inter-cyrillic-ext-400-normal.BPnxn4xp.woff","/_astro/inter-cyrillic-400-normal.ZzOtrSSW.woff","/_astro/inter-greek-ext-400-normal.DCpCPQOf.woff","/_astro/inter-greek-400-normal.BZzXV7-1.woff","/_astro/inter-vietnamese-400-normal.BUNmGMP1.woff","/_astro/inter-latin-ext-400-normal.C1t-h-pH.woff","/_astro/inter-latin-400-normal.gitzw0hO.woff","/_astro/inter-cyrillic-ext-500-normal.CUiC4oBV.woff","/_astro/inter-cyrillic-500-normal.DH2hs3aW.woff","/_astro/inter-greek-ext-500-normal.M2hEX8vc.woff","/_astro/inter-greek-500-normal.d_eO-yCQ.woff","/_astro/inter-vietnamese-500-normal.DQPw2Hwd.woff","/_astro/inter-latin-ext-500-normal.UMdmhHu2.woff","/_astro/inter-latin-500-normal.deR1Tlfd.woff","/_astro/inter-cyrillic-ext-600-normal.Bt9VVOA-.woff","/_astro/inter-cyrillic-600-normal.BuzJQFbW.woff","/_astro/inter-greek-ext-600-normal.C9WLioJ8.woff","/_astro/inter-greek-600-normal.CwicyhtI.woff","/_astro/inter-vietnamese-600-normal.Cm6aH8_k.woff","/_astro/inter-latin-ext-600-normal.CAF0vJDd.woff","/_astro/inter-latin-600-normal.B5cFAncS.woff","/_astro/inter-cyrillic-ext-700-normal.Ced3hgUT.woff","/_astro/inter-cyrillic-700-normal.Bc8_fv8J.woff","/_astro/inter-greek-ext-700-normal.DXvzx4Na.woff","/_astro/inter-greek-700-normal.BRYTaFLL.woff","/_astro/inter-vietnamese-700-normal.dAnkLlTo.woff","/_astro/inter-latin-ext-700-normal.6V9MnIL5.woff","/_astro/inter-latin-700-normal.B8MtJ_2k.woff","/_astro/inter-cyrillic-ext-800-normal.Blqt89nY.woff","/_astro/inter-cyrillic-800-normal.C1n5rDZ2.woff","/_astro/inter-greek-ext-800-normal.D4Z3eQTi.woff","/_astro/inter-greek-800-normal.DCnbPe0-.woff","/_astro/inter-vietnamese-800-normal.BUZV_87j.woff","/_astro/inter-latin-ext-800-normal.B4NYOez9.woff","/_astro/inter-latin-800-normal.DDBFRMkW.woff","/_astro/inter-cyrillic-ext-900-normal.CW00LHP1.woff","/_astro/inter-cyrillic-900-normal.DRFjFxjx.woff","/_astro/inter-greek-ext-900-normal.CkcABDrp.woff","/_astro/inter-greek-900-normal.CD8u1q_4.woff","/_astro/inter-vietnamese-900-normal.BlAgPZck.woff","/_astro/inter-latin-ext-900-normal.DLS8rZND.woff","/_astro/inter-latin-900-normal.C5TMk9TE.woff","/_astro/index.TiVat4Yl.css","/favicon.svg","/_astro/CheckArrowIcon.qafL4Ls3.js","/_astro/Features1.Bo1hxPws.js","/_astro/Features2.BeYG8hgb.js","/_astro/Hero.Vf8SBw9x.js","/_astro/InvitationModal.D4fj67uL.js","/_astro/Navbar.Dw0tIQyF.js","/_astro/ScrollUpButton.B_kio9i0.js","/_astro/client.C4rGbYxV.js","/_astro/index.B52nOzfP.js","/_astro/jsx-runtime.C9eWo9jt.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"6/uCnvycRPYlN71fb2U0gfDWwCKGvCEVMp+tJyocHK4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
