import { sample } from 'lodash';
import faker from 'faker/locale/pt_BR';
// utils
import cfgprodjson from './cfg_produtos.json';

// ----------------------------------------------------------------------------------

const CFGPRODUTOS = [];

function addJsonData() {
  const addContent = [];
  cfgprodjson.forEach((item) => {
    const newItem = {
      pid: item.id_produto,
      pimg: item.produto_img,
      pnome: item.produto_nome,
      pstatus: item.produto_status
    };
    addContent.push(newItem);
  });
  Array.prototype.push.apply(CFGPRODUTOS, addContent);
}

addJsonData();
const cfgprodLenght = CFGPRODUTOS.length;

// ----------------------------------------------------------------------------------

const cfgprodutos = [...Array(cfgprodLenght)].map((_, index) => ({
  /* id: CFGPRODUTOS[index].pid, */
  id: faker.datatype.uuid(),
  cover: CFGPRODUTOS[index].pimg,
  name: CFGPRODUTOS[index].pnome,
  status: CFGPRODUTOS[index].pstatus === 1 ? 'ativo' : 'desativado'
}));

export default cfgprodutos;
