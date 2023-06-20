function createTabs(switchTab) {
  const content = document.querySelector('#content');

  function createIndividualTab(label, tabName) {
    const tab = document.createElement('a');
    tab.textContent = label;
    tab.href = '#';
    tab.addEventListener('click', () => switchTab(tabName));
    return tab;
  }

  const tabContainer = document.createElement('div');
  tabContainer.classList.add('nav-tabs-container');

  const homeTab = createIndividualTab('Home', 'home');
  homeTab.classList.add('nav-tabs');
  tabContainer.appendChild(homeTab);

  const menuTab = createIndividualTab('Menu', 'menu');
  menuTab.classList.add('nav-tabs');
  tabContainer.appendChild(menuTab);

  const contactTab = createIndividualTab('Contact', 'contact');
  contactTab.classList.add('nav-tabs');
  tabContainer.appendChild(contactTab);

  content.appendChild(tabContainer);
}

export default createTabs;
