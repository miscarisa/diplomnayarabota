(() => {
  'use strict';

  const data = {
    owner: 'PETROVA ALEKSANDRA / ABRITALIN BORIS',
    phone: '—',
    email: '—',
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

  document.title = `Протокол № ${data.protocolNumber} — ECert.Питомцы`;

  const menus = [
    { button: document.getElementById('appSwitch'), menu: document.getElementById('appMenu') },
    { button: document.getElementById('exportButton'), menu: document.getElementById('exportMenu') },
    { button: document.getElementById('localeButton'), menu: document.getElementById('localeMenu') }
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

  const protocolPdf = document.getElementById('protocolPdf');
  if (protocolPdf) {
    protocolPdf.addEventListener('click', (event) => {
      event.preventDefault();
      window.print();
    });
  }
})();
