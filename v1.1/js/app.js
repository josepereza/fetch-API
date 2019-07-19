document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJson);
document.getElementById('apiBTN').addEventListener('click', cargarREST);
document.getElementById('webBTN').addEventListener('click', cargarWEB);

function cargarTXT(){
  fetch('datos.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(empleados){
      console.log(empleados);
      document.getElementById('resultado').innerHTML = empleados;
    })
    .catch(function(error){
      console.log(error)
    })
}

function cargarJson(){
  fetch('empleados.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log(data);

      let html = '';
      data.forEach(function(empleados){
        html += `
          <li>${empleados.nombre} ${empleados.puesto}</li>
        `
      })
      document.getElementById('resultado').innerHTML = html;
    })
    .catch(function(error){
      console.log(error);
    })
}

function cargarREST(){
  fetch('https://picsum.photos/list')
    .then(function(res){
      return res.json();
    })
    .then(function(imagenes){
      console.log(imagenes)

      let html = '';
      imagenes.forEach(function(imagen){
        html += `
          <li>
            <a target="_blank" href="${imagen.post_url}">Ver imagen </a>
            ${imagen.author}
          </li>
        `
      });
      document.getElementById('resultado').innerHTML = html;
    })
}

function cargarWEB(){
  fetch('datos.html')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      console.log(data);
      document.getElementById('resultado').innerHTML = data;
    })
    .catch(function(error){
      console.log(error)
    })
}