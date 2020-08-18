var inputElement = document.querySelector("#form input");
var buttonElement = document.querySelector("#botao");
var listElement = document.querySelector("#list ul");
var titulo = document.querySelector("h2");

buttonElement.onclick = function () {
  AddUser();
  inputElement.value = "";
};

function requestData(nomeUser) {
        titulo.innerHTML = '';
        listElement.innerHTML = '';

  axios.get("https://api.github.com/users/"+nomeUser+"/repos")
    .then(function (response) {

      var textoTitulo = document.createTextNode(nomeUser);
      titulo.appendChild(textoTitulo);

      var repositorios = response.data;

      for (let repositorio of repositorios) {
        var li = document.createElement('li');
        var texto = document.createTextNode(repositorio.name);
        var linkElement = document.createElement('a');
  
      linkElement.setAttribute('href','https://github.com/'+nomeUser+'/'+repositorio.name);
        
        linkElement.appendChild(texto);
        li.appendChild(linkElement);
          
        li.append(linkElement);
        listElement.appendChild(li);
        
      }
    })
    .catch(function (error) {
      console.warn(error);
    });
}

function AddUser() {
  nomeUser = inputElement.value;
  requestData(nomeUser);
}
