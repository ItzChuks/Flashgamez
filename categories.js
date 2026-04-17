// Shared categories list for Flashgamez Electronics
const CATEGORIES = [
  { id: 'smartphones',  name: 'Smartphones',      icon: '📱', color: 'var(--neon)' },
  { id: 'tvs',          name: 'Smart TVs',         icon: '📺', color: 'var(--neon2)' },
  { id: 'laptops',      name: 'Laptops',           icon: '💻', color: '#a855f7' },
  { id: 'audio',        name: 'Audio',             icon: '🔊', color: '#22c55e' },
  { id: 'cameras',      name: 'Cameras',           icon: '📷', color: '#f59e0b' },
  { id: 'networking',   name: 'Networking',        icon: '🛜', color: '#06b6d4' },
  { id: 'mining',       name: 'Crypto Mining',     icon: '⛏️', color: '#eab308' },
  { id: 'outdoor',      name: 'Outdoor & More',    icon: '🌿', color: '#4ade80' },
  { id: 'videogames',   name: 'Video Games',       icon: '🎮', color: '#f43f5e' },
  { id: 'watches',      name: 'Watches',           icon: '⌚', color: '#8b5cf6' },
  { id: 'speakers',     name: 'Speakers',          icon: '🔈', color: '#ec4899' },
  { id: 'bikes',        name: 'Bikes',             icon: '🚲', color: '#84cc16' },
  { id: 'engines',      name: 'Outboard Engines',  icon: '⚙️', color: '#f97316' },
  { id: 'autos',        name: 'Autos',             icon: '🚗', color: '#3b82f6' },
  { id: 'motorcycles',  name: 'Motorcycles',       icon: '🏍️', color: '#e11d48' },
  { id: 'dj-studio',   name: 'DJ & Studio',       icon: '🎚️', color: '#7c3aed' },
];

// Helper function to get category name by ID
function getCategoryName(id) {
  const category = CATEGORIES.find(c => c.id === id);
  return category ? category.name : id;
}

// Helper function to populate category select
function populateCategorySelect(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;
  
  select.innerHTML = '<option value="">Select a category</option>';
  CATEGORIES.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.id;
    option.textContent = cat.name;
    select.appendChild(option);
  });
}