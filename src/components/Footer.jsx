import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 text-gray-300">
        <div class="max-w-7xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h2 class="text-xl font-bold text-white">YourCompany</h2>
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
                  class="hover:text-white transition"
                >
                  <span class="text-lg">🌐</span>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  class="hover:text-white transition"
                >
                  <span class="text-lg">🐦</span>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  class="hover:text-white transition"
                >
                  <span class="text-lg">💼</span>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  class="hover:text-white transition"
                >
                  <span class="text-lg">🐙</span>
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-700 mt-10 pt-6">
            <p class="text-sm text-gray-500 text-center">
              © 2026 YourCompany. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
