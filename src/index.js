
// declaramos el arreglo
const messages = [
  'Julian',
  'Fernando',
  'Camilo',
  'Lorena',
  'Paola',
  'Andrea',
  'Dayana',
  'Ivana',
];

//creamos una funcion para enviar aleatoriamente los nombres del arreglo
const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
