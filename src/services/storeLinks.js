// buscar os links salvos
export async function getLinksSave(key) {
  const myLInks = await localStorage.getItem(key);

  let linksSave = JSON.parse(myLInks) || [];

  return linksSave;
}

// Salvar um link no localStorage

export async function saveLink(key, newLink) {
  let linksStoraged = await getLinksSave(key);

  // Verifica e não deixa duplicar os links
  const hasLink = linksStoraged.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("ESSE LINK JÁ EXISTE NA SUA LISTA");
    return;
  }

  // Adiciona um novo link na LISTA
  linksStoraged.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStoraged));
  console.log("LINK SALVO COM SUCESSO");
}

// Deletar um link salvo
export function deleLink(links, id) {
  let myLInks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("encurtarLink", JSON.stringify(myLInks));

  console.log("link deletado com sucesso");

  return myLInks;
}
