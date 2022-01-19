import { sample } from 'lodash';
// utils
import { mockImgIngr } from '../../utils/mockImages';
import acougueprodjson from './acougue_produtos.json';

// ----------------------------------------------------------------------------------

const PRODUTOS = [];

function addJsonData() {
  const addBody = [];

  acougueprodjson.forEach((item) => {
    const newItem = {
      aid: item.id_item,
      acodebar: item.acougue_item_codebar,
      code: item.acougue_item_codigo,
      img: item.acougue_item_img,
      nome: item.acougue_item_nome,
      preco: item.acougue_item_preco,
      status: item.acougue_item_status
    };
    addBody.push(newItem);
  });
  console.log(addBody.length);
  console.log(addBody);
  Array.prototype.push.apply(PRODUTOS, addBody);
  console.log(PRODUTOS);
}

addJsonData();
const prodLenght = PRODUTOS.length;
console.log(prodLenght);

// ----------------------------------------------------------------------------------

const produtos = [...Array(prodLenght)].map((_, index) => ({
  id: PRODUTOS[index].aid,
  codebar: PRODUTOS[index].acodebar,
  code: PRODUTOS[index].code,
  cover: PRODUTOS[index].img,
  name: PRODUTOS[index].nome,
  preco: PRODUTOS[index].preco,
  status: PRODUTOS[index].status === 1 ? 'ativo' : 'desativado'
}));

export default produtos;
