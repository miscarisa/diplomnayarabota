(() => {
  'use strict';

  const shared = {
    owner: 'PETROVA ALEKSANDRA / ABRITALIN BORIS',
    species: 'кошка / cat (Felis silvestris catus)',
    breed: 'Mix',
    sex: 'мужской / male',
    birthDate: '08.12.2021',
    identificationType: 'чип / microchip',
    vaccinationDate: '11.06.2025',
    vaccine: 'Rabifel / Rabifel',
    vaccineBatch: 'A218A03',
    bloodDate: '05.07.2025',
    bloodPlace: 'Russia, Moscow / IP Rayfshnayder A.V',
    methodRu: 'Реакция нейтрализации в культуре клеток методом FAVN',
    methodEn: 'Fluorescent Antibody Virus Neutralization (FAVN) test',
    result: '2.62 IU/ml',
    testDate: '10.07.2025',
    executor: 'Пинчук И.В. / Pinchuk I.V.',
    protocolDate: '10.07.2025',
    sourceCode: '67c87a58-1c7c-47fc-aa88-5a27c69e4dba'
  };

  const records = {
    radja: {
      ...shared,
      petName: 'Radja',
      microchip: '900136004019205',
      testNumber: '84699',
      protocolNumber: 'RU-077/R-25003387'
    },
    salem: {
      ...shared,
      petName: 'Salem',
      microchip: '900136004019214',
      testNumber: '84698',
      protocolNumber: 'RU-077/R-25003386'
    }
  };

  const path = window.location.pathname.toLowerCase();
  const queryPet = new URLSearchParams(window.location.search).get('pet');
  const pet = queryPet === 'salem' || path.includes('salem') ? 'salem' : 'radja';
  const data = records[pet];

  document.querySelectorAll('[data-field]').forEach((node) => {
    const key = node.getAttribute('data-field');
    node.textContent = data[key] ?? '—';
  });

  document.querySelectorAll('[data-pet-link]').forEach((link) => {
    if (link.getAttribute('data-pet-link') === pet) link.classList.add('active');
  });

  document.title = `${data.petName} — учебный макет ECert.Питомцы`;

  const printButton = document.getElementById('printButton');
  if (printButton) {
    printButton.addEventListener('click', () => window.print());
  }
})();
