export function createMenuPage(parentElement, switchTab) {
    const content = document.querySelector('#content');
  
    // home tab
    const home = document.createElement('a');
    home.textContent = 'Home';
    home.href = '#';
    home.addEventListener('click', () => switchTab('home'));
    content.appendChild(home);

    // menu content
    const menuContainer = document.createElement('div');
    menuContainer.textContent = 'Menu items to be added here';
    
    parentElement.appendChild(menuContainer);
  }
  