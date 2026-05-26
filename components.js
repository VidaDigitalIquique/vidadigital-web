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

  return '\n<header class="bg-surface docked full-width top-0 sticky z-50 border-b border-outline-variant">\n<div class="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop w-full h-20">\n<div class="text-title-lg font-headline-lg font-bold text-primary">Vida Digital</div>\n<nav class="hidden md:flex items-center gap-8">\n' + navLinks + '\n</nav>\n<div class="flex items-center gap-4">\n<a class="hidden md:inline-block px-6 py-2 border border-outline text-label-md font-label-md text-on-surface hover:bg-surface-container transition-all active:scale-95 duration-150 no-underline" href="https://vidadigital-inventario-v2.vercel.app/" target="_blank" rel="noopener">Ingresar</a>\n<button class="md:hidden text-on-surface">\n<span class="material-symbols-outlined">menu</span>\n</button>\n</div>\n</div>\n</header>';
}

function renderFooter() {
  return '\n<footer class="bg-surface-container-low border-t border-outline-variant">\n<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop py-12 w-full">\n<div class="space-y-stack-md">\n<div class="text-headline-md font-headline-md text-primary">Vida Digital</div>\n<p class="text-body-md text-on-surface-variant">Tu aliado estratégico en importaciones desde Iquique para todo Chile.</p>\n</div>\n<div class="space-y-stack-md">\n<h4 class="text-label-md font-label-md text-primary uppercase tracking-widest">Navegación</h4>\n<ul class="space-y-2">\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="index.html">Inicio</a></li>\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="nosotros.html">Nosotros</a></li>\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="catalogo.html">Catálogo</a></li>\n<li><a class="text-on-surface-variant hover:text-primary underline transition-all text-body-md" href="marcas.html">Marcas Propias</a></li>\n</ul>\n</div>\n<div class="space-y-stack-md">\n<h4 class="text-label-md font-label-md text-primary uppercase tracking-widest">Contacto</h4>\n<ul class="space-y-2 text-body-md text-on-surface-variant">\n<li>ZOFRI, Manzana 12, Galpón 24, Iquique</li>\n<li>Tel: (57) 226 2878</li>\n<li><!-- WIDGET GOOGLE REVIEWS --></li>\n</ul>\n</div>\n<div class="space-y-stack-md">\n<h4 class="text-label-md font-label-md text-primary uppercase tracking-widest">Únete a nuestro grupo</h4>\n<p class="text-body-md text-on-surface-variant mb-3">Recibe novedades y ofertas exclusivas por WhatsApp.</p>\n<a class="inline-flex items-center gap-2 px-6 py-3 text-label-md font-label-md text-white rounded transition-all hover:brightness-110 active:scale-95 no-underline" style="background:#25D366" href="https://wa.me/56993427191" target="_blank" rel="noopener">\n<span class="material-symbols-outlined">chat</span>\nUnirme al grupo\n</a>\n</div>\n</div>\n<div class="border-t border-outline-variant py-6 px-margin-desktop text-center">\n<p class="text-label-sm text-on-surface-variant">© <span id="year"></span> Vida Digital. Todos los derechos reservados. ZOFRI, Manzana 12, Galpón 24, Iquique.</p>\n</div>\n</footer>';
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
});
