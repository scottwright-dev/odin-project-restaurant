import createTabs from './tabManager';

export function createContactPage(parentElement, switchTab) {
  createTabs(switchTab);

  const contactContainer = document.createElement('div');

  const bgImage = document.createElement('img');
  bgImage.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash.jpg';
  bgImage.classList.add('contactpage-bg');
  contactContainer.appendChild(bgImage);

  parentElement.appendChild(contactContainer);
}
