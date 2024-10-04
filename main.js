let conteo=0;



function agregarCosas(nombre, descripcion, precio, imagen){
  
  document.getElementById("product").innerHTML += `
  <div class="productico">
  <img src="${imagen}" alt="">
  <h2 class="class2">"${nombre}"</h2>
  <h3 class="class3">"${descripcion}"</h3>
  <p class="class4">"${precio}"</p>
  </div>
 
  `
conteo++
let contador=document.getElementById('conteo').textContent=conteo;

}