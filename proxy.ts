import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const cspHeader = `
    default-src 'self';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self' https://feat-check-iframe.web-test.alfabank.ru/;
    upgrade-insecure-requests;
`;

  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );
}
