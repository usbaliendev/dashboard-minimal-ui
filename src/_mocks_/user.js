import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(10)].map((_, index) => ({
  id: faker.datatype.number({ min: 0, max: 15 }),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Gerente',
    'Gestor de RH',
    'Atendente',
    'Pizzaiolo',
    'Tecnico de TI',
    'Funcionario comun'
  ])
}));

export default users;
