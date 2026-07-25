(function () {
  var SKIP_PAGES = ['admin.html', 'user.html'];

  document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    if (SKIP_PAGES.some(function (p) { return path.includes(p); })) return;
    renderNavbar();
  });

  function renderNavbar() {
    var pathname = window.location.pathname;
    var isHome = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '';
    var isHome2 = pathname.includes('home2.html');
    var prefix = (isHome || isHome2) ? '' : './';

    function isActive(href) {
      var page = href.replace('./', '');
      return pathname.endsWith(page) ? 'active-nav' : '';
    }

    var headerHTML = '<header id="site-header" class="fixed top-0 left-0 w-full z-[9999] transition-all duration-500">' +
      
      '<nav id="mainNavbar" class="transition-all duration-500">' +
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' +
          '<div class="flex items-center justify-between h-[72px]">' +
            '<a href="' + prefix + 'index.html" class="flex items-center space-x-2.5 flex-shrink-0 group">' +
              '<div class="relative">' +
                '<div class="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">' +
                  '<svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
                    '<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor"/>' +
                    '<path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1h2m10 1l2-1V8a1 1 0 00-1-1h-4m-4 8H7m6 0a2 2 0 002-2v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3a2 2 0 002 2zm6-6h2"/>' +
                  '</div>' +
                  '<div class="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-orange-500 rounded-full border-2 border-white nav-logo-badge transition-colors duration-500"></div>' +
                '</div>' +
                '<div class="block">' +
                  '<span class="nav-logo-text text-sm sm:text-lg font-extrabold tracking-tight block leading-tight transition-colors duration-500">Car Service</span>' +
                  '<span class="nav-logo-sub text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase block leading-tight transition-colors duration-500">& Repair Center</span>' +
                '</div>' +
              '</a>' +
              '<div class="hidden lg:flex items-center space-x-0.5" id="desktopMenu">' +
                '<div class="nav-item-dropdown relative" data-dropdown="home">' +
                  '<button class="nav-link flex items-center space-x-1 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10 ' + (isActive('index.html') || isActive('home2.html') ? 'active-nav' : '') + '">' +
                    '<span>Home</span>' +
                    '<svg class="w-3.5 h-3.5 transition-transform duration-200 dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>' +
                  '</button>' +
                  '<div class="dropdown-menu absolute top-full left-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 opacity-0 invisible translate-y-2 transition-all duration-300 z-50 overflow-hidden">' +
                    '<a href="' + prefix + 'index.html" class="block px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-all">' +
                      '<div class="flex items-center space-x-3"><span class="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span><span>Home 1 </span></div>' +
                    '</a>' +
                    '<a href="' + prefix + 'home2.html" class="block px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-all">' +
                      '<div class="flex items-center space-x-3"><span class="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span><span>Home 2 </span></div>' +
                    '</a>' +
                  '</div>' +
                '</div>' +
                '<a href="' + prefix + 'about.html" class="nav-link px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10 ' + isActive('about.html') + '">About</a>' +
                '<a href="' + prefix + 'services.html" class="nav-link px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10 ' + isActive('services.html') + '">Services</a>' +
                '<a href="' + prefix + 'repairs.html" class="nav-link px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10 ' + isActive('repairs.html') + '">Repairs</a>' +
                '<a href="' + prefix + 'contact.html" class="nav-link px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10 ' + isActive('contact.html') + '">Contact</a>' +
                '<div class="nav-item-dropdown relative" data-dropdown="dashboard">' +
                  '<button class="nav-link flex items-center space-x-1 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10">' +
                    '<span>Dashboard</span>' +
                    '<svg class="w-3.5 h-3.5 transition-transform duration-200 dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>' +
                  '</button>' +
                  '<div class="dropdown-menu absolute top-full right-0 mt-2 w-60 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 opacity-0 invisible translate-y-2 transition-all duration-300 z-50 overflow-hidden">' +
                    '<a href="' + prefix + 'admin.html" class="block px-5 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-all border-b border-gray-100 dark:border-gray-700">' +
                      '<div class="flex items-center space-x-3">' +
                        '<div class="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">' +
                          '<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' +
                        '</div>' +
                        '<div><span class="font-bold text-gray-900 dark:text-white block">Admin Dashboard</div>' +
                      '</div>' +
                    '</a>' +
                    '<a href="' + prefix + 'user.html" class="block px-5 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-all">' +
                      '<div class="flex items-center space-x-3">' +
                        '<div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">' +
                          '<svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>' +
                        '</div>' +
                        '<div><span class="font-bold text-gray-900 dark:text-white block">User Dashboard</div>' +
                      '</div>' +
                    '</a>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="flex items-center space-x-2">' +
                '<button id="desktopDarkModeToggle" class="hidden lg:flex nav-action-btn p-2.5 rounded-xl transition-all duration-300 hover:bg-blue-600/10" aria-label="Toggle dark mode">' +
                  '<svg class="w-5 h-5 desktop-sun-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>' +
                  '<svg class="w-5 h-5 desktop-moon-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>' +
                '</button>' +
                '<button id="desktopRtlToggle" class="hidden lg:flex nav-action-btn p-2.5 rounded-xl transition-all duration-300 hover:bg-blue-600/10 text-xs font-bold" aria-label="Toggle RTL">' +
                  '<span class="desktop-rtl-label">RTL</span>' +
                '</button>' +
                '<a href="' + prefix + 'login.html" class="hidden lg:inline-flex items-center px-4 py-2 rounded-xl text-[13px] font-bold border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300 nav-action-btn">' +
                  'Login' +
                '</a>' +
                '<a href="' + prefix + 'signup.html" class="hidden sm:flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-xl text-[13px] font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 nav-cta-signup">' +
                  '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>' +
                  '<span>Sign Up</span>' +
                '</a>' +
                '<button id="mobileMenuBtn" class="lg:hidden hamburger-btn p-2.5 rounded-xl transition-all duration-300 hover:bg-blue-600/10 nav-action-btn" aria-label="Toggle menu">' +
                  '<div class="w-6 h-5 relative flex flex-col justify-between">' +
                    '<span class="hamburger-line w-full h-[2px] bg-current rounded-full transition-all duration-300 origin-left"></span>' +
                    '<span class="hamburger-line w-4/5 h-[2px] bg-current rounded-full transition-all duration-300"></span>' +
                    '<span class="hamburger-line w-3/5 h-[2px] bg-current rounded-full transition-all duration-300 origin-left"></span>' +
                  '</div>' +
                '</button>' +
              '</div>' +
          '</div>' +
        '</div>' +
      '</nav>' +
    '</header>';

    var mobileMenuHTML = '<div id="mobileMenuOverlay" class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[9997]" style="opacity:0; pointer-events:none; transition: opacity 0.35s cubic-bezier(0.25,1,0.5,1);"></div>' +
    '<div id="mobileMenu" class="lg:hidden fixed top-0 right-0 w-[320px] max-w-[85vw] h-full bg-white dark:bg-gray-900 z-[9998] overflow-y-auto shadow-2xl" style="transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);">' +
      '<div class="p-5">' +
        '<div class="flex items-center justify-between mb-6">' +
          '<a href="' + prefix + 'index.html" class="flex items-center space-x-2.5 mobile-menu-link">' +
            '<div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">' +
              '<svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
                '<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor"/>' +
                '<path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1h2m10 1l2-1V8a1 1 0 00-1-1h-4m-4 8H7m6 0a2 2 0 002-2v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3a2 2 0 002 2zm6-6h2"/>' +
              '</svg>' +
            '</div>' +
            '<div>' +
              '<span class="text-base font-extrabold text-gray-900 dark:text-white block leading-tight">Car Service</span>' +
              '<span class="text-[9px] font-semibold tracking-widest text-blue-600 uppercase block">& Repair Center</span>' +
            '</div>' +
          '</a>' +
          '<button id="mobileMenuClose" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">' +
            '<svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<nav class="space-y-0.5">' +
          '<div class="mobile-dropdown">' +
            '<button class="mobile-dropdown-toggle w-full flex items-center justify-between px-3.5 py-2.5 text-gray-900 dark:text-white font-semibold text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">' +
              '<span>Home</span>' +
              '<svg class="w-4 h-4 transition-transform duration-300 mobile-dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>' +
            '</button>' +
            '<div class="mobile-dropdown-content max-h-0 overflow-hidden transition-all duration-300">' +
              '<a href="' + prefix + 'index.html" class="mobile-menu-link block pl-10 pr-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors">' +
                '<div class="flex items-center space-x-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span><span>Home 1 </span></div>' +
              '</a>' +
              '<a href="' + prefix + 'home2.html" class="mobile-menu-link block pl-10 pr-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors">' +
                '<div class="flex items-center space-x-2"><span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span><span>Home 2 </span></div>' +
              '</a>' +
            '</div>' +
          '</div>' +
          '<a href="' + prefix + 'about.html" class="mobile-menu-link block px-3.5 py-2.5 text-sm text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">About</a>' +
          '<a href="' + prefix + 'services.html" class="mobile-menu-link block px-3.5 py-2.5 text-sm text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">Services</a>' +
          '<a href="' + prefix + 'repairs.html" class="mobile-menu-link block px-3.5 py-2.5 text-sm text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">Repairs</a>' +
          '<a href="' + prefix + 'contact.html" class="mobile-menu-link block px-3.5 py-2.5 text-sm text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">Contact</a>' +
          '<div class="mobile-dropdown">' +
            '<button class="mobile-dropdown-toggle w-full flex items-center justify-between px-3.5 py-2.5 text-gray-900 dark:text-white font-semibold text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">' +
              '<span>Dashboard</span>' +
              '<svg class="w-4 h-4 transition-transform duration-300 mobile-dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>' +
            '</button>' +
            '<div class="mobile-dropdown-content max-h-0 overflow-hidden transition-all duration-300">' +
              '<a href="' + prefix + 'admin.html" class="mobile-menu-link block pl-10 pr-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors">Admin Dashboard</a>' +
              '<a href="' + prefix + 'user.html" class="mobile-menu-link block pl-10 pr-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors">User Dashboard</a>' +
            '</div>' +
          '</div>' +
        '</nav>' +
        '<div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">' +
          '<a href="' + prefix + 'login.html" class="mobile-menu-link flex items-center justify-center w-full border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-lg text-sm font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all">' +
            'Login' +
          '</a>' +
          '<a href="' + prefix + 'signup.html" class="mobile-menu-link flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg text-sm font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all">' +
            'Sign Up' +
          '</a>' +
        '</div>' +
        '<div class="mt-4 flex items-center gap-2">' +
          '<button id="mobileDarkModeToggle" class="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-xs transition-all hover:bg-gray-200 dark:hover:bg-gray-700">' +
            '<svg class="w-4 h-4 mobile-sun-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>' +
            '<svg class="w-4 h-4 mobile-moon-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>' +
            '<span>Dark Mode</span>' +
          '</button>' +
          '<button id="mobileRtlToggle" class="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-xs transition-all hover:bg-gray-200 dark:hover:bg-gray-700">' +
            '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>' +
            '<span class="mobile-rtl-label">RTL</span>' +
          '</button>' +
        '</div>' +
        '<div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">' +
          '<p class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Follow Us</p>' +
          '<div class="flex items-center space-x-2">' +
            '<a href="#" class="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>' +
            '<a href="#" class="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/></svg></a>' +
            '<a href="#" class="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    var header = document.getElementById('site-header');
    header.insertAdjacentHTML('afterend', mobileMenuHTML);

    initNavbar();
  }

  function initNavbar() {
    var header = document.getElementById('site-header');
    var mainNavbar = document.getElementById('mainNavbar');
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    var mobileMenuClose = document.getElementById('mobileMenuClose');
    var mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    var mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
    var mobileRtlToggle = document.getElementById('mobileRtlToggle');
    var desktopDarkModeToggle = document.getElementById('desktopDarkModeToggle');
    var desktopRtlToggle = document.getElementById('desktopRtlToggle');

    if (document.documentElement.getAttribute('dir') === 'rtl') {
      mobileMenu.style.transform = 'translateX(-100%)';
    }

    var pathname = window.location.pathname;
    var isHome = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '';
    var isHome2 = pathname.includes('home2.html');
    var isTransparentPage = isHome || isHome2;

    function updateNavbar() {
      var scrolled = window.scrollY > 20;
      var navActionBtns = header.querySelectorAll('.nav-action-btn');
      var navCtaSignup = header.querySelector('.nav-cta-signup');

      if (scrolled || !isTransparentPage) {
        header.classList.add('header-scrolled');
        mainNavbar.classList.add('navbar-solid');
        mainNavbar.classList.remove('navbar-transparent');
        header.querySelectorAll('.nav-link').forEach(function (link) {
          link.classList.remove('text-white');
          link.classList.add('text-gray-700', 'dark:text-gray-300');
        });
        var logoText = header.querySelector('.nav-logo-text');
        var logoSub = header.querySelector('.nav-logo-sub');
        var logoBadge = header.querySelector('.nav-logo-badge');
        if (logoText) { logoText.classList.remove('text-white'); logoText.classList.add('text-gray-900', 'dark:text-white'); }
        if (logoSub) { logoSub.classList.remove('text-blue-300'); logoSub.classList.add('text-blue-600'); }
        if (logoBadge) { logoBadge.classList.add('border-white', 'dark:border-gray-900'); logoBadge.classList.remove('border-white/80'); }
        navActionBtns.forEach(function (btn) { btn.classList.remove('text-white'); btn.classList.add('text-gray-600', 'dark:text-gray-400'); });
        if (navCtaSignup) {
          navCtaSignup.classList.remove('shadow-blue-600/20');
          navCtaSignup.classList.add('shadow-blue-600/25');
        }
      } else {
        header.classList.remove('header-scrolled');
        mainNavbar.classList.remove('navbar-solid');
        mainNavbar.classList.add('navbar-transparent');
        header.querySelectorAll('.nav-link').forEach(function (link) {
          link.classList.add('text-white');
          link.classList.remove('text-gray-700', 'dark:text-gray-300');
        });
        var logoText2 = header.querySelector('.nav-logo-text');
        var logoSub2 = header.querySelector('.nav-logo-sub');
        var logoBadge2 = header.querySelector('.nav-logo-badge');
        if (logoText2) { logoText2.classList.add('text-white'); logoText2.classList.remove('text-gray-900', 'dark:text-white'); }
        if (logoSub2) { logoSub2.classList.add('text-blue-300'); logoSub2.classList.remove('text-blue-600'); }
        if (logoBadge2) { logoBadge2.classList.add('border-white/80'); logoBadge2.classList.remove('border-white', 'dark:border-gray-900'); }
        navActionBtns.forEach(function (btn) { btn.classList.add('text-white'); btn.classList.remove('text-gray-600', 'dark:text-gray-400'); });
        if (navCtaSignup) {
          navCtaSignup.classList.add('shadow-blue-600/20');
          navCtaSignup.classList.remove('shadow-blue-600/25');
        }
      }
    }

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    document.querySelectorAll('.nav-item-dropdown').forEach(function (dropdown) {
      var menu = dropdown.querySelector('.dropdown-menu');
      var arrow = dropdown.querySelector('.dropdown-arrow');
      var timeout;

      dropdown.addEventListener('mouseenter', function () {
        clearTimeout(timeout);
        menu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
        menu.classList.add('opacity-100', 'visible', 'translate-y-0');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
      });

      dropdown.addEventListener('mouseleave', function () {
        timeout = setTimeout(function () {
          menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
          menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
          if (arrow) arrow.style.transform = 'rotate(0deg)';
        }, 150);
      });
    });

    var menuOpen = false;

    function getHiddenTransform() {
      return document.documentElement.getAttribute('dir') === 'rtl' ? 'translateX(-100%)' : 'translateX(100%)';
    }

    function openMobileMenu() {
      menuOpen = true;
      mobileMenu.style.transform = 'translateX(0)';
      mobileMenuOverlay.style.opacity = '1';
      mobileMenuOverlay.style.pointerEvents = 'auto';
      if (mobileMenuBtn) mobileMenuBtn.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    }

    function closeMobileMenu() {
      menuOpen = false;
      mobileMenu.style.transform = getHiddenTransform();
      mobileMenuOverlay.style.opacity = '0';
      mobileMenuOverlay.style.pointerEvents = 'none';
      if (mobileMenuBtn) mobileMenuBtn.classList.remove('is-active');
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
      document.querySelectorAll('.mobile-dropdown-content').forEach(function (c) { c.style.maxHeight = '0px'; });
      document.querySelectorAll('.mobile-dropdown-arrow').forEach(function (a) { a.style.transform = 'rotate(0deg)'; });
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function () {
        if (menuOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    document.querySelectorAll('.mobile-menu-link').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    document.querySelectorAll('.mobile-dropdown-toggle').forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var content = toggle.nextElementSibling;
        var arrow = toggle.querySelector('.mobile-dropdown-arrow');
        var isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

        document.querySelectorAll('.mobile-dropdown-content').forEach(function (c) { c.style.maxHeight = '0px'; });
        document.querySelectorAll('.mobile-dropdown-arrow').forEach(function (a) { a.style.transform = 'rotate(0deg)'; });

        if (!isOpen) {
          content.style.maxHeight = content.scrollHeight + 'px';
          if (arrow) arrow.style.transform = 'rotate(180deg)';
        }
      });
    });

    function setDarkModeUI(isDark) {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('darkMode', isDark);

      if (mobileDarkModeToggle) {
        var mSun = mobileDarkModeToggle.querySelector('.mobile-sun-icon');
        var mMoon = mobileDarkModeToggle.querySelector('.mobile-moon-icon');
        if (mSun) mSun.classList.toggle('hidden', !isDark);
        if (mMoon) mMoon.classList.toggle('hidden', isDark);
      }
      if (desktopDarkModeToggle) {
        var dSun = desktopDarkModeToggle.querySelector('.desktop-sun-icon');
        var dMoon = desktopDarkModeToggle.querySelector('.desktop-moon-icon');
        if (dSun) dSun.classList.toggle('hidden', !isDark);
        if (dMoon) dMoon.classList.toggle('hidden', isDark);
      }
    }

    var savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkModeUI(true);
    }

    if (mobileDarkModeToggle) {
      mobileDarkModeToggle.addEventListener('click', function () {
        setDarkModeUI(!document.documentElement.classList.contains('dark'));
      });
    }

    if (desktopDarkModeToggle) {
      desktopDarkModeToggle.addEventListener('click', function () {
        setDarkModeUI(!document.documentElement.classList.contains('dark'));
      });
    }

    function setRTLUI(isRTL) {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.classList.toggle('rtl-active', isRTL);
      localStorage.setItem('rtlMode', isRTL);

      var label = isRTL ? 'LTR' : 'RTL';
      document.querySelectorAll('.mobile-rtl-label, .desktop-rtl-label').forEach(function (el) { el.textContent = label; });
    }

    var savedRTL = localStorage.getItem('rtlMode');
    if (savedRTL === 'true') {
      setRTLUI(true);
    }

    if (mobileRtlToggle) {
      mobileRtlToggle.addEventListener('click', function () {
        var newRTL = document.documentElement.getAttribute('dir') !== 'rtl';
        setRTLUI(newRTL);
        if (menuOpen) closeMobileMenu();
      });
    }

    if (desktopRtlToggle) {
      desktopRtlToggle.addEventListener('click', function () {
        var newRTL = document.documentElement.getAttribute('dir') !== 'rtl';
        setRTLUI(newRTL);
      });
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) closeMobileMenu();
    });
  }
})();
