document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sun = document.querySelector('.light-theme-icon');
  const moon = document.querySelector('.dark-theme-icon');
  let elementsToChange = document.querySelectorAll('.theme');
  console.log(elementsToChange);

  if (!localStorage.theme) {
    localStorage.theme = 'dark-theme';
  }

  body.classList.add(localStorage.theme);
  elementsToChange.forEach(el => {
    el.classList.add(localStorage.theme);
  });

  function themeToggle() {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      body.classList.toggle('light-theme');
      elementsToChange.forEach(el => {
        el.classList.toggle('dark-theme');
        el.classList.toggle('light-theme');
      });
      localStorage.theme = body.className;
    });
  }
  themeToggle();
});

