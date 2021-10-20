import clearMoneyValue from '../util/clearMoneyValue.js';
import formatPrice from '../util/format.js';

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
    resultBoxValue.innerHTML = formatPrice(result);
  }

  function calculate() {
    const sellValueClean = clearMoneyValue(inputSellValue.value);
    const tarifaValueClean = clearMoneyValue(tarifaResultBoxValue.innerHTML);

    result = (sellValueClean - tarifaValueClean);
    insertResultOnHTML();
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
