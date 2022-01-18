import { sample } from 'lodash';
import faker from 'faker/locale/pt_BR';
// utils
import { mockImgIngr } from '../../utils/mockImages';
import totensjson from './pizza_totens.json';

// ----------------------------------------------------------------------------------

const TOTENS = [];

function addJsonData() {
  const addContent = [];
  totensjson.forEach((item) => {
    const newItem = {
      tid: item.id_totem,
      tidempresa: item.id_empresa,
      timg: item.totem_img,
      tcodebar: item.totem_codebar,
      tnome: item.totem_nome,
      tstatus: item.totem_status
    };
    addContent.push(newItem);
  });
  console.log(addContent.length);
  console.log(addContent);
  Array.prototype.push.apply(TOTENS, addContent);
  console.log(TOTENS);
}

addJsonData();
const totemLenght = TOTENS.length;
console.log(totemLenght);

// ----------------------------------------------------------------------------------

const totens = [...Array(totemLenght)].map((_, index) => {
  const setIndex = index + 1;
  return {
    /* id: TOTENS[index].tid, */
    id: faker.datatype.uuid(),
    /* idempresa: TOTENS[index].tidempresa, */
    idempresa: faker.datatype.uuid(),
    cover: TOTENS[index].timg,
    /* codebar: TOTENS[index].tcodebar, */
    codebar: faker.datatype.uuid(),
    name: TOTENS[index].tnome,
    status: TOTENS[index].tstatus === 1 ? 'ativo' : 'desativado'
  };
});

export default totens;
