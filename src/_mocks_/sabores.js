// utils
import saboresjson from './pizza_sabores.json';

// ----------------------------------------------------------------------

const SABORES = [];

const SABORES_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

function addJsonData() {
  const addBody = [];
  console.log(addBody);

  saboresjson.forEach((item) => {
    const newItem = {
      id_categoria: item.idpizza_categoria,
      id_sabor: item.idpizza_sabores,
      sabor_img: item.pizza_sabores_img,
      sabor_items: item.pizza_sabores_itens,
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

const sabores = [...Array(sabLenght)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: SABORES[index].id_sabor,
    /* cover: mockImgProduct(setIndex), */
    cover: SABORES[index].sabor_img,
    name: SABORES[index].sabor_nome,
    price: SABORES[index].sabor_precode,
    priceSale: SABORES[index].sabor_precopor,
    colors:
      (setIndex === 1 && SABORES_COLOR.slice(0, 2)) ||
      (setIndex === 2 && SABORES_COLOR.slice(1, 3)) ||
      (setIndex === 3 && SABORES_COLOR.slice(2, 4)) ||
      (setIndex === 4 && SABORES_COLOR.slice(3, 6)) ||
      (setIndex === 23 && SABORES_COLOR.slice(4, 6)) ||
      (setIndex === 24 && SABORES_COLOR.slice(5, 6)) ||
      SABORES_COLOR,
    /* status: sample(['ativo', 'novo', '', '']) */
    status: SABORES[index].sabor_status === 1 ? 'ativo' : 'desativado'
  };
});

export default sabores;
