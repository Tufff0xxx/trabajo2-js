const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];




 /* const idImpar = pizzas.filter((pizzas)=>pizzas.id%2==1)
  console.log(idImpar)*/

 /* const idImpar = pizzas
  .filter((pizza) => pizza.id % 2 === 1)
  .map((pizza) => pizza.id);

console.log("El id: "+ idImpar + " corresponde a un impar");*/


//piza con id impar

const idImpar = pizzas
  .filter((pizza) => pizza.id % 2 === 1)
  .map((pizza) => pizza.id);

console.log("Pizzas con ID impar: " + idImpar);

// pizza que valen menos de 600 p

const menor600 = pizzas.filter((pinchila) => 
  pinchila.precio< 600)
  .map((pinchila) => pinchila.precio) 
  if(menor600>0){
  console.log("Si hay pizza por menos de 600 pesos y vale "+menor600 )
}
  else{
    console.log("no hay pizzas menores de 600")
  }


  //el nombre de cada pizza con su respectivo precio

  pizzas.forEach(pija => {
      console.log(pija.nombre +" "+ pija.precio)
  });


  //todos los ingredientes de cada pizza

  pizzas.forEach(pijas => {
    console.log(pijas.nombre)
    pijas.ingredientes.forEach(ing =>{
      console.log(" "+ing)
      
    })
    console.log("-----------")
  }) 

 
  
  
  /* pizzas.forEach(pijas => {
        console.log("NOMBRE: "+pijas.nombre+ " INGREDIENTES: "+pijas.ingredientes)
        
    });*/


