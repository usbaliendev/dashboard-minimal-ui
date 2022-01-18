import { sample } from 'lodash';
// utils
import pizzacategoriasjson from './pizza_categoria.json';

// ----------------------------------------------------------------------

const CATEGORIAS = [];

function addJsonData() {
  const body = [];

  pizzacategoriasjson.forEach((item) => {
    const newItem = {
      pid: item.id_categoria,
      picon: item.icon,
      pimg: item.categoria_img,
      pnome: item.categoria_nome,
      cprecode: item.categoria_precode,
      cpredopor: item.categoria_precopor,
      pstatus: item.status
    };
    body.push(newItem);
  });
  console.log(body.length);
  console.log(body);
  Array.prototype.push.apply(CATEGORIAS, body);
  console.log(CATEGORIAS);
}

addJsonData();
const pcatLenght = CATEGORIAS.length;
console.log(pcatLenght);

// ----------------------------------------------------------------------

const categorias = [...Array(pcatLenght)].map((_, index) => ({
  id: CATEGORIAS[index].pid,
  icon: CATEGORIAS[index].picon,
  img: CATEGORIAS[index].pimg,
  name: CATEGORIAS[index].pnome,
  precode: CATEGORIAS[index].cprecode,
  precopor: CATEGORIAS[index].cpredopor,
  status: CATEGORIAS[index].pstatus === 1 ? 'ativo' : 'desativado'
}));

export default categorias;
