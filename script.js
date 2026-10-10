const tabs = document.querySelectorAll('.audience-tab');
const panels = document.querySelectorAll('.program-grid');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.audience;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    panels.forEach((panel) => {
      const selected = panel.id === target;
      panel.hidden = !selected;
      panel.classList.toggle('active', selected);
    });
  });
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
