//Para hacer un contador regresivo

const actualizardor=setInterval(function(){


    const inicioClase = new Date(`Nov,16 2024 11:00:00`).getTime();
    console.log(inicioClase);
    
    const tiempoActual = new Date().getTime();
    console.log(tiempoActual);
    
    let tiempoRestante=inicioClase-tiempoActual;
    console.log(tiempoRestante);
    
    tiempoRestante /=1000;
    console.log(tiempoRestante);
    
    const dias = Math.floor(tiempoRestante/(60*60*24));
    console.log(dias);
    
    const horas= Math.floor((tiempoRestante%(60*60*24))/(60*60));
    console.log(horas);
    
    const minutos= Math.floor(tiempoRestante%(60*60)/(60));
    console.log(minutos);
    
    const segundos= Math.floor(tiempoRestante%(60));
    console.log(segundos);
    
    
    
    
    const contador = document.getElementById('contador');
    
    //Agregamos elementos HTML desde JS
    
    contador.innerHTML= `
    <div class="clock">
            <div>
                <span id="dias">${dias}</span>
                <span class="text">Días</span>
            </div>  
            <div>
                <span id="hour">${horas}</span>
                <span class="text">Horas</span>
            </div>
            <div>
                <span id="minutes">${minutos}</span>
                <span class="text">Minutos</span>
            </div><div>
                <span id="seconds">${segundos}</span>
                <span class="text">Segundos</span>
            </div>
        </div>`;
    /*<div>
        <span>${dias}</span>
        <span class="texto">Días</span>
    </div>
    <div>
        <span>${horas}</span>
        <span class="texto">Horas</span>
    </div>
    <div>
        <span>${minutos}</span>
        <span class="texto">Minutos</span>
    </div>
    <div>
        <span>${segundos}</span>
        <span class="texto">Segundos</span>
    </div>
    `;*/
    }, 1000);
    
    