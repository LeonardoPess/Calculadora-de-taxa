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

  // Economia Flag One   --   indice 0 == Débito
  const economiaGigaTonFlagOne = [
    '2.54', '3.83', '7.37',  '8.93', '9.75', '10.68', '11.59', '11.89', '12.76',  '13.61',  '14.42', 
    '15.23', '16.02'
  ]
  const economiaMegaTonFlagOne = [
    '2.51', '3.77', '6.92',  '8.16', '8.89', '9.61', '10.31', '10.98', '11.64',  '12.27',  '12.87', 
    '13.46', '14.02'
  ]

  // Economia Flag Two   --   indice 0 == Débito
  const economiaGigaTonFlagTwo = [
    '2.54', '2.64',  '6.18', '7.63', '8.57', '9.50', '10.42', '10.82',  '11.69',  '12.54', '13.37', 
    '14,18', '14.96'
  ]
  const economiaMegaTonFlagTwo = [
    '2.51', '3.77', '6.92',  '8.16', '8.89', '9.61', '10.31', '10.98', '11.64',  '12.27',  '12.87', 
    '13.46', '14.02'
  ]

  let economia;

  function insertEconomiaOnHTML() {
    const resultValueFormated = Number(economia).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    economiaBox.innerHTML = resultValueFormated;
    return;
  }

  function calculateResult() {
    const sellValue = inputSellValue.value.replace(/\./g, '').replace(',', '.').replace('R$ ', '');
    const sellValueClean =  Number(sellValue);
    economia = (sellValueClean / 100) * Number(economia);
  }

  function updateEconomiaByDayOption(index) {
    let updatedEconomia = Number(economia);
    if (index == 1) {
      economia = Math.round((updatedEconomia - 0.94) * 100) / 100;
    }

    if (index == 2) {
      economia = Math.round((updatedEconomia - 1.69) * 100) / 100;
    }

    return;
  }

  function calculateSavingPercentage() {
    planos.forEach(plano => {
      if(plano.classList.contains('selected')) {

        if (plano.textContent == 'GigaTon') {
          economia = economiaGigaTonFlagOne[0];
          if (bandeira.value == 2) {
            economia = economiaGigaTonFlagTwo[0];
          }
          if (!debito.classList.contains('selected')) {
            economia = economiaGigaTonFlagOne[parcelamento.value];
            if (bandeira.value == 2) {
              economia = economiaGigaTonFlagTwo[parcelamento.value];
            }
            daysOptions.forEach((day, index) => {
              if (day.checked && index != 0) {
                updateEconomiaByDayOption(index);
              }
            }); 
          }
        }

        if (plano.textContent == 'MegaTon') {
          economia = economiaMegaTonFlagOne[0];
          if (bandeira.value == 2) {
            economia = economiaMegaTonFlagTwo[0];
          }
          if (!debito.classList.contains('selected')) {
            economia = economiaMegaTonFlagOne[parcelamento.value];
            if (bandeira.value == 2) {
              economia = economiaMegaTonFlagTwo[parcelamento.value];
            }
            daysOptions.forEach((day, index) => {
              if (day.checked && index != 0) {
                updateEconomiaByDayOption(index);
              }
            }); 
          }
        }

        if (plano.textContent == 'Ton Básico') {
          economia = 2.00;
        }
        calculateResult();
        insertEconomiaOnHTML();
      }
    });
  }

  [parcelamento, bandeira].forEach(element => {
    element.addEventListener('change', calculateSavingPercentage);
  });

  plans.forEach(plan => {
    plan.addEventListener('click', calculateSavingPercentage);
  });

  inputSellValue.addEventListener("keyup", calculateSavingPercentage);
  calculadora.addEventListener("click", calculateSavingPercentage);
  calculadora.addEventListener('touchstart', calculateSavingPercentage);
  calculateSavingPercentage();
}
