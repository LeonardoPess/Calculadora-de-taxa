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
    const tarifaValueFormated = tarifa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    tarifaResultBox.innerHTML = tarifaValueFormated;
    return;
  }

  function calculate() {
    const taxaResultBoxValue = taxaResultBox.innerText.replace('%', '');
    let sellValue = inputSellValue.value;
    let sellValueClean = Number(sellValue.replace(/\./g, '').replace(',', '.').replace('R$ ', '')).toFixed(2);

    tarifa = ((sellValueClean / 100) * taxaResultBoxValue);
    insertTarifaOnHTML();
  }

  [parcelamento, bandeira].forEach(element => {
    element.addEventListener('change', calculate);
  });

  inputSellValue.addEventListener("keyup", calculate);
  calculadora.addEventListener("click", calculate);
  calculadora.addEventListener('touchstart', calculate);

  calculate();
}
