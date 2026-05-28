// components.js — Navbar y Footer reutilizables para Vida Digital

function renderNavbar(activePage) {
  var pages = [
    { id: 'inicio', label: 'Inicio', href: 'index.html' },
    { id: 'nosotros', label: 'Nosotros', href: 'nosotros.html' },
    { id: 'catalogo', label: 'Catálogo', href: 'catalogo.html' },
    { id: 'marcas', label: 'Marcas Propias', href: 'marcas.html' },
    { id: 'contacto', label: 'Contacto', href: 'contacto.html' }
  ];

  var navLinks = pages.map(function(p) {
    var isActive = p.id === activePage;
    var activeClass = isActive
      ? 'text-primary font-bold border-b-2 border-primary pb-1'
      : 'text-on-surface-variant font-medium hover:text-primary transition-colors duration-200';
    return '<a class="text-label-md font-label-md ' + activeClass + '" href="' + p.href + '">' + p.label + '</a>';
  }).join('\n');

  return '\n<header class="bg-surface docked full-width top-0 sticky z-50 border-b border-outline-variant" style="position:relative;">\n<div class="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop w-full h-20">\n<div class="text-headline-lg font-headline-lg font-bold text-primary">Vida Digital</div>\n<nav class="hidden md:flex items-center gap-8">\n' + navLinks + '\n</nav>\n<div class="flex items-center gap-4">\n<a class="hidden md:inline-block px-6 py-2 border border-outline text-label-md font-label-md text-on-surface hover:bg-surface-container transition-all active:scale-95 duration-150 no-underline" href="https://app.importadoravidadigital.com/" target="_blank" rel="noopener">Ingresar</a>\n<button class="md:hidden text-on-surface" id="hamburger-btn" aria-label="Menu">\n<span class="material-symbols-outlined">menu</span>\n</button>\n</div>\n</div>\n<div id="mobile-menu" style="display:none; position:absolute; top:100%; left:0; right:0; background:#fff; border-bottom:1px solid #e6bdb8; z-index:100; padding:1rem 2rem;">\n<nav class="flex flex-col gap-3">\n' + navLinks + '\n</nav>\n</div>\n</header>';
}

function renderFooter() {
  return '\n<footer class="bg-surface-container-low border-t border-outline-variant">\n<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop py-12 w-full">\n<div class="space-y-stack-md">\n<div class="text-headline-md font-headline-md text-primary">Vida Digital</div>\n<p class="text-body-md text-on-surface-variant">Tu aliado estratégico en importaciones desde Iquique para todo Chile.</p>\n</div>\n<div class="space-y-stack-md">\n<h4 class="text-label-md font-label-md text-primary uppercase tracking-widest">Navegación</h4>\n<ul class="space-y-2">\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="index.html">Inicio</a></li>\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="nosotros.html">Nosotros</a></li>\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="catalogo.html">Catálogo</a></li>\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="marcas.html">Marcas Propias</a></li>\n</ul>\n</div>\n<div class="space-y-stack-md">\n<h4 class="text-label-md font-label-md text-primary uppercase tracking-widest">Contacto</h4>\n<ul class="space-y-2 text-body-md text-on-surface-variant">\n<li>ZOFRI, Manzana 12, Galpón 24, Sala de Venta N° 6, Iquique</li>\n<li>+56 9 9342 7191</li>\n<li>+56 9 9046 2022</li>\n<li>+56 9 7178 1114</li>\n<li>+56 9 6221 9375</li>\n<li><!-- WIDGET GOOGLE REVIEWS --></li>\n</ul>\n</div>\n<div class="space-y-stack-md">\n<h4 class="text-label-md font-label-md text-primary uppercase tracking-widest">Únete a nuestro grupo</h4>\n<p class="text-body-md text-on-surface-variant mb-3">Recibe novedades y ofertas exclusivas por WhatsApp.</p>\n<a class="inline-flex items-center gap-2 px-6 py-3 text-label-md font-label-md text-white rounded transition-all hover:brightness-110 active:scale-95 no-underline" style="background:#25D366" href="https://wa.me/56990462022" target="_blank" rel="noopener">\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18" style="vertical-align:middle; margin-right:8px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>\nUnirme al grupo\n</a>\n</div>\n</div>\n<div class="border-t border-outline-variant py-6 px-margin-desktop text-center">\n<p class="text-label-sm text-on-surface-variant">© <span id="year"></span> Import & Export Vida Digital Ltda.</p>\n</div>\n</footer>';
}

document.addEventListener('DOMContentLoaded', function() {
  var navbarEl = document.getElementById('navbar');
  var footerEl = document.getElementById('footer');
  if (navbarEl) {
    navbarEl.innerHTML = renderNavbar(navbarEl.dataset.active || 'inicio');
  }
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
    var yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Hamburger menu toggle
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function closeMenu() {
    if (mobileMenu) mobileMenu.style.display = 'none';
  }

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
      } else {
        mobileMenu.style.display = 'none';
      }
    });

    mobileLinks.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && e.target !== hamburgerBtn && !hamburgerBtn.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // Inject global hover styles
  var style = document.createElement('style');
  style.textContent = '\
    a[href], button {\
      transition: transform 0.2s ease;\
    }\
    a[href]:hover, button:hover {\
      transform: translateY(-2px) scale(1.03);\
    }\
    .btn-audio:hover { transform: scale(1.03); }\
  ';
  document.head.appendChild(style);
});
