const speakers = [
  {
    id: 1,
    name: 'SohYeong Noh',
    title: 'Brekmen Professor of Entrepreneuial Studies at Harvard Low Schoo',
    description: `SohYeong Noh is sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: './assets/images/speaker1.png',
  },
  {
    id: 2,
    name: 'Yochai Beankler',
    title: 'Director of Art Center Nabi and a board member of IPS Koria',
    description: `Yochai Beankler is consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: './assets/images/speaker2.png',
  },
  {
    id: 3,
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    description: `Lila Tretikov is adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: './assets/images/speaker4.png',
  },
  {
    id: 4,
    name: 'Kilnam Chon',
    title: 'Executive Director of the Wikimedia Foundation',
    description: `Kilnam Chon is adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: './assets/images/speaker3.png',
  },
  {
    id: 5,
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    description: `Julia Leda is corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: './assets/images/speaker6.png',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    title: 'CEO of Creative Commons. ex COO of the Mozilla Foundation',
    description: `Ryan Merkley is dolor sit amet consectetur adipisicing elit. Corrupti, 
                alias! Ad quibusdam quam fugiat doloribus commodi enim 
                sapiente corrupti quidem impedit, voluptatum, provident vitae at.`,
    image: './assets/images/speaker5.png',
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

/** *******************************************
************* Dynamic Featured section ********
********************************************* */
const speakerContainer = document.getElementById('speakers');

function createSpeakerHtml(speaker) {
  const speakerItem = document.createElement('li');
  speakerItem.classList.add('speaker-item');

  const html = `
    <div class="image-wrapper">
      <img src=${speaker.image} alt="Speaker">
    </div>
    <div>
      <h3 class="speaker-name">${speaker.name}</h3>
      <span class="speaker-title">${speaker.title}</span>
      <div class="speaker-divder"></div>
      <p class="speaker-description">${speaker.description}</p>
    </div>
  `
  speakerItem.innerHTML = html;
  speakerContainer.appendChild(speakerItem);
}

speakers.forEach((speaker) => createSpeakerHtml(speaker));

