function obtenhaMensagem(itens){
  if(itens < 0){
    return "Número inválido"
  }
  if(itens === 0){
    return "Você não tem nenhum item em sua lista de compras"
  }
  if(itens === 1){
    return "Você tem 1 item em sua lista de compras"
  }
  if(itens > 1){
    return "Você tem mais de 1 item em sua lista de compras"
  }
}

console.log(obtenhaMensagem(5))