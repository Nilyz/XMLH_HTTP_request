const contenedor = document.getElementById("contenedor");
let res;

const request = new XMLHttpRequest();

request.open("GET", "frieren.json");
request.responseType = "json";
request.send();

request.onload = function () {
    res = request.response;
    console.log(res);

    res.forEach((card, i) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const kanji = document.createElement("p");
        kanji.classList.add("tarjeta__kanji");
        kanji.id = `kanji${i}`;
        kanji.textContent = card.Kanji;

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("tarjeta__imgContainer");
        imgContainer.id = `contenedorImg${i}`;
        imgContainer.style.backgroundImage = "url('" + card.foto2 + "')"; // Establecer la imagen de fondo aquí

        const img = document.createElement("img");
        img.classList.add("tarjeta__img");
        img.id = `imagen${i}`;
        img.src = card.foto;
        img.style.opacity = "0";

        imgContainer.addEventListener("mouseover", function () {
            imgContainer.style.backgroundImage = "none";
            img.style.opacity = "1";
            img.src = card.foto;
        });
        imgContainer.addEventListener("mouseout", function () {
            img.style.opacity = "0";
            imgContainer.style.backgroundImage = "url('" + card.foto2 + "')";
        });

        imgContainer.appendChild(img);

        const nombreContainer = document.createElement("div");
        nombreContainer.classList.add("tarjeta__nombreContainer");

        const nombre = document.createElement("p");
        nombre.classList.add("tarjeta__nombre");
        nombre.id = `nombre${i}`;
        nombre.textContent = card.nombre;

        const linea = document.createElement("hr");
        linea.classList.add("tarjeta__linea");

        nombreContainer.appendChild(nombre);
        nombreContainer.appendChild(linea);

        const texto = document.createElement("div");
        texto.classList.add("tarjeta__texto");
        const clase = document.createElement("p");
        clase.classList.add("tarjeta__clase");
        clase.id = `clase${i}`;
        clase.textContent = "Clase: " + card.clase;
        const raza = document.createElement("p");
        raza.classList.add("tarjeta__raza");
        raza.id = `raza${i}`;
        raza.textContent = "Raza: : " + card.raza;
        const afiliacion = document.createElement("p");
        afiliacion.classList.add("tarjeta__afiliacion");
        afiliacion.id = `afiliacion${i}`;
        afiliacion.textContent = "Afiliación: " + card.afiliacion;

        texto.appendChild(clase);
        texto.appendChild(raza);
        texto.appendChild(afiliacion);

        tarjeta.appendChild(kanji);
        tarjeta.appendChild(imgContainer);
        tarjeta.appendChild(nombreContainer);
        tarjeta.appendChild(texto);

        contenedor.appendChild(tarjeta);
        
    });

};
