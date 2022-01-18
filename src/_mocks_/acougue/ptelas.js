import { sample } from 'lodash';
import faker from 'faker/locale/pt_BR';
// utils
import { mockImgIngr } from '../../utils/mockImages';
import paineisjson from './acougue_paineis.json';

// ----------------------------------------------------------------------------------

const PAINEIS = [];

function addJsonData() {
  const addContent = [];
  paineisjson.forEach((item) => {
    const newItem = {
      pid: item.id_painel,
      pidempresa: item.id_empresa,
      pimg: item.painel_img,
      pcodebar: item.painel_codebar,
      pnome: item.painel_nome,
      pstatus: item.painel_status
    };
    addContent.push(newItem);
  });
  console.log(addContent.length);
  console.log(addContent);
  Array.prototype.push.apply(PAINEIS, addContent);
  console.log(PAINEIS);
}

addJsonData();
const painelLenght = PAINEIS.length;
console.log(painelLenght);

// ----------------------------------------------------------------------------------

const paineis = [...Array(painelLenght)].map((_, index) => ({
  /* id: PAINEIS[index].pid, */
  id: faker.datatype.uuid(),
  /* idempresa: PAINEIS[index].pidempresa, */
  idempresa: faker.datatype.uuid(),
  cover: PAINEIS[index].pimg,
  /* codebar: PAINEIS[index].pcodebar, */
  codebar: faker.datatype.uuid(),
  name: PAINEIS[index].pnome,
  status: PAINEIS[index].pstatus === 1 ? 'ativo' : 'desativado'
}));

export default paineis;
