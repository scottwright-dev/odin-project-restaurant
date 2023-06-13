import createTabs from './tabManager';
import backgroundImage from '../img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png';

export function createHomePage (switchTab) {
    const content = document.querySelector('#content');

    createTabs(switchTab);
   
    // create elements
    const image = document.createElement('img');
    image.src = backgroundImage;
    image.alt = 'Ichiraku Ramen Bar';
    image.classList.add('homepage-image');
    content.appendChild(image);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    content.appendChild(textContainer);

    const title = document.createElement('h1');
    title.textContent = 'Ichiraku Ramen Bar';
    title.classList.add('homepage-title');
    textContainer.appendChild(title);

    const copyLine1 = document.createElement('p');
    copyLine1.textContent = 'Japanese tradition intertwined with modernity.';
    copyLine1.classList.add('homepage-copy');
    textContainer.appendChild(copyLine1);

    const copyLine2 = document.createElement('p');
    copyLine2.textContent = 'Crafting an extraordinary ramen experience in the heart of London.';
    copyLine2.classList.add('homepage-copy');
    textContainer.appendChild(copyLine2);
}