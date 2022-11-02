
const creadores = document.querySelector(".creadores");
const inicio = document.querySelector(".inicio");
const ejemplos = document.querySelector(".ejemplos");
const main = document.querySelector(".main");

creadores.addEventListener('click', () => {
    creadores.innerHTML = `
    <img src="./img/escritura (2).png" alt="">
    `
    inicio.innerHTML = `
    <img src="./img/cafe.png" alt="">
    `
    ejemplos.innerHTML = `
    <img class="es" src="./img/escritura.png" alt="">
    `
    main.innerHTML=`
    <h1>Creadores</h1>
    <section class="secction">
        <img class="nosotros" src="./img/ana.avif" alt="">
        <div class="one">
            <h2>Ana Maria Zamora</h2>
            <h3>anamariazdlt@gmail.com</h3>
            <a href="https://instagram.com/imn0t_anaz?igshid=NjZiMGI4OTY="> Instagram</a>
        </div>
    </section>
    <section class="secction2">
        <img class="nosotros" src="./img/mari.avif" alt="">
        <div class="one2">
            <h2>Mariana Barrero</h2>
            <h3>marianabarreroandrade@gmail.com</h3>
            <a href="https://www.instagram.com/mari.barrero25/"> Instagram</a>
        </div>
    </section>
    <section class="secction">
        <img class="nosotros" src="./img/simon.avif" alt="">
        <div class="one">
            <h2>Simon Pineda</h2>
            <h3>asimonpineda0521@gmail.com</h3>
            <a href="https://instagram.com/simonpineda0521?igshid=NjZiMGI4OTY="> Instagram</a>
        </div>
    </section>
    `
})
inicio.addEventListener('click', () => {
    creadores.innerHTML = `
    <img src="./img/usuario.png" alt="">
    `
    inicio.innerHTML = `
    <img src="./img/cafe (1).png" alt="">
    `
    ejemplos.innerHTML = `
    <img class="es" src="./img/escritura.png" alt="">
    `
    main.innerHTML=`
    <div>
    <h1>Sobre nosotros</h1>
    <h4>"Para darte a conocer primero debes saber que quieres comunicar"</h4>
    </div>
    <img class="toro" src="./img/toro.png" alt="">
    <h5>Somos un emprendimiento que genera diseños de logotipos únicos, basándonos en la geometría para que sean los más llamativos y aptos para tu empresa.</h5>
    <a href="https://instagram.com/geo_design2022?igshid=NjZiMGI4OTY="> Instagram</a>
    `
})
ejemplos.addEventListener('click', () => {
    creadores.innerHTML = `
    <img src="./img/usuario.png" alt="">
    `
    inicio.innerHTML = `
    <img src="./img/cafe.png" alt="">
    `
    ejemplos.innerHTML = `
    <img class="es" src="./img/escritura (1).png" alt="">
    `
    main.innerHTML=`
    <h1>Proyectos</h1>
    <div class="pro">
        <img class="logos" src="/img/conejo.jpg" alt="">
        <img class="logos" src="/img/logoMari.jpg" alt="">
        <img class="logos" src="/img/toro.jpg" alt="">
        <img class="logos" src="/img/mur.jpg" alt="">
        <img class="logos" src="/img/mariposa.jpg" alt="">
        <img class="logos" src="/img/buho.jpg" alt="">
        <img class="logos" src="/img/zorro.jpg" alt="">
        <img class="logos" src="/img/si.jpg" alt="">
    </div>
    `
})
