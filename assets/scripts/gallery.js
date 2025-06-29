const selectSeasonBtn = document.querySelectorAll('.select-season-btn');
const portfolioImg = document.querySelectorAll('.portfolio-photo');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

if (!localStorage.season) {
  localStorage.season = "spring";
}

let randomSeason = Math.floor(Math.random() * (selectSeasonBtn.length-1));
selectSeasonBtn[randomSeason].classList.add('btn__active');
portfolioImg.forEach((el, idx) => {
  el.src = `assets/images/menu/${selectSeasonBtn[randomSeason].dataset.season}/${idx + 1}.jpg`;
});

function preloadImgs() {
  seasons.forEach((el) => {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `assets/images/menu/${el}/${i}.jpg`;
    }
  });
}
preloadImgs();

function changeSeason(event) {
  selectSeasonBtn.forEach((el) => {
    el.classList.remove('btn__active');
  });
  event.target.classList.add('btn__active');
  if (event.target.classList.contains('btn__active')) {
    portfolioImg.forEach((el, idx) => {
      el.src = `assets/images/menu/${event.target.dataset.season}/${idx + 1}.jpg`;
    });
  }
};
selectSeasonBtn.forEach((el) => {
  el.addEventListener('click', changeSeason);
});

