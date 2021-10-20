import clearMoneyValue from '../util/clearMoneyValue.js';
import formatPrice from '../util/format.js';

export default function initCalculateEconomia() {
  const plans = document.querySelectorAll('[data-plano]');
  const calculadora = document.querySelector('.conversor-wrapper');
  const economiaBox = document.querySelector('.conversor-wrapper [data-economia');
  const planos = document.querySelectorAll('.conversor-wrapper [data-plano]');
  const debito = document.querySelector('.conversor-wrapper #debito');
  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');
  const bandeira = document.querySelector('.conversor-wrapper #bandeira');
  const daysOptions = document.querySelectorAll('.conversor-wrapper input[name="recebimento"]');
  const inputSellValue = document.querySelector('.conversor-wrapper [data-valor');

  // economia flag one   --   indice 0 == Débito
  const economiaGigaTonFlagOne = ['2.54', '3.83', '7.37', '8.93', '9.75', '10.68', '11.59', '11.89', '12.76', '13.61', '14.42', '15.23', '16.02'];
  const economiaMegaTonFlagOne = ['2.51', '3.77', '6.92', '8.16', '8.89', '9.61', '10.31', '10.98', '11.64', '12.27', '12.87', '13.46', '14.02'];

  // economia flag two   --   indice 0 == Débito
  const economiaGigaTonFlagTwo = ['2.54', '2.64', '6.18', '7.63', '8.57', '9.50', '10.42', '10.82', '11.69', '12.54', '13.37', '14,18', '14.96'];
  const economiaMegaTonFlagTwo = ['2.51', '3.77', '6.92', '8.16', '8.89', '9.61', '10.31', '10.98', '11.64', '12.27', '12.87', '13.46', '14.02'];

  let economia;

  function insertEconomiaOnHTML() {
    economiaBox.innerHTML = formatPrice(economia);
  }

  function calculateResult() {
    const sellValueClean = clearMoneyValue(inputSellValue.value);
    economia = (sellValueClean / 100) * Number(economia);
  }

  function updateEconomiaByDayOption(index) {
    const updatedEconomia = Number(economia);
    if (index === 1) { economia = Math.round((updatedEconomia - 0.94) * 100) / 100; }
    if (index === 2) { economia = Math.round((updatedEconomia - 1.69) * 100) / 100; }
  }

  function CalculateSavingPercentage(taxaArrayFlagOne, taxaArrayFlagTwo) {
    [economia] = taxaArrayFlagOne;
    if (bandeira.value === 2) {
      [economia] = taxaArrayFlagTwo;
    }

    if (!debito.classList.contains('selected')) {
      economia = taxaArrayFlagOne[parcelamento.value];
      if (bandeira.value === 2) {
        economia = taxaArrayFlagTwo[parcelamento.value];
      }
      daysOptions.forEach((day, index) => {
        if (day.checked && index !== 0) {
          updateEconomiaByDayOption(index);
        }
      });
    }
  }

  function calculate() {
    planos.forEach((plano) => {
      if (plano.classList.contains('selected')) {
        if (plano.textContent === 'GigaTon') {
          CalculateSavingPercentage(economiaGigaTonFlagOne, economiaGigaTonFlagTwo);
        }

        if (plano.textContent === 'MegaTon') {
          CalculateSavingPercentage(economiaMegaTonFlagOne, economiaMegaTonFlagTwo);
        }

        if (plano.textContent === 'Ton Básico') {
          economia = 2.00;
        }

        calculateResult();
        insertEconomiaOnHTML();
      }
    });
  }

  [parcelamento, bandeira].forEach((element) => {
    element.addEventListener('change', calculate);
  });

  plans.forEach((plan) => {
    plan.addEventListener('click', calculate);
  });

  inputSellValue.addEventListener('keyup', calculate);
  calculadora.addEventListener('click', calculate);
  calculadora.addEventListener('touchstart', calculate);
  calculate();
}
