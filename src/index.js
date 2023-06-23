import { createHomePage } from './modules/homePage';
import { createMenuPage } from './modules/menuPage';
import { createContactPage } from './modules/contactPage';
import './style.css';

// Tab switching
function switchTab(tab) {
  const contentDiv = document.querySelector('#content');
  contentDiv.textContent = '';

  switch (tab) {
    case 'home':
      createHomePage(switchTab);
      break;
    case 'menu':
      createMenuPage(contentDiv, switchTab);
      break;
    case 'contact':
      createContactPage(contentDiv, switchTab);
      break;
    default:
  }
}

// Initial loading
function initialLoad() {
  const contentDiv = document.querySelector('#content');
  createHomePage(contentDiv, switchTab);
  switchTab('home'); // Display home page initially
}

initialLoad();