import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ar'],
    localePrefix: 'as-needed',
    // Used when no locale matches
    defaultLocale: 'en'
});
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - images (images)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|images|_next/static|_next/image|favicon.ico).*)"
    ]
};