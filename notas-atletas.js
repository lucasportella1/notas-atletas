function obterEstatistica(atletas) {
 for (let i = 0; i < atletas.length; i++) { 
  function calcularMedia () {
   let soma = 0
   atletas[i].notas.sort().slice(1,4).forEach(function(nota){
      soma = soma + nota
   })
   return soma / (atletas[i].notas.length - 2)
  }    
  console.log("Atleta: " + atletas[i].nome) 
  console.log("Notas Obtidas: "+ atletas[i].notas.sort())
  console.log("Nota Válida: " + calcularMedia())
  console.log(" ")
  }
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

console.log(obterEstatistica(atletas))
