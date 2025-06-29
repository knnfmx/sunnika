const ENGLISH = document.getElementById('english');
const RUSSIAN = document.getElementById('russian');
const languageSelect = document.querySelectorAll('.language');
const allLanguages = ['en', 'ru'];


const i18Obj = {
  'unit': {
    'en': 'Portfolio',
    'ru': 'Портфолио',
  },
  'skills': {
    'en': 'О нас',
    'ru': 'О нас',
  },
  'portfolio': {
    'en': 'Меню',
    'ru': 'Меню',
  },
  'video': {
    'en': 'Видео',
    'ru': 'Видео',
  },
  'price': {
    'en': 'Прайс',
    'ru': 'Прайс',
  },
  'contacts': {
    'en': 'Контакты',
    'ru': 'Контакты',
  },
  'delivery': {
    'en': 'Доставка',
    'ru': 'Доставка',
  },
  'hero-title':{
    'en': 'Кафе Сунника',
    'ru': 'Кафе Сунника',
  },
  'hero-text': {
    'en': '<p class="hero-section-description-mandatory _lng-hero-text theme">Вкус, который говорит сам за себя</p><p class="hero-section-description-secondary _lng-hero-text theme">Почувствуйте настоящую еду — с дымком, с душой, с характером.</p>',
    'ru': '<p class="hero-section-description-mandatory _lng-hero-text theme">Вкус, который говорит сам за себя</p>
    <p class="hero-section-description-secondary _lng-hero-text theme">Почувствуйте настоящую еду — с дымком, с душой, с характером.</p>',
  },
  'hire': {
    'en': 'Заказать',
    'ru': 'Заказать',
  },
  'skills-section': {
    'en': 'О нас',
    'ru': 'О нас',
  },
  'skill-title-1': {
    'en': 'Свежая выпечка',
    'ru': 'Свежая выпечка',
  },
  'skill-text-1': {
    'en': 'У нас всегда ароматно и тепло — потому что мы печём сами, каждый день. Хрустящие круассаны, мягкие булочки и пышные пироги — только из свежих ингредиентов и с любовью к деталям. Заходи на запах!',
    'ru': 'У нас всегда ароматно и тепло — потому что мы печём сами, каждый день. Хрустящие круассаны, мягкие булочки и пышные пироги — только из свежих ингредиентов и с любовью к деталям. Заходи на запах!е',
  },
  'skill-title-2': {
    'en': 'Сочное мясо',
    'ru': 'Сочное мясо',
  },
  'skill-text-2': {
    'en': 'Мы готовим мясо так, как его любят настоящие гурманы: с огнём, ароматом и уважением к каждому куску. Стейки, бургеры, шаверма — всё на высшем уровне, из свежих продуктов и с правильной прожаркой. Без лишнего — только вкус.',
    'ru': 'Мы готовим мясо так, как его любят настоящие гурманы: с огнём, ароматом и уважением к каждому куску. Стейки, бургеры, шаверма — всё на высшем уровне, из свежих продуктов и с правильной прожаркой. Без лишнего — только вкус.',
  },
  'skill-title-3': {
    'en': 'Обеденное меню',
    'ru': 'Обеденное меню',
  },
  'skill-text-3': {
    'en': 'Каждый день — как домашний. Готовим сытные, свежие и по-настоящему вкусные обеды, чтобы ты не тратил время на готовку и не шел на компромиссы со вкусом. Всё по-честному: мясо, гарниры, салаты — как надо!',
    'ru': 'Каждый день — как домашний. Готовим сытные, свежие и по-настоящему вкусные обеды, чтобы ты не тратил время на готовку и не шел на компромиссы со вкусом. Всё по-честному: мясо, гарниры, салаты — как надо!',
  },
  'skill-title-4': {
    'en': 'Выездная торговля',
    'ru': 'Выездная торговля',
  },
  'skill-text-4': {
    'en': 'Мы — не просто кафе, мы — кухня на колёсах. Организуем выездную торговлю и готовим прямо на месте: на фестивалях, вечеринках, корпоративах и любых мероприятиях. Горячее мясо, свежая выпечка, ароматная еда — всё, как вы любите, только ближе.',
    'ru': 'Мы — не просто кафе, мы — кухня на колёсах. Организуем выездную торговлю и готовим прямо на месте: на фестивалях, вечеринках, корпоративах и любых мероприятиях. Горячее мясо, свежая выпечка, ароматная еда — всё, как вы любите, только ближе.',
  },
  'winter': {
    'en': 'Выпечка',
    'ru': 'Выпечка',
  },
  'spring': {
    'en': 'Мясо',
    'ru': 'Мясо'
  },
  'summer': {
    'en': 'Обеды',
    'ru': 'Обеды',
  },
  'autumn': {
    'en': 'Пиццы',
    'ru': 'Пиццы',
  },
  'offer-standart': {
    'en': 'standart',
    'ru': 'стандарт',
  },
  'offer-premium': {
    'en': 'premium',
    'ru': 'премиум',
  },
  'offer-gold': {
    'en': 'gold',
    'ru': 'золотой',
  },
  'price-description-1-span-1': {
    'en': 'One location',
    'ru': 'Одна локация',
  },
  'price-description-1-span-2': {
    'en': '120 photos in color',
    'ru': '120 цветных фото',
  },
  'price-description-1-span-3': {
    'en': '12 photos in retouch',
    'ru': '12 отретушированных фото',
  },
  'price-description-1-span-4': {
    'en': 'Readiness 2-3 weeks',
    'ru': 'Готовность через 2-3 недели',
  },
  'price-description-1-span-5': {
    'en': 'Make up, visage',
    'ru': 'Макияж, визаж',
  },
  'price-description-2-span-1': {
    'en': 'One or two locations',
    'ru': 'Одна-две локации',
  },
  'price-description-2-span-2': {
    'en': '200 photos in color',
    'ru': '200 цветных фото',
  },
  'price-description-2-span-3': {
    'en': '20 photos in retouch',
    'ru': '20 отретушированных фото',
  },
  'price-description-2-span-4': {
    'en': 'Readiness 1-2 weeks',
    'ru': 'Готовность через 1-2 недели',
  },
  'price-description-2-span-5': {
    'en': 'Make up, visage',
    'ru': 'Макияж, визаж',
  },
  'price-description-3-span-1': {
    'en': 'Three locations or more',
    'ru': 'Три локации и больше',
  },
  'price-description-3-span-2': {
    'en': '300 photos in color',
    'ru': '300 цветных фото',
  },
  'price-description-3-span-3': {
    'en': '50 photos in retouch',
    'ru': '50 отретушированных фото',
  },
  'price-description-3-span-4': {
    'en': 'Readiness 1 week',
    'ru': 'Готовность через 1 неделю',
  },
  'price-description-3-span-5': {
    'en': 'Make up, visage, hairstyle',
    'ru': 'Макияж, визаж, прическа',
  },
  'order': {
    'en': 'Заказать',
    'ru': 'Заказать',
  },
  'contact-me': {
    'en': 'Cвяжитесь <span class="section-title-lowercase"> с нами</span>',
    'ru': 'Свяжитесь <span class="section-title-lowercase"> с нами</span>',
  },
  'send-message': {
    'en': 'Отправить',
    'ru': 'Отправить',
  },   
}

// Change URL address
languageSelect.forEach((el) => {
  el.addEventListener('click', (ev) => {
    let lang = ev.target.hash;
    location.href = window.location.pathname + lang;
    location.reload();
  });
});

// Change language
function languageChange() {
  var hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash);
  if (!allLanguages.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  for (let key in i18Obj) {
    var elements = document.querySelectorAll(`._lng-${key}`);
    if (elements) {
      elements.forEach(el => {
        el.innerHTML = i18Obj[key][hash];
      });
    }
  }
  return (hash == 'en') ? ENGLISH.classList.add('language-active') : RUSSIAN.classList.add('language-active');
}
languageChange();
