const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.profile-panel');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const profile = tab.dataset.profile;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === profile);
    });
  });
}
