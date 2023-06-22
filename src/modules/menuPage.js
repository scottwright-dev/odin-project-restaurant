import createTabs from './tabManager';

export function createMenuPage(parentElement, switchTab) {
  createTabs(switchTab);

  const menuContainer = document.createElement('div');

  const bgImage = document.createElement('img');
  bgImage.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png';
  bgImage.classList.add('menupage-bg');
  menuContainer.appendChild(bgImage);

  parentElement.appendChild(menuContainer);
}
