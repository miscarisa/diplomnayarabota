(() => {
  'use strict';

  const logo = document.querySelector('.pet-logo');
  if (logo) logo.src = '/logo.png';

  const data = {
    owner: 'PETROVA ALEKSANDRA / ABRITALIN BORIS',
    phone: '+7 960 471 4320',
    email: 'alexandrapetrova@mail.ru',
    species: 'cat',
    breed: 'Mix',
    sex: 'male',
    petName: 'Radja',
    birthDate: '08.12.2021',
    identification: 'microchip, 900136004019205',
    vaccination: 'Rabifel (Rabifel), серия №A218A03, дата введения: 11.06.2025',
    bloodDate: '05.07.2025',
    bloodPlace: 'Russia, Moscow / IP Rayfshnayder A.V',
    protocolNumber: 'RU-077/R-25003387',
    protocolDate: '10.07.2025',
    testNumber: '84699',
    testDate: '10.07.2025',
    result: 'Положительный поствакцинальный, точное значение 2.62 IU/ml'
  };

  document.querySelectorAll('[data-field]').forEach((node) => {
    const key = node.getAttribute('data-field');
    node.textContent = data[key] ?? '—';
  });

  const emailLink = document.getElementById('ownerEmail');
  if (emailLink) emailLink.href = `mailto:${data.email}`;

  document.title = `Протокол № ${data.protocolNumber} — ECert.Питомцы`;

  const menus = [
    { button: document.getElementById('appSwitch'), menu: document.getElementById('appMenu') },
    { button: document.getElementById('exportButton'), menu: document.getElementById('exportMenu') },
    { button: document.getElementById('localeButton'), menu: document.getElementById('localeMenu') },
    { button: document.getElementById('mobileMenuButton'), menu: document.getElementById('mobileDrawer') }
  ].filter((item) => item.button && item.menu);

  function closeAll(except) {
    menus.forEach(({ button, menu }) => {
      if (except && menu === except) return;
      menu.hidden = true;
      button.setAttribute('aria-expanded', 'false');
    });
  }

  menus.forEach(({ button, menu }) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const opening = menu.hidden;
      closeAll(menu);
      menu.hidden = !opening;
      button.setAttribute('aria-expanded', opening ? 'true' : 'false');
    });
    menu.addEventListener('click', (event) => event.stopPropagation());
  });

  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAll();
  });

  const backTop = document.getElementById('backTop');
  if (backTop) {
    const syncBackTop = () => backTop.classList.toggle('visible', window.scrollY > 360);
    window.addEventListener('scroll', syncBackTop, { passive: true });
    syncBackTop();
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();
