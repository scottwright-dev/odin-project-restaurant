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
  const menuTab = createIndividualTab('Menu', 'menu');
  const contactTab = createIndividualTab('Contact', 'contact');

  content.appendChild(homeTab);
  content.appendChild(menuTab);
  content.appendChild(contactTab);
}

export default createTabs;
