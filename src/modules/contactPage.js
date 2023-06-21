import createTabs from './tabManager';

export function createContactPage(parentElement, switchTab) {
  createTabs(switchTab);

  const contactContainer = document.createElement('div');

  const bgImage = document.createElement('img');
  bgImage.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash.jpg';
  bgImage.classList.add('contactpage-bg');
  contactContainer.appendChild(bgImage);

  const map = document.createElement('img');
  map.src = '../src/img/ichiraku-map.png';
  map.alt = 'location map of restaurant. 23 Frith Street London W1'
  map.classList.add('map');
  contactContainer.appendChild(map);

  parentElement.appendChild(contactContainer);
}
