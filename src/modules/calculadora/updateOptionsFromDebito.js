export default function initUpdateOptionsFromDebito() {
  const tipoVendas = document.querySelectorAll('.conversor-wrapper .tipo-venda > *');
  const parcelamento = document.querySelector('.parcelamento');
  const oneDayOption = document.querySelector('#oneDayOption');
  const twoDayOptionBox = document.querySelector('#twoDayOptionBox');
  const threeDayOptionBox = document.querySelector('#threeDayOptionBox');

  function handleTipoVendas({ target }) {
    if (target.textContent == "Débito") {
      parcelamento.classList.add('hide');
      twoDayOptionBox.classList.add('hide');
      threeDayOptionBox.classList.add('hide');
      oneDayOption.checked = true;
    }

    if (target.textContent == "Crédito") {
      parcelamento.classList.remove('hide');
      twoDayOptionBox.classList.remove('hide');
      threeDayOptionBox.classList.remove('hide');
    }
  }

  tipoVendas.forEach(tipoVenda => {
    tipoVenda.addEventListener('click', handleTipoVendas);
  });
}
