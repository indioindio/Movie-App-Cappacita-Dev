var axios = require("axios");
const { appendFile } = require("fs");
var dados;
const app =require("express")();
function usuarioGitHub(){
return axios.get("https://api.github.com/users/techtuxbr")
}

dados = usuarioGitHub();

dados.then(function(users){
console.log(users);

})

module.exports = dados;


app.listen(3003);


