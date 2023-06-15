import { createHomePage } from './homePage';
import { createMenuPage } from './menuPage';

// Tab switching
function switchTab(tab) {
  const contentDiv = document.querySelector('#content');
  contentDiv.textContent = '';

  switch (tab) {
    case 'home':
      createHomePage(contentDiv, switchTab);
      break;
    case 'menu':
      createMenuPage(contentDiv, switchTab);
      break;
    default:
      break;
  }
}

// Initial loading
function initialLoad() {
  const contentDiv = document.querySelector('#content');
  createHomePage(contentDiv, switchTab);
  switchTab('home'); // Display home page initially
}

initialLoad();


