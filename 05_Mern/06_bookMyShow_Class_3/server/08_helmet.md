1. Helmet applies a set of security headers to your application,
reducing the risk of several well-known web vulnerabilities.

2. Cross-Site Scripting (XSS) Protection: Helmet sets the
X-XSS-Protection header to enable the Cross-Site Scripting (XSS)
filter built into most web browsers.

3. It sets the X-Frame-Options header to prevent your content from
being embedded into other sites.

4. Helmet helps in implementing Content Security Policy, a
powerful tool to mitigate XSS and other injection attacks
a. By restricting where resources can be loaded from, CSP
helps protect against XSS attacks, where attackers might
try to inject malicious scripts into web content.

- Cross-Site Scripting (XSS): A security vulnerability where attackers
inject malicious scripts into web pages viewed by others.

- Helmet: Middleware that helps set security-related HTTP headers to
prevent various types of attacks, including XSS.
Content Security Policy (CSP): Helps prevent XSS by controlling the
sources of content.

- X-XSS-Protection: Helps prevent reflected XSS attacks by enabling
browser's XSS filter.

- CORS: Helps control resource sharing and mitigate certain XSS
attacks.