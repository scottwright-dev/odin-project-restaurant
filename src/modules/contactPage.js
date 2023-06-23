import createTabs from './tabManager';

export function createContactPage(parentElement, switchTab) {
  createTabs(switchTab);

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const bgImage = document.createElement('img');
  bgImage.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png';
  bgImage.classList.add('contactpage-bg');
  contactContainer.appendChild(bgImage);

  const map = document.createElement('img');
  map.src = '../src/img/ichiraku-map.png';
  map.alt = 'location map of restaurant: 45 Frith Street, London W1'
  map.classList.add('map');
  contactContainer.appendChild(map);

  const textContainer = document.createElement('div');
  textContainer.classList.add('contact-text-container');
  contactContainer.appendChild(textContainer);

  const addressHeader = document.createElement('h2');
  addressHeader.textContent = 'Address';
  textContainer.appendChild(addressHeader);

  const address = document.createElement('p');
  address.textContent = '45 Frith Street, London W1D 4SG';
  textContainer.appendChild(address);

  const openingTimes = document.createElement('h2');
  openingTimes.textContent = 'Opening Times';
  openingTimes.classList.add('opening-times-header');
  textContainer.appendChild(openingTimes);

  const openingTimesList = document.createElement('ul');

  const listItem1 = document.createElement('li');
  listItem1.textContent = 'Mon - Thur 12:00 - 22:30';
  openingTimesList.appendChild(listItem1);

  const listItem2 = document.createElement('li');
  listItem2.textContent = 'Fri + Sat 12:00 - 00:00';
  openingTimesList.appendChild(listItem2);

  const listItem3 = document.createElement('li');
  listItem3.textContent = 'Sun - Closed';
  openingTimesList.appendChild(listItem3);

  textContainer.appendChild(openingTimesList);

  const bookingsHeader = document.createElement('h2');
  bookingsHeader.textContent = 'Bookings';
  bookingsHeader.classList.add('bookings-header');
  textContainer.appendChild(bookingsHeader);

  const bookingsInfo = document.createElement('p');
  bookingsInfo.textContent = 'For bookings please email us at:';
  textContainer.appendChild(bookingsInfo);

  const email = document.createElement('a');
  email.href = 'mailto:hello@ichiraku.co.uk';
  email.textContent = 'hello@ichiraku.co.uk';
  textContainer.appendChild(email);

  const callInfo = document.createElement('p');
  callInfo.textContent = 'or call:';
  textContainer.appendChild(callInfo);

  const phoneNumber = document.createElement('a');
  phoneNumber.href = 'tel:+442030195082';
  phoneNumber.textContent = '020 3019 5082';
  textContainer.appendChild(phoneNumber);

  contactContainer.appendChild(textContainer);
  parentElement.appendChild(contactContainer);
}
