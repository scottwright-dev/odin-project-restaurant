export function createHomePage (contentElement, switchTab) {
    const content = document.querySelector('#content');
   
    // create elements
    const image = document.createElement('img');
    image.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash.jpg';
    image.alt = 'Ichiraku Ramen Bar';
    content.appendChild(image);

    const title = document.createElement('h1');
    title.textContent = 'Ichiraku Ramen Bar';
    content.appendChild(title);

    const copy = document.createElement('p');
    copy.textContent = 'Step into Ichiraku Ramen Bar, where Japanese tradition intertwines with modernity to craft an extraordinary ramen experience in the heart of London.';
    content.appendChild(copy);

    const menuTab = document.createElement('a');
    menuTab.textContent = 'Menu';
    menuTab.href = '#';
    menuTab.addEventListener('click', () => switchTab('menu'));
    content.appendChild(menuTab);
}