let contenedorImg =document.getElementById("contenedorImg")
let res;

const request = new XMLHttpRequest();

request.open('GET', 'frieren.json');
request.responseType = 'json';
request.send();



request.onload = function () {
    
    res = request.response; 
    console.log(res);
    for(let i=0;i<res.length;i++){
        
        let img=document.getElementById("imagen"+i)
        let contenedorImg =document.getElementById("contenedorImg"+i)
        let kanji=document.getElementById("kanji"+i)
        let nombre=document.getElementById("nombre"+i)
        let clase=document.getElementById("clase"+i)
        let raza=document.getElementById("raza"+i)
        let afiliacion=document.getElementById("afiliacion"+i)

        kanji.innerHTML=res[i].Kanji;
        contenedorImg.style.backgroundImage = "url('" + res[i].foto2 + "')";
        nombre.innerHTML=res[i].nombre;
        clase.innerHTML="Clase: " + res[i].clase;
        raza.innerHTML="Raza: : " +res[i].raza;
        afiliacion.innerHTML="Afiliación: " +res[i].afiliacion;

        contenedorImg.addEventListener('mouseover', function() {
            contenedorImg.style.backgroundImage = 'none';
            img.style.opacity = '1';
            img.src = res[i].foto;
        });
        contenedorImg.addEventListener('mouseout', function() {
            img.style.opacity = '0';
            contenedorImg.style.backgroundImage = "url('" + res[i].foto2 + "')";
        });
    }




}

