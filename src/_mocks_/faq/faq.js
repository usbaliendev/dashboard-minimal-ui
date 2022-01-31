import faker from 'faker';
// utils

// ----------------------------------------------------------------------

const POSTFAQ_TITLES = [
  'Como mudar as configurações de privacidade dos grupos',
  'Como gerenciar seus produtos',
  'Como gerenciar suas lojas',
  'Como usar o status dos produtos',
  'Como usar o status dos produtos',
  'Como gerenciar suas notificações',
  'Como editar seu perfil de usuário',
  'Criação de produtos na pizzaria',
  'Criação de produtos no açougue',
  'Por que não consigo acessar o catálogo de itens dos produtos da loja',
  'Como criar e gerenciar usuários na sua Loja',
  'Sobre seu perfil de usuário',
  'Como compartilhar os dados dos relatórios',
  'Sobre o recurso de themas do sistema',
  'Sobre modificar dados de usuário',
  'Sobre modificar dados de itens',
  'Sobre modificar informações dos produtos do sistema',
  'Como responder a perguntas dos clientes',
  'Sobre remover usuários',
  'Quais Termos de Serviço se aplicam ao seu tipo de usuário',
  'Dicas de segurança para sua conta',
  'Como mudar as configurações de modificação de itens/produtos'
];

const postsLenght = POSTFAQ_TITLES.length;

const postsfaq = [...Array(postsLenght)].map((_, index) => {
  const setIndex = faker.datatype.number({ min: 1, max: 6 });
  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/faqcover/faqcover_${setIndex}.jpg`,
    title: POSTFAQ_TITLES[index + 1],
    comment: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.findName(),
      avatarUrl: `/static/icons/faq/question-mark.png`
    }
  };
});

export default postsfaq;
