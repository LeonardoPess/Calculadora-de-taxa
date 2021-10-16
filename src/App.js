import ToggleSelected from './modules/ToggleSelected.js';

import initUpdateOptionsFromDebito from './modules/calculadora/updateOptionsFromDebito.js';
import initCalculateTaxa from './modules/calculadora/calculateTaxa.js';
import initCalculateTarifa from './modules/calculadora/calculateTarifa.js';
import initCalculateResult from './modules/calculadora/calculateResult.js';
import initCalculateEconomia from './modules/calculadora/calculateEconomia.js';

initUpdateOptionsFromDebito();
initCalculateTaxa();
initCalculateTarifa();
initCalculateResult();
initCalculateEconomia();

const toggleSelected = new ToggleSelected('.planos [data-plano]');
toggleSelected.init();

const toggleSelected2 = new ToggleSelected('.tipo-venda span');
toggleSelected2.init();
