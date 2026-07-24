document.addEventListener('DOMContentLoaded', function() {
  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden-loader'), 400);
    });
    setTimeout(() => loader.classList.add('hidden-loader'), 3000);
  }

  // Scroll to top
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll animations
  const observerOptions = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right, .scale-in, .stagger-children').forEach(el => {
    observer.observe(el);
  });

  // Counter animation
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }, 16);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => {
    counterObserver.observe(el);
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');
        // Close all others
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-icon').forEach(i => { i.style.transform = 'rotate(0deg)'; });

        if (!isOpen) {
          answer.classList.add('open');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // Gallery Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  document.querySelectorAll('[data-lightbox]').forEach(el => {
    el.addEventListener('click', () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = el.src || el.getAttribute('data-src') || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Booking Modal
  const bookingModal = document.getElementById('bookingModal');
  document.querySelectorAll('[data-book]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        window.location.href = 'booking.html';
      }
    });
  });

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal || e.target.closest('.modal-close')) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // WhatsApp
  const whatsapp = document.getElementById('whatsappFloat');
  if (whatsapp) {
    whatsapp.addEventListener('click', () => {
      window.open('https://wa.me/1800123456?text=Hi%20I%20need%20car%20service%20assistance', '_blank');
    });
  }

  // Form submissions
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Form submitted successfully! We will contact you soon.', 'success');
      form.reset();
    });
  });

  // Newsletter
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed to newsletter successfully!', 'success');
      form.reset();
    });
  });

  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail')?.value;
      if (email && email.includes('admin')) {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'user.html';
      }
    });
  }

  // Gallery filter
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.gallery-filter-btn').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white');
        b.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
      });
      btn.classList.add('bg-blue-600', 'text-white');
      btn.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');

      document.querySelectorAll('.gallery-item').forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // Pricing toggle
  const pricingToggle = document.getElementById('pricingToggle');
  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      const isAnnual = pricingToggle.checked;
      document.querySelectorAll('.price-monthly').forEach(el => {
        el.style.display = isAnnual ? 'none' : '';
      });
      document.querySelectorAll('.price-annual').forEach(el => {
        el.style.display = isAnnual ? '' : 'none';
      });
    });
  }

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          img.classList.add('loaded');
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });

    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }
});

// Toast notification
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = {
    success: '<svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
    error: '<svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    warning: '<svg class="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>',
    info: '<svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  };

  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = (icons[type] || icons.info) + '<span class="text-sm text-gray-700 dark:text-gray-300">' + message + '</span>';
  container.appendChild(toast);

  requestAnimationFrame(() => { toast.classList.add('show'); });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
