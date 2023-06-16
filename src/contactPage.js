import { createTabs } from './tabManager';

export function createContactPage(parentElement, switchTab) {
  createTabs(switchTab);

  // contact content
  const contactContainer = document.createElement('div');
  contactContainer.textContent = 'contact info to be added here';

  parentElement.appendChild(contactContainer);
}
