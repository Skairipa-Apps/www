import { Link } from "wouter";
import { products } from "@/lib/utils";

const Footer = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const copyrightYear =
    startYear === currentYear
      ? `${currentYear}`
      : `${startYear} – ${currentYear}`;

  return (
    <footer className="bg-[hsl(var(--neutral-dark))] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Skairipa Apps Inc.</h3>
            <p className="text-[hsl(var(--neutral-mid))] mb-4">
              Building innovative, privacy-conscious applications for iOS and
              the web and more.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/skairipaappsinc"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/Skairipa-Apps"
                target="_blank"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href="/products"
                    className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-rights"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Privacy Rights
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/subscription-terms"
                  className="text-[hsl(var(--neutral-mid))] hover:text-white transition"
                >
                  Subscription Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[hsl(var(--neutral-mid))]">
            © {copyrightYear} Skairipa Apps Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 40"
          width="120"
          height="40"
          className="h-10"
        >
          <path
            fill="#A6A6A6"
            d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C7.014.023 6.513.036 6.017.06a13.556 13.556 0 0 0-2.933.464c-.9.27-1.74.673-2.49 1.27-.75.596-1.39 1.34-1.87 2.16-.48.83-.84 1.74-1.08 2.68C-2.67 7.55.76 8.5.32 9.45c-.06.37-.105.75-.14 1.13-.065.71-.09 1.42-.09 2.14v14.96a28.7 28.7 0 0 0 .09 2.13c.035.37.08.75.14 1.14.27.94.67 1.85 1.2 2.68.5.82 1.14 1.56 1.87 2.16.75.6 1.59 1 2.49 1.27.92.27 1.88.44 2.85.46.41.02.82.04 1.19.03.31.01.62.01.93.01h100.6c.31 0 .62 0 .93-.01.39.01.8-.01 1.21-.03a13.2 13.2 0 0 0 2.83-.46c.9-.25 1.75-.64 2.49-1.25a8.03 8.03 0 0 0 2-2.15c.54-.83.97-1.74 1.25-2.72.09-.33.16-.67.22-1.02.07-.42.11-.84.14-1.26.02-.32.03-.63.03-.95.004-.2.004-.39.004-.58V9.25c0-.19 0-.38-.004-.57 0-.32-.01-.64-.03-.95-.03-.42-.07-.84-.14-1.26-.06-.34-.13-.68-.22-1.02a8.15 8.15 0 0 0-1.25-2.72A7.87 7.87 0 0 0 116.91.59c-.75-.6-1.6-1-2.49-1.24-.93-.25-1.9-.42-2.86-.46-.38-.02-.76-.03-1.15-.04-.3-.01-.6-.01-.9-.01z"
          />
          <path d="M8.445 39.125c-.305 0-.602-.004-.904-.01-.42-.01-.819-.038-1.217-.097a11.36 11.36 0 0 1-2.47-.4c-.784-.22-1.51-.54-2.14-.92a7.05 7.05 0 0 1-1.62-1.43 6.7 6.7 0 0 1-1.09-1.79c-.28-.67-.49-1.37-.6-2.1-.08-.51-.12-1.03-.14-1.552-.01-.138-.02-.28-.02-.422V9.55c0-.13.01-.265.02-.397.02-.51.06-1.03.14-1.54.11-.72.32-1.42.6-2.09a6.91 6.91 0 0 1 1.09-1.8c.46-.56.99-1.02 1.62-1.44.63-.39 1.36-.7 2.14-.92a11.4 11.4 0 0 1 2.47-.4c.398-.06.797-.09 1.217-.098.304-.006.601-.01.904-.01h103.02c.3 0 .603.004.906.01.414.008.8.036 1.2.097.855.088 1.673.253 2.468.4.786.22 1.508.54 2.126.918a7.05 7.05 0 0 1 1.622 1.44c.46.55.84 1.15 1.102 1.8.274.67.484 1.37.59 2.096.08.51.12 1.03.14 1.547.01.13.01.266.01.397v20.45c0 .14 0 .282-.01.422-.02.51-.06 1.04-.138 1.55a7.07 7.07 0 0 1-.59 2.1 6.97 6.97 0 0 1-1.102 1.788 7.158 7.158 0 0 1-1.622 1.43c-.618.38-1.34.7-2.126.92a12.15 12.15 0 0 1-2.47.4c-.398.06-.78.09-1.2.1-.303.005-.606.01-.906.01H8.445z" />
          <path
            fill="#FFF"
            d="M24.77 20.3a4.94 4.94 0 0 0 1.18-3.47 4.97 4.97 0 0 0-4.91-5.24c-2.75 0-4.94 2.35-4.94 5.24 0 1.36.47 2.58 1.26 3.47a4.97 4.97 0 0 0-2.8 4.46c0 3.11 2.4 5.18 5.15 5.18 2.75 0 5.14-2.08 5.14-5.18 0-1.9-1.02-3.49-2.6-4.46h2.53zm1.92 13.32c0 .29-.24.53-.54.53H12.8c-.29 0-.53-.24-.53-.53V7.95c0-.3.24-.54.53-.54h13.35c.3 0 .54.24.54.54v25.67zm31.64-20.78c-1.3 0-2.13.89-2.13 2.16v.62h4.25v-.62c0-1.27-.84-2.16-2.12-2.16zm1.01 13.32c.52-.25.958-.675 1.286-1.18.69-.97 1.073-2.25 1.073-3.57 0-.67-.08-1.28-.22-1.85h-5.99c.13.57.22 1.18.22 1.85 0 1.32.38 2.6 1.07 3.57.327.504.765.93 1.285 1.18H59.35v.01zm-3.46 5.77c0 .28.22.51.5.55l3.18.4c.03 0 .06.01.09.01a.5.5 0 0 0 .5-.5V29.4a6.96 6.96 0 0 1-4.28.01v2.53h.01zM45.48 14.5c0-1.24-.81-2.01-2.02-2.01-1.21 0-2.02.77-2.02 2.01v.52h4.04v-.52zm21.17 0c0-1.24-.8-2.01-2.02-2.01-1.21 0-2.01.77-2.01 2.01v.52h4.03v-.52zM41.32 17.9h-.12c-.58 0-1.06-.49-1.06-1.08v-2.33c0-1.95-1.54-3.26-3.6-3.26-2.07 0-3.6 1.3-3.6 3.26v2.33c0 .59-.48 1.08-1.06 1.08h-.11v8.07h9.55V17.9zm17.16 0H41.32v8.07h17.16V17.9zm4.15-3.4c0-1.95-1.54-3.26-3.61-3.26-2.06 0-3.6 1.3-3.6 3.26v2.33c0 .59-.48 1.08-1.06 1.08h-.11v8.07h9.55V17.9h-.12c-.58 0-1.06-.49-1.06-1.08v-2.33h.01zm17.16 3.4h-.12c-.58 0-1.06-.49-1.06-1.08v-2.33c0-1.95-1.54-3.26-3.6-3.26-2.07 0-3.6 1.3-3.6 3.26v2.33c0 .59-.48 1.08-1.06 1.08h-.11v8.07h9.55V17.9zm4.15-3.4c0-1.95-1.54-3.26-3.61-3.26-2.06 0-3.6 1.3-3.6 3.26v2.33c0 .59-.48 1.08-1.06 1.08h-.11v8.07h9.55V17.9h-.12c-.58 0-1.06-.49-1.06-1.08v-2.33h.01zM37.18 29.95H21.94v-2.2h15.24v2.2zm17.16 0H39.1v-2.2h15.24v2.2zm17.15 0H56.25v-2.2h15.24v2.2zm17.16 0H73.4v-2.2h15.25v2.2z"
          />
          <g fill="#FFF">
            <path d="M45.314 17.977a.784.784 0 1 1 0-1.57.784.784 0 0 1 0 1.57zm21.17 0a.784.784 0 1 1 0-1.57.784.784 0 0 1 0 1.57zm-38.09 5.236a.784.784 0 1 1-1.57 0 .784.784 0 0 1 1.57 0zm-4.425-5.215a.784.784 0 1 1 0-1.57.784.784 0 0 1 0 1.57zm59.095-.02a.78.78 0 0 1-.783-.783c0-.432.35-.783.784-.783.432 0 .783.35.783.783a.78.78 0 0 1-.783.784zm-4.446 5.235a.784.784 0 1 1-1.57 0 .784.784 0 0 1 1.57 0zm-16.91 0a.784.784 0 1 1-1.57 0 .784.784 0 0 1 1.57 0z" />
          </g>
        </svg> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
