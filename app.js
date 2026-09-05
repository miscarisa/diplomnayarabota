(() => {
  'use strict';

  const shared = {
    owner: 'PETROVA ALEKSANDRA / ABRITALIN BORIS',
    phone: '',
    email: '',
    species: 'cat',
    breed: 'Mix',
    sex: 'male',
    birthDate: '08.12.2021',
    vaccinationDate: '11.06.2025',
    vaccine: 'Rabifel',
    vaccineBatch: 'A218A03',
    bloodDate: '05.07.2025',
    bloodPlace: 'Russia, Moscow / IP Rayfshnayder A.V',
    method: 'Реакция нейтрализации в культуре клеток методом FAVN / Fluorescent Antibody Virus Neutralization (FAVN) test',
    result: '2.62 IU/ml',
    testDate: '10.07.2025',
    executor: 'Пинчук И.В. / Pinchuk I.V.',
    protocolDate: '10.07.2025'
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

  data.identification = `microchip, ${data.microchip}`;
  data.vaccination = `${data.vaccine}, серия №${data.vaccineBatch}, дата введения: ${data.vaccinationDate}`;

  document.querySelectorAll('[data-field]').forEach((node) => {
    const key = node.getAttribute('data-field');
    node.textContent = data[key] ?? '';
  });

  document.title = `Протокол № ${data.protocolNumber} — учебная реплика ECert.Питомцы`;
})();
