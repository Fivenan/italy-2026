(() => {
  const toggles = [...document.querySelectorAll('.day details')];
  const expand = document.querySelector('#expand-days');
  const updateLabel = () => { if (expand) expand.textContent = toggles.every(d => d.open) ? 'Collapse all days −' : 'Expand all days +'; };
  if (expand) expand.addEventListener('click', () => { const open = !toggles.every(d => d.open); toggles.forEach(d => d.open = open); updateLabel(); });
  toggles.forEach(d => d.addEventListener('toggle', updateLabel));
  updateLabel();
  const storeKey = 'italy-2026-revised-checklist-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storeKey) || '{}') || {}; } catch (_) {}
  const boxes = [...document.querySelectorAll('.check input')];
  const progress = () => {
    boxes.forEach(box => box.closest('.check').classList.toggle('done', box.checked));
    const count = document.querySelector('#check-count');
    if (count) count.textContent = `${boxes.filter(box => box.checked).length} / ${boxes.length} ready`;
  };
  boxes.forEach(box => {
    box.checked = saved[box.id] === true;
    box.addEventListener('change', () => {
      saved[box.id] = box.checked;
      try { localStorage.setItem(storeKey, JSON.stringify(saved)); } catch (_) {}
      progress();
    });
  });
  progress();
  document.querySelector('#print-guide')?.addEventListener('click', () => window.print());
  const revealHash = () => {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (target?.tagName === 'DETAILS') target.open = true;
    else if (target?.classList.contains('day')) target.querySelector('details').open = true;
  };
  window.addEventListener('hashchange', revealHash);
  revealHash();
  let beforePrint = [];
  window.addEventListener('beforeprint', () => { beforePrint = [...document.querySelectorAll('details')].map(d => [d, d.open]); beforePrint.forEach(([d]) => d.open = true); });
  window.addEventListener('afterprint', () => beforePrint.forEach(([d, open]) => d.open = open));
  const links = [...document.querySelectorAll('.daynav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries.find(e => e.isIntersecting);
      if (entry) links.forEach(a => { const active = a.hash === `#${entry.target.id}`; a.classList.toggle('active', active); if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
    }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('.day').forEach(day => observer.observe(day));
  }
})();
