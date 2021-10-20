export default function initCalculateTaxa() {
  const plans = document.querySelectorAll('[data-plano]');
  const calculadora = document.querySelector('.conversor-wrapper');
  const taxaResultBox = document.querySelector('.conversor-wrapper [data-taxa]');
  const plansCalculateMenu = document.querySelectorAll('.conversor-wrapper [data-plano]');
  const debito = document.querySelector('.conversor-wrapper #debito');
  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');
  const bandeira = document.querySelector('.conversor-wrapper #bandeira');
  const daysOptions = document.querySelectorAll('.conversor-wrapper input[name="recebimento"]');

  const taxaTonBasico = ['1.99', '4.73', '8.96', '10.74', '12.01', '13.27', '14.51', '15.72', '16.92', '18.09', '19.23', '20.36', '21.46'];

  // Taxa flag one   --   indice 0 == Débito
  const taxaGigaTonFlagOne = ['1.45', '2.90', '3.59', '3.93', '4.26', '4.59', '4.92', '5.83', '6.16', '6.48', '6.81', '7.13', '7.44'];
  const taxaMegaTonFlagOne = ['1.48', '2.96', '4.04', '4.58', '5.12', '5.66', '6.20', '6.74', '7.28', '7.82', '8.36', '8.90', '9.44'];

  // Taxa flag two   --   indice 0 == Débito
  const taxaGigaTonFlagTwo = ['2.45', '4.09', '4.78', '5.11', '5.44', '5.77', '6.09', '6.90', '7.23', '7.55', '7.86', '8.18', '8.50'];
  const taxaMegaTonFlagTwo = ['2.48', '4.15', '5.23', '5.77', '6.31', '6.85', '7.39', '7.93', '8.47', '9.01', '9.55', '10.09', '10.63'];

  let taxa;

  function insertTaxaOnHTML() {
    taxaResultBox.innerHTML = `${Number(taxa).toFixed(2)} %`;
  }

  function updateTaxaByDayOption(index, basico) {
    const updatedTaxa = Number(taxa);
    if (index === 1 && !basico) {
      taxa = Math.round((updatedTaxa - 0.01) * 100) / 100;
    }

    if (index === 1 && basico) {
      taxa = Math.round((updatedTaxa - 1) * 100) / 100;
      if (parcelamento.value === '1') {
        taxa = Math.round((updatedTaxa - 0.95) * 100) / 100;
      }
    }

    if (index === 2 && !basico) {
      taxa = Math.round((updatedTaxa - 0.02) * 100) / 100;
    }

    if (index === 2 && basico) {
      taxa = Math.round((updatedTaxa - 1.49) * 100) / 100;
      if (parcelamento.value === '1') {
        taxa = Math.round((updatedTaxa - 1.71) * 100) / 100;
      }
    }
  }

  function calculateTaxa(taxaArrayFlagOne, taxaArrayFlagTwo) {
    [taxa] = taxaArrayFlagOne;

    if (bandeira.value === '2' && taxaArrayFlagTwo) {
      [taxa] = taxaArrayFlagTwo;
    }

    if (!debito.classList.contains('selected')) {
      taxa = taxaArrayFlagOne[parcelamento.value];
      if (taxaArrayFlagTwo && bandeira.value === '2') {
        taxa = taxaArrayFlagTwo[parcelamento.value];
      }
      daysOptions.forEach((day, index) => {
        if (day.checked && index !== 0) {
          if (taxaArrayFlagTwo) {
            updateTaxaByDayOption(index);
          } else {
            updateTaxaByDayOption(index, true);
          }
        }
      });
    }
  }

  function calculate() {
    plansCalculateMenu.forEach((plan) => {
      if (plan.classList.contains('selected')) {
        if (plan.textContent === 'GigaTon') {
          calculateTaxa(taxaGigaTonFlagOne, taxaGigaTonFlagTwo);
        }

        if (plan.textContent === 'MegaTon') {
          calculateTaxa(taxaMegaTonFlagOne, taxaMegaTonFlagTwo);
        }

        if (plan.textContent === 'Ton Básico') {
          calculateTaxa(taxaTonBasico);
        }
        insertTaxaOnHTML();
      }
    });
  }

  [parcelamento, bandeira].forEach((element) => {
    element.addEventListener('change', calculate);
  });

  plans.forEach((plan) => {
    plan.addEventListener('click', calculate);
  });

  calculadora.addEventListener('click', calculate);
  calculadora.addEventListener('touchstart', calculate);
  calculate();
}
