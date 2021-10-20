import clearMoneyValue from '../util/clearMoneyValue.js';
import formatPrice from '../util/format.js';

export default function initCalculateTarifa() {
  const plans = document.querySelectorAll('[data-plano]');
  const calculadora = document.querySelector('.conversor-wrapper');
  const tarifaResultBox = document.querySelector('.conversor-wrapper [data-tarifa]');
  const taxaResultBox = document.querySelector('.conversor-wrapper [data-taxa]')
  const inputSellValue = document.querySelector('.conversor-wrapper [data-valor]');
  const parcelamento = document.querySelector('.conversor-wrapper #parcelamento');
  const bandeira = document.querySelector('.conversor-wrapper #bandeira');

  let tarifa;

  function insertTarifaOnHTML() {
    tarifaResultBox.innerHTML = formatPrice(tarifa);
  }

  function calculate() {
    const taxaResultBoxValue = Number(taxaResultBox.innerText.replace('%', ''));
    const sellValueClean = clearMoneyValue(inputSellValue.value);

    tarifa = ((sellValueClean / 100) * taxaResultBoxValue);
    insertTarifaOnHTML();
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
