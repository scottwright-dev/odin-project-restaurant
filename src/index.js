import { createHomePage } from './homePage';
import { createMenuPage } from './menuPage';

const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');

// Tab switching
function switchTab(tab) {
  const contentDiv = document.querySelector('#content');
  contentDiv.textContent = '';

  switch (tab) {
    case 'home':
      createHomePage(contentDiv);
      break;
    case 'menu':
      createMenuPage(contentDiv);
      break;
    default:
      break;
  }
}

// Initial loading
function initialLoad() {
  createHomePage();
  switchTab('home'); // Display home page initially
}

initialLoad();

