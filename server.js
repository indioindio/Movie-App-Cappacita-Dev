var axios = require("axios");
var dados;

function usuarioGitHub(){
return axios.get("https://api.github.com/users/techtuxbr")
}

dados = usuarioGitHub();

dados.then(function(users){
console.log(users);

})


