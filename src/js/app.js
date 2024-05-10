// const horas = document.getElementsById('horas')
// const minutos = document.getElementsById('minutos')
// const segundos = document.getElementsById('segundos')

// const relogio = setInterval(function time() {
//     let dateToday = new Date();
//     let hr = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let sec = dateToday.getSeconds()

//     console.log(dateToday);

//     horas.textContent = hr;
//     minutos.textContent = min;
//     segundos.textContent = sec;
// })

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = `0${hr}`
    if (min < 10) min = `0${min}`
    if (sec < 10) sec = `0${sec}`

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
});