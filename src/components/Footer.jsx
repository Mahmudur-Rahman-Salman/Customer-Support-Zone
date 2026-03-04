import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 text-gray-300">
        <div class="max-w-7xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h2 class="text-xl font-bold text-white">TicketSystem</h2>
              <p class="mt-3 text-sm text-gray-400 leading-relaxed">
                Building reliable digital solutions with clean design and
                scalable architecture.
              </p>
            </div>

            <div>
              <h3 class="text-sm font-semibold text-white uppercase tracking-wider">
                Navigation
              </h3>
              <ul class="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" class="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-sm font-semibold text-white uppercase tracking-wider">
                Contact
              </h3>
              <ul class="mt-4 space-y-2 text-sm text-gray-400">
                <li>Email: support@yourcompany.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Location: Dhaka, Bangladesh</li>
              </ul>
            </div>

            <div>
              <h3 class="text-sm font-semibold text-white uppercase tracking-wider">
                Follow Us
              </h3>

              <div class="mt-4 flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  class="text-gray-400 hover:text-white transition"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  class="text-gray-400 hover:text-white transition"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.42-.016-.63.961-.689 1.8-1.56 2.46-2.548z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  class="text-gray-400 hover:text-white transition"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.773 1.77-1.728V1.727C24 .774 23.21 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zM20.452 20.452h-3.5v-5.569c0-1.328-.027-3.037-1.85-3.037-1.85 0-2.133 1.445-2.133 2.94v5.666h-3.5V9h3.36v1.561h.046c.468-.886 1.61-1.82 3.313-1.82 3.546 0 4.2 2.333 4.2 5.366v6.345z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="GitHub"
                  class="text-gray-400 hover:text-white transition"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.22v3.293c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-700 mt-10 pt-6">
            <p class="text-sm text-gray-500 text-center">
              © 2026 TicketSystem. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
