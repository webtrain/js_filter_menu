const menu = [
  {
    id: 1,
    title: 'buttermilk pencakes',
    category: 'dessert',
    price: 15.99,
    img: './img/dessert3.jpg',
    desc: 'I\'m baby woke milkshake wolf bitters live-edge rock bottle, hammock freegan copper mug whatever cold pressed'
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './img/lunch1.jpg',
    desc: 'Minions ipsum daa jeje tulaliloo tulaliloo jeje daa. Bee do bee do bee do po kass daa po kass bananaaaa bananaaaa. Chasy jeje potatoooo bananaaaa pepete tank yuuu!'
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'dessert',
    price: 6.99,
    img: './img/shake1.jpg',
    desc: 'Potatoooo bananaaaa pepete la bodaaa para tú tatata bala tu uuuhhh uuuhhh belloo! Bananaaaa jiji. Para tú para tú potatoooo underweaaar hana dul sae.'
  },
  {
    id: 4,
    title: 'country delight',
    category: 'lunch',
    price: 20.99,
    img: './img/lunch2.jpg',
    desc: 'Daa daa chasy poopayee pepete baboiii tulaliloo. Gelatooo uuuhhh poulet tikka masala potatoooo bappleees potatoooo poopayee hana dul sae.'
  },
  {
    id: 5,
    title: 'big hamburger',
    category: 'breakfast',
    price: 22.99,
    img: './img/hambi1.jpg',
    desc: 'Minions ipsum pepete tank yuuu! Butt po kass belloo! Bee do bee do bee do. Tatata bala tu para tú hana dul sae tatata bala tu bananaaaa.'
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'dessert',
    price: 18.99,
    img: './img/dessert2.jpg',
    desc: 'Baboiii gelatooo jeje poulet tikka masala aaaaaah potatoooo butt gelatooo bappleees bee do bee do bee do.'
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './img/item2.jpg',
    desc: 'Wiiiii pepete pepete tatata bala tu. Poopayee wiiiii belloo! Tatata bala tu po kass pepete tulaliloo poulet tikka masala tulaliloo belloo!'
  },
  {
    id: 8,
    title: 'american classic',
    category: 'breakfast',
    price: 12.99,
    img: './img/item3.jpg',
    desc: 'Baboiii bananaaaa hana dul sae baboiii tulaliloo poopayee me want bananaaa! Butt potatoooo tatata bala tu. Bananaaaa uuuhhh tatata bala tu tulaliloo butt jiji.'
  },
  {
    id: 9,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './img/lunch3.jpg',
    desc: 'Underweaaar poopayee bappleees poulet tikka masala bappleees ti aamoo! Bappleees poulet tikka masala. Pepete me want bananaaa! Hana dul sae daa chasy baboiii.'
  },
  {
    id: 10,
    title: 'Zing\'s favourite',
    category: 'dinner',
    price: 17.99,
    img: './img/lunch4.jpg',
    desc: 'Minions ipsum pepete tank yuuu! Butt po kass belloo! Bee do bee do bee do. Tatata bala tu para tú hana dul sae tatata bala tu bananaaaa.'
  }
]

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
});



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    
    return `<article class="menu-item">
              <img src="${item.img}" alt="${item.title}" class="photo">
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  })

  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce((values, item) => {
    if(!values.includes(item.category)) {
      values.push(item.category)
    }

    return values;
  }, ['all']);

  const categoryBtns = categories.map(category => {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join('');

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');

  // filter items
  filterBtns.forEach( btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;

      const menuCategory = menu.filter(menuItem => {
        if(menuItem.category === category) {
          return menuItem;
        }
      });
      
      if(category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    })
  });
}