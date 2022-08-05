const hourELEMENT = document.getElementById('hours');
const minutesELEMENT = document.getElementById('minutes');
const secondsELEMENT = document.getElementById('seconds');
const ampmELEMENT = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amORpm = 'AM';

    // Hora regular (no militar)
    if (h>=12){
        h = h - 12;
        amORpm = 'PM';
    }
    
    // condición para agregar '0' antes
    h = h<10 ? h='0'+h : h;
    m = m<10 ? m='0'+m : m;
    s = s<10 ? s='0'+s : s;

    // Método innerText para agregar variable a elemento HTML
    hourELEMENT.innerText = h;
    minutesELEMENT.innerText = m;
    secondsELEMENT.innerText = s;
    ampmELEMENT.innerText = amORpm;
    
    // Función para iterar y actualizar hora 
    setTimeout(()=>{
        updateClock();      
    }, 1000);
}

updateClock();      


