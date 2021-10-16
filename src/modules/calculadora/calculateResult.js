export default function initCalculateResult() {
  const plans = document.querySelectorAll('[data-plano]');
  const calculadora = document.querySelector('.conversor-wrapper');
  const tarifaResultBoxValue = document.querySelector('.conversor-wrapper [data-tarifa]');
  const resultBoxValue = document.querySelector('.conversor-wrapper [data-recebe]');
  const inputSellValue = document.querySelector('.conversor-wrapper [data-valor');
  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');
  const bandeira = document.querySelector('.conversor-wrapper #bandeira');

  let result;

  function insertResultOnHTML() {
    const resultValueFormated = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    resultBoxValue.innerHTML = resultValueFormated;
    return;
  }

  function calculate() {
    const sellValue = inputSellValue.value;
    let sellValueClean = Number(sellValue.replace(/\./g, '').replace(',', '.').replace('R$ ', '')).toFixed(2);
    let tarifaValueClean = tarifaResultBoxValue.innerHTML.replace('R$&nbsp;', '').replace(/\./g, '').replace(',', '.');

    result = (sellValueClean - tarifaValueClean);
    insertResultOnHTML();
  }

  [parcelamento, bandeira].forEach(element => {
    element.addEventListener('change', calculate);
  });

  plans.forEach(plan => {
    plan.addEventListener('click', calculate());
  });

  inputSellValue.addEventListener("keyup", calculate);
  calculadora.addEventListener("click", calculate);
  calculadora.addEventListener('touchstart', calculate);
  calculate();
}
