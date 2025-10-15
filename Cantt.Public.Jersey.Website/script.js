// Basic configuration — Airtable form URL
const AIRTABLE_URL = 'https://airtable.com/appWcozvqJFqW0zZ2/pagZomfKDRKmSYCdA/form';

// Define the four products
const products = [
  {
    id: 'cap',
    name: 'College Boys',
    desc: 'Official Inter Cantt. tournament jersey in multiple sizes.',
    price: '৳ 470',
    image: 'School Boy/RAJCPSC-BOYS.jpg',
    details: {
      size: 'S, M, L, XL, XXL',
      fabric: 'Jackerd (Player Version)',
      contact: 'Call/WhatsApp: 01816-665948',
      gallery: [
        'School Boy/WhatsApp Image 2025-10-02 at 21.41.39 (2).jpeg',
        'School Boy/WhatsApp Image 2025-10-02 at 21.41.40 (1).jpeg',
        'School Boy/WhatsApp Image 2025-10-02 at 21.41.40.jpeg',
        'School Boy/WhatsApp Image 2025-10-02 at 21.41.41.jpeg',
      ],
    },
  },
  {
    id: 'tracksuit',
    name: 'College Girls',
    desc: 'Official Inter Cantt. tournament jersey in multiple sizes.',
    price: '৳ 470',
    image: 'College Girl/RAJCPSC-College-Girls.jpg',
    details: {
      size: 'S, M, L, XL, XXL',
      fabric: 'Jackerd (Player Version)',
      contact: 'Call/WhatsApp: 01816-665948',
      gallery: [
        'College Girl/WhatsApp Image 2025-10-02 at 21.41.34.jpeg',
        'College Girl/WhatsApp Image 2025-10-02 at 21.41.35 (2).jpeg',
        'College Girl/WhatsApp Image 2025-10-02 at 21.41.35.jpeg',
        'College Girl/WhatsApp Image 2025-10-02 at 21.41.36.jpeg',
      ],
    },
  },
  {
    id: 'jersey',
    name: 'School Boys',
    desc: 'Official Inter Cantt. tournament jersey in multiple sizes.',
    price: '৳ 470',
    image: 'College Boy/RAJCPSC-College-Boy.jpg',
    details: {
      size: 'S, M, L, XL, XXL',
      fabric: 'Jackerd (Player Version)',
      contact: 'Call/WhatsApp: 01816-665948',
      gallery: [
        'College Boy/WhatsApp Image 2025-10-02 at 21.41.37 (1).jpeg',
        'College Boy/WhatsApp Image 2025-10-02 at 21.41.38 (1).jpeg',
        'College Boy/WhatsApp Image 2025-10-02 at 21.41.39 (1).jpeg',
        'College Boy/WhatsApp Image 2025-10-02 at 21.41.39.jpeg',
      ],
    },
  },
  {
    id: 'bottle',
    name: 'School Girls',
   desc: 'Official Inter Cantt. tournament jersey in multiple sizes.',
    price: '৳ 470',
    image: 'School Girl /RAJCPSC-Girls.jpg',
    details: {
      size: 'S, M, L, XL, XXL',
      fabric: 'Jackerd (Player Version)',
      contact: 'Call/WhatsApp: 01816-665948',
      gallery: [
        'School Girl /WhatsApp Image 2025-10-02 at 21.41.41 (2).jpeg',
        'School Girl /WhatsApp Image 2025-10-02 at 21.41.42 (2).jpeg',
        'School Girl /WhatsApp Image 2025-10-02 at 21.41.42.jpeg',
        'School Girl /WhatsApp Image 2025-10-02 at 21.41.43.jpeg',
      ],
    },
  },
];

function createProductCard(p) {
  const card = document.createElement('article');
  card.className = 'card';

  const media = document.createElement('div');
  media.className = 'card-media';
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.name;
  media.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = p.name;

  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = p.desc;

  const meta = document.createElement('div');
  meta.className = 'card-meta';

  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = p.price;

  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '8px';

  const orderBtn = document.createElement('a');
  orderBtn.className = 'btn';
  orderBtn.textContent = 'Order';
  orderBtn.target = '_blank';
  // Pass product info as query for easier tracking on Airtable
  orderBtn.href = `${AIRTABLE_URL}?product=${encodeURIComponent(p.name)}&id=${encodeURIComponent(p.id)}`;

  const detailsBtn = document.createElement('button');
  detailsBtn.className = 'btn';
  detailsBtn.textContent = 'Details';
  detailsBtn.addEventListener('click', () => openDetails(p));

  actions.appendChild(detailsBtn);
  actions.appendChild(orderBtn);

  meta.appendChild(price);
  meta.appendChild(actions);

  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(meta);

  card.appendChild(media);
  card.appendChild(body);

  return card;
}

function renderProducts() {
  const root = document.getElementById('products');
  root.innerHTML = '';
  products.forEach((p, idx) => {
    const card = createProductCard(p);
    // Subtle staggered entrance animation
    card.style.animationDelay = `${idx * 60}ms`;
    root.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);

// Modal logic
const modalEl = document.getElementById('detailsModal');
const modalTitleEl = document.getElementById('modalTitle');
const modalGalleryEl = document.getElementById('modalGallery');
const modalSizeEl = document.getElementById('modalSize');
const modalFabricEl = document.getElementById('modalFabric');
const modalPriceEl = document.getElementById('modalPrice');
const modalContactEl = document.getElementById('modalContact');
const modalCloseBtn = document.getElementById('modalClose');

function openDetails(product) {
  if (!modalEl) return;
  modalTitleEl.textContent = product.name;
  modalSizeEl.textContent = product.details?.size || '—';
  modalFabricEl.textContent = product.details?.fabric || '—';
  modalPriceEl.textContent = product.price;
  modalContactEl.textContent = product.details?.contact || '—';

  // Fill gallery
  modalGalleryEl.innerHTML = '';
  const gallery = product.details?.gallery || [];
  gallery.slice(0, 4).forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${product.name} photo ${i + 1}`;
    img.addEventListener('click', () => openLightbox(src));
    modalGalleryEl.appendChild(img);
  });

  modalEl.classList.add('open');
  modalEl.setAttribute('aria-hidden', 'false');
}

function closeDetails() {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  modalEl.setAttribute('aria-hidden', 'true');
}

modalCloseBtn?.addEventListener('click', closeDetails);
modalEl?.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.getAttribute && target.getAttribute('data-close') === 'modal') {
    closeDetails();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDetails();
});

// Theme toggle logic
const THEME_STORAGE_KEY = 'rajcpsc-theme';
const themeToggleBtn = document.getElementById('themeToggle');

function applyTheme(theme) {
  const root = document.documentElement;
  const finalTheme = theme === 'dark' ? 'dark' : 'light';
  root.setAttribute('data-theme', finalTheme);
  localStorage.setItem(THEME_STORAGE_KEY, finalTheme);
  updateThemeToggleLabel(finalTheme);
}

function updateThemeToggleLabel(theme) {
  if (!themeToggleBtn) return;
  themeToggleBtn.textContent = theme === 'dark' ? 'Switch to Light' : 'Switch to Dark';
}

function initTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  // Explicitly default to LIGHT unless user previously chose otherwise
  const initial = saved || 'light';
  applyTheme(initial);
}

themeToggleBtn?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'light' ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', initTheme);

// Lightbox logic
const lightboxEl = document.getElementById('imageViewer');
const lightboxImg = document.getElementById('lightboxImage');
const lightboxStage = document.getElementById('lightboxStage');
const lightboxCloseBtn = document.getElementById('lightboxClose');
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const zoomResetBtn = document.getElementById('zoomReset');

let scale = 1;
let pos = { x: 0, y: 0 };
let dragging = false;
let start = { x: 0, y: 0 };

function applyTransform() {
  if (!lightboxImg) return;
  lightboxImg.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${scale})`;
  lightboxImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
}

function openLightbox(src) {
  if (!lightboxEl || !lightboxImg) return;
  lightboxImg.src = src;
  scale = 1; pos = { x: 0, y: 0 };
  lightboxEl.classList.add('open');
  lightboxEl.setAttribute('aria-hidden', 'false');
  applyTransform();
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove('open');
  lightboxEl.setAttribute('aria-hidden', 'true');
}

zoomInBtn?.addEventListener('click', () => { scale = Math.min(scale + 0.2, 4); applyTransform(); });
zoomOutBtn?.addEventListener('click', () => { scale = Math.max(scale - 0.2, 0.6); applyTransform(); });
zoomResetBtn?.addEventListener('click', () => { scale = 1; pos = { x: 0, y: 0 }; applyTransform(); });
lightboxCloseBtn?.addEventListener('click', closeLightbox);
lightboxEl?.addEventListener('click', (e) => {
  const target = e.target;
  if (target && target.getAttribute && target.getAttribute('data-close') === 'lightbox') {
    closeLightbox();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Drag to pan
lightboxStage?.addEventListener('mousedown', (e) => {
  if (scale <= 1) return; // only pan when zoomed in
  dragging = true;
  start = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  lightboxImg.style.cursor = 'grabbing';
});
window.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  pos = { x: e.clientX - start.x, y: e.clientY - start.y };
  applyTransform();
});
window.addEventListener('mouseup', () => { dragging = false; if (scale > 1) lightboxImg.style.cursor = 'grab'; });

// Wheel zoom
lightboxStage?.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = Math.sign(e.deltaY);
  scale = Math.min(4, Math.max(0.6, scale + (delta < 0 ? 0.2 : -0.2)));
  applyTransform();
}, { passive: false });

// Double-click to toggle zoom
lightboxStage?.addEventListener('dblclick', () => {
  scale = scale > 1 ? 1 : 2;
  applyTransform();
});

// Bind product card images to open lightbox
function bindLightboxToProductCards() {
  document.querySelectorAll('.card-media img').forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src));
  });
}

document.addEventListener('DOMContentLoaded', bindLightboxToProductCards);

// Set footer Airtable link from config
document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('airtableLink');
  if (a && AIRTABLE_URL) {
    a.href = AIRTABLE_URL;
  }
  const headerBtn = document.getElementById('headerOrderBtn');
  if (headerBtn && AIRTABLE_URL) {
    headerBtn.href = AIRTABLE_URL;
  }
});

// Touch support for lightbox (pan)
let touchDragging = false;
let touchStart = { x: 0, y: 0 };
lightboxStage?.addEventListener('touchstart', (e) => {
  if (scale <= 1) return;
  if (e.touches.length === 1) {
    touchDragging = true;
    const t = e.touches[0];
    touchStart = { x: t.clientX - pos.x, y: t.clientY - pos.y };
    lightboxImg.style.cursor = 'grabbing';
  }
}, { passive: true });

lightboxStage?.addEventListener('touchmove', (e) => {
  if (!touchDragging || e.touches.length !== 1) return;
  const t = e.touches[0];
  pos = { x: t.clientX - touchStart.x, y: t.clientY - touchStart.y };
  applyTransform();
}, { passive: true });

lightboxStage?.addEventListener('touchend', () => {
  touchDragging = false;
  if (scale > 1) lightboxImg.style.cursor = 'grab';
});