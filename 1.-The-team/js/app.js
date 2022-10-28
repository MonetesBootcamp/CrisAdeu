         
         
         // ES5

// declaracion de las variables

const [teachersTeam, members] = [
  'formacion',
     ['Jordi',
      'Pere', 
      'Adrià', 
      'Pol', 
      '¿Cristina?'
    ],
];


const formatTeamMessage = (teachersTeam, members) => {
  let message = `Hay ${members.length} en el equipo de ${teachersTeam}. \n
  Ellos son :${members.join(', ')}. Work?`
  console.log(message) 
}

// const formatTeamMessage = () function (teachersTeam, members) {
//   var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
//   console.log(message)
//   return message;
// };  

formatTeamMessage(teachersTeam, members);


// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables 

// const [teamName, product] = [
//   'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
// ];


// const formatTeamMessage = (teamName, people) => {
//   // escribe tu código en ES6 aqui...
// }

// formatTeamMessage(teamName, product);

