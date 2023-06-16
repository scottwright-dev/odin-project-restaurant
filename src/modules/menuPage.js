import createTabs from './tabManager';

export function createMenuPage(parentElement, switchTab) {
  createTabs(switchTab);

  // menu content
  const menuContainer = document.createElement('div');
  menuContainer.textContent = 'Menu items to be added here';

  parentElement.appendChild(menuContainer);
}
