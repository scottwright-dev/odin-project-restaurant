import createTabs from './tabManager';

export function createHomePage (switchTab) {
    const content = document.querySelector('#content');

    createTabs(switchTab);
   
    // create elements
    const image = document.createElement('img');
    image.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash.jpg';
    image.alt = 'Ichiraku Ramen Bar';
    image.classList.add('homepage-image');
    content.appendChild(image);

    const title = document.createElement('h1');
    title.textContent = 'Ichiraku Ramen Bar';
    title.classList.add('homepage-title');
    content.appendChild(title);

    const copy = document.createElement('p');
    copy.textContent = 'Japanese tradition intertwined with modernity. Crafting an extraordinary ramen experience in the heart of London.';
    copy.classList.add('homepage-copy');
    content.appendChild(copy);
}