// utils
import saboresjson from './pizza_sabores.json';

// ----------------------------------------------------------------------

const SABORES = [];

function addJsonData() {
  const addBody = [];
  console.log(addBody);

  saboresjson.forEach((item) => {
    const newItem = {
      id_categoria: item.idpizza_categoria,
      id_sabor: item.idpizza_sabores,
      sabor_codebar: item.pizza_sabores_codebar,
      sabor_code: item.pizza_sabores_codigo,
      sabor_desc: item.pizza_sabores_descricao,
      sabor_ico: item.pizza_sabores_icon,
      sabor_img: item.pizza_sabores_img,
      sabor_itens: item.pizza_sabores_itens,
      sabor_nome: item.pizza_sabores_nome,
      sabor_precode: item.pizza_sabores_precode,
      sabor_precopor: item.pizza_sabores_precopor,
      sabor_status: item.pizza_sabores_status
    };
    addBody.push(newItem);
  });
  console.log(addBody.length);
  console.log(addBody);
  Array.prototype.push.apply(SABORES, addBody);
  console.log(SABORES);
}

addJsonData();
const sabLenght = SABORES.length;
console.log(sabLenght);

// ----------------------------------------------------------------------

const sabores = [...Array(sabLenght)].map((_, index) => ({
  id: SABORES[index].id_sabor,
  cover: SABORES[index].sabor_img,
  name: SABORES[index].sabor_nome,
  price: SABORES[index].sabor_precode,
  priceSale: SABORES[index].sabor_precopor,
  status: SABORES[index].sabor_status === 1 ? 'ativo' : 'desativado'
}));

export default sabores;
