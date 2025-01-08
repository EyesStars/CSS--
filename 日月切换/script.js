const config = {
  theme: 'dark'
};

const update = () => {
  document.documentElement.dataset.theme = config.theme;
};

const toggle = document.querySelector('.toggle');

update();

const handleToggle = () => {
  const light = !!toggle.matches('[aria-pressed="false"]');
  toggle.setAttribute('aria-pressed', light);
  config.theme = light ? 'light' : 'dark';
  update();
};
toggle.addEventListener('click', handleToggle);