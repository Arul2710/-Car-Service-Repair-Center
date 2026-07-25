function renderFooter() {
  const isLoginPage = false;
  const isAdminPage = window.location.pathname.includes('admin.html');
  const isUserPage = window.location.pathname.includes('user.html');
  if (isAdminPage || isUserPage) return;

  const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '';
  const isHome2 = window.location.pathname.includes('home2.html');
  const prefix = (isHome || isHome2) ? '' : './';

  const footerHTML = `
  <footer class="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

    

    <!-- Main Footer -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <!-- Company Info -->
        <div class="sm:col-span-2 lg:col-span-1">
          <a href="${prefix}index.html" class="flex items-center space-x-3 mb-6 group">
            <div class="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor"/>
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1h2m10 1l2-1V8a1 1 0 00-1-1h-4m-4 8H7m6 0a2 2 0 002-2v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3a2 2 0 002 2zm6-6h2"/>
              </svg>
            </div>
            <div>
              <span class="text-xl font-extrabold block leading-tight">Car Service</span>
              <span class="text-[10px] font-semibold tracking-widest text-blue-400 uppercase block">& Repair Center</span>
            </div>
          </a>
          <p class="text-gray-400 mb-6 leading-relaxed text-sm">Your trusted partner for professional auto repair and maintenance services. Over 15 years of excellence in automotive care with certified mechanics and genuine parts.</p>
          <div class="flex items-center space-x-3">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5" aria-label="Facebook"><svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:-translate-y-0.5" aria-label="Instagram"><svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/></svg></a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-sky-500 transition-all duration-300 hover:-translate-y-0.5" aria-label="Twitter"><svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:-translate-y-0.5" aria-label="YouTube"><svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6 relative pb-3">Quick Links<span class="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-600 rounded-full"></span></h4>
          <ul class="space-y-3">
            <li><a href="${prefix}index.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Home</span></a></li>
            <li><a href="${prefix}about.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>About Us</span></a></li>
            <li><a href="${prefix}services.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Services</span></a></li>
            <li><a href="${prefix}pricing.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Pricing</span></a></li>
            <li><a href="${prefix}gallery.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Gallery</span></a></li>
            <li><a href="${prefix}blog.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Blog</span></a></li>
            <li><a href="${prefix}contact.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Contact</span></a></li>
          </ul>
        </div>

        <!-- Our Services -->
        <div>
          <h4 class="text-lg font-bold mb-6 relative pb-3">Our Services<span class="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500 rounded-full"></span></h4>
          <ul class="space-y-3">
            <li><a href="${prefix}services.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Engine Repair</span></a></li>
            <li><a href="${prefix}services.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Brake Service</span></a></li>
            <li><a href="${prefix}services.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Oil Change</span></a></li>
            <li><a href="${prefix}services.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>AC Repair</span></a></li>
            <li><a href="${prefix}services.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Wheel Alignment</span></a></li>
            <li><a href="${prefix}services.html" class="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"><svg class="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg><span>Car Detailing</span></a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-bold mb-6 relative pb-3">Contact Info<span class="absolute bottom-0 left-0 w-8 h-0.5 bg-green-500 rounded-full"></span></h4>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <div class="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
              <div><span class="text-gray-400 text-sm leading-relaxed block">1234 Auto Service Blvd, Suite 100<br>San Francisco, CA 94102</span></div>
            </li>
            <li class="flex items-center space-x-3">
              <div class="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
              <a href="tel:+1800123456" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">+1 (800) 123-456</a>
            </li>
            <li class="flex items-center space-x-3">
              <div class="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
              <a href="mailto:info@carservice.com" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">info@carservice.com</a>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div>
                <span class="text-gray-400 text-sm block">Mon - Fri: 7:00 AM - 7:00 PM</span>
                <span class="text-gray-400 text-sm block">Sat: 8:00 AM - 5:00 PM</span>
                <span class="text-gray-500 text-sm block">Sun: Emergency Only</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="relative border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-500 text-sm">&copy; 2026 Car Service & Repair Center. All rights reserved.</p>
          <div class="flex items-center space-x-6 text-sm">
            <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors">Terms & Conditions</a>
            <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', renderFooter);
