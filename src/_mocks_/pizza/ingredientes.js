import { sample } from 'lodash';
// utils
import { mockImgIngr } from '../../utils/mockImages';
import ingredientesjson from './pizza_item.json';

// ----------------------------------------------------------------------------------

const INGREDIENTES = [];

function addJsonData() {
  const addBody = [];

  ingredientesjson.forEach((item) => {
    const newItem = {
      id_categoria: item.idpizza_categoria,
      id_pizza: item.idpizza_item,
      add: item.pizza_item_add,
      codebar: item.pizza_item_codebar,
      code: item.pizza_item_codigo,
      img: item.pizza_item_img,
      nome: item.pizza_item_nome,
      preco: item.pizza_item_preco,
      status: item.pizza_item_status
    };
    addBody.push(newItem);
  });
  console.log(addBody.length);
  console.log(addBody);
  Array.prototype.push.apply(INGREDIENTES, addBody);
  console.log(INGREDIENTES);
}

addJsonData();
const ingrLenght = INGREDIENTES.length;
console.log(ingrLenght);

// ----------------------------------------------------------------------------------

const ingredientes = [...Array(ingrLenght)].map((_, index) => ({
  idctg: INGREDIENTES[index].id_categoria,
  idpizza: INGREDIENTES[index].id_pizza,
  add: INGREDIENTES[index].add,
  codebar: INGREDIENTES[index].codebar,
  code: INGREDIENTES[index].code,
  /* cover: INGREDIENTES[index].img, */
  cover: mockImgIngr(index + 1),
  name: INGREDIENTES[index].nome,
  preco: INGREDIENTES[index].preco,
  status: INGREDIENTES[index].status === 1 ? 'ativo' : 'desativado'
}));

export default ingredientes;
