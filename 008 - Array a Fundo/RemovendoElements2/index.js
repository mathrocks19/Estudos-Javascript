let arr = [
    {nome: "Matheus", tel: "(99)829304983"},
    {nome: "Julio", tel: "(99)829304983"},
    {nome: "Julia", tel: "(99)829304983"},
    {nome: "Maria", tel: "(99)829304983"},
    {nome: "Roberto", tel: "(99)829304983"},
]
// {} em um array são os objetos
console.table(arr);

//const newArray = arr.slice(0,3);
console.log(arr.splice(0 , 3));
console.table(arr);