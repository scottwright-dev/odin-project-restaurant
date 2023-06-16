  export function createContactPage(parentElement, switchTab) {
    const content = document.querySelector('#content');
  
    // home tab
    const home = document.createElement('a');
    home.textContent = 'Home';
    home.href = '#';
    home.addEventListener('click', () => switchTab('home'));
    content.appendChild(home);

    // contact content
    const contactContainer = document.createElement('div');
    contactContainer.textContent = 'contact info to be added here';
    
    parentElement.appendChild(contactContainer);
  }
  