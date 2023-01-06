const speakers = [
  {
    id: 1,
    name: '',
    title: 'Brekmen Professor of Entrepreneuial Studies at Harvard Low Schoo',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '',
  },
  {
    id: 2,
    name: '',
    title: 'Director of Art Center Nabi and a board member of IPS Koria',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '',
  },
  {
    id: 3,
    name: '',
    title: 'Executive Director of the Wikimedia Foundation',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '',
  },
  {
    id: 3,
    name: '',
    title: 'Executive Director of the Wikimedia Foundation',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '',
  },
  {
    id: 3,
    name: '',
    title: 'President of Young Pirates of Europe',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '',
  },
  {
    id: 3,
    name: '',
    title: 'CEO of Creative Commons. ex COO of the Mozilla Foundation',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: '',
  },
];

/** *******************************************
************* Mobile Menu**********************
********************************************* */

const menuIcon = document.getElementById('menu-icon');
const mainContent = document.getElementById('main-content');
const menuModal = document.getElementById('menu-modal');
const menuCloseBtn = document.getElementById('close-icon');
const listItems = document.querySelectorAll('.menu-item');

// Listener's functions
const openMenuModal = () => {
  menuModal.classList.add('expanded');
  menuIcon.classList.add('blur-bg');
  mainContent.classList.add('blur-bg');
};

const closeMenuModal = () => {
  menuModal.classList.remove('expanded');
  menuIcon.classList.remove('blur-bg');
  mainContent.classList.remove('blur-bg');
};

// Listeners
menuIcon.addEventListener('click', openMenuModal);
menuCloseBtn.addEventListener('click', closeMenuModal);
listItems.forEach((item) => {
  item.addEventListener('click', closeMenuModal);
});
