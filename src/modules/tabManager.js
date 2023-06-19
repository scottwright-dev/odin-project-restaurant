function createTabs(switchTab) {
  const content = document.querySelector('#content');

  function createIndividualTab(label, tabName) {
    const tab = document.createElement('a');
    tab.textContent = label;
    tab.href = '#';
    tab.addEventListener('click', () => switchTab(tabName));
    return tab;
  }

  const homeTab = createIndividualTab('Home', 'home');
  homeTab.classList.add('nav-tabs');
  content.appendChild(homeTab);

  const menuTab = createIndividualTab('Menu', 'menu');
  menuTab.classList.add('nav-tabs');
  content.appendChild(menuTab);

  const contactTab = createIndividualTab('Contact', 'contact');
  contactTab.classList.add('nav-tabs');
  content.appendChild(contactTab);

}

export default createTabs;
