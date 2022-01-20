import { sample } from 'lodash';
import faker from 'faker/locale/pt_BR';
// utils
import cfglojasjson from './cfg_lojas.json';

// ----------------------------------------------------------------------------------

const CFGLOJAS = [];

function addJsonData() {
  const addContent = [];
  cfglojasjson.forEach((item) => {
    const newItem = {
      lid: item.id_loja,
      limg: item.loja_img,
      lnome: item.loja_nome,
      lendereco: item.loja_endereco,
      lgerente: item.loja_gerente,
      lfuncionarios: item.loja_funcionarios,
      lstatus: item.loja_status
    };
    addContent.push(newItem);
  });
  Array.prototype.push.apply(CFGLOJAS, addContent);
}

addJsonData();
const cfglojasLenght = CFGLOJAS.length;

// ----------------------------------------------------------------------------------

const cfglojas = [...Array(cfglojasLenght)].map((_, index) => ({
  /* id: CFGLOJAS[index].lid, */
  id: faker.datatype.number(),
  cover: CFGLOJAS[index].limg,
  name: CFGLOJAS[index].lnome,
  /* endereco: CFGLOJAS[index].lendereco, */
  endereco: faker.address.streetAddress(),
  /* gerente: CFGLOJAS[index].lgerente, */
  gerente: faker.name.findName(),
  funcionarios: CFGLOJAS[index].lfuncionarios,
  status: CFGLOJAS[index].lstatus === 1 ? 'ativo' : 'desativado'
}));

export default cfglojas;
