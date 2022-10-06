// Ayuda al elfo a listar los regalos
export function listarRegalos(carta) {
  const listaRegalos = carta
    .split(" ")
    .filter(
      regalo => !regalo.includes(" ") && regalo[0] !== "_" && regalo !== ""
    );
  const regalosObj = {};
  listaRegalos.forEach(regalo => {
    if (regalo in regalosObj) regalosObj[regalo]++;
    else regalosObj[regalo] = 1;
  });

  return regalosObj;
}
