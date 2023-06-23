import createTabs from './tabManager';

export function createMenuPage(parentElement, switchTab) {
  createTabs(switchTab);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menupage-container');
  parentElement.appendChild(menuContainer);

  const bgImage = document.createElement('img');
  bgImage.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png';
  bgImage.classList.add('menupage-bg');
  menuContainer.appendChild(bgImage);

  const textContainer = document.createElement('div');
  textContainer.classList.add('menu-text-container');
  menuContainer.appendChild(textContainer);

  const ramenHeader = document.createElement('h2');
  ramenHeader.textContent = 'Ramen';
  textContainer.appendChild(ramenHeader);

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');
  textContainer.appendChild(menuList);

  const createMenuItem = function(title, description, price) {
    const listItem = document.createElement('li');

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = title;
    itemTitle.classList.add('menu-item-title');
    listItem.appendChild(itemTitle);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    itemDescription.classList.add('menu-item-description');
    listItem.appendChild(itemDescription);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    itemPrice.classList.add('menu-item-price');
    listItem.appendChild(itemPrice);

    return listItem;
  };

  const tonkotsuItem = createMenuItem('Tonkotsu', '18 hour pork bone broth, chashu pork belly, wood ear mushroom, spring onion, tamago egg, black garlic oil.', '£14');
  menuList.appendChild(tonkotsuItem);

  const tantanmenItem = createMenuItem('Tantanmen', 'Chicken mince & pulled chicken, sesame, chilli bits, bok choy, beansprouts, tamago egg.', '£13');
  menuList.appendChild(tantanmenItem);

  const spicyMisoItem = createMenuItem('Spicy Miso', 'Miso base, sliced beef, bamboo shoots, bean sprouts, spring onion, tamago egg.', '£14');
  menuList.appendChild(spicyMisoItem);

  const veganItem = createMenuItem('Vegan', 'Shiitake mushroom and porcini-soya milk broth, asparagus, spring onion, wood ear mushroom, Shirataki noodles.', '£13');
  menuList.appendChild(veganItem);

  const drinksHeader = document.createElement('h2');
  drinksHeader.textContent = 'Drinks';
  textContainer.appendChild(drinksHeader);

  const drinksList = document.createElement('ul');
  drinksList.classList.add('menu-list');
  textContainer.appendChild(drinksList);

  const beersItem = createMenuItem('Beers', 'Kirin, Asahi, Sapporo', '£6 each');
  drinksList.appendChild(beersItem);

  const yuzuPunchItem = createMenuItem('Yuzu Punch', '', '£7');
  drinksList.appendChild(yuzuPunchItem);

  const mineralWaterItem = createMenuItem('Mineral Water', 'Still, sparkling', '£3');
  drinksList.appendChild(mineralWaterItem);

  const teaItem = createMenuItem('Teas', 'Green Tea, Jasmine Tea', '£2');
  drinksList.appendChild(teaItem);

}
