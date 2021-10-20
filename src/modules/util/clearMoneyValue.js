export default function clearMoneyValue(value) {
  return Number(
    value.replace(/\./g, '').replace(',', '.').replace('R$&nbsp;', '').replace('R$ ', ''),
  ).toFixed(2);
}
