let mili = 0;
let seg = 0;
let min = 0;
let horas = 0;
let crono = document.getElementById('cronometro');
let guardarHora;

let cronometro = () => {
    guardarHora = setInterval( () => {

        if (mili == 10) {
            seg++;
            mili = 0;
        }

        if (seg == 60) {
            min++;
            seg = 0;
        }

        if (min == 60) {
            horas++;
            min = 0;
        }

        crono.textContent = `${horas}:${min}:${seg}.${mili}`;
        mili++;
    }, 100)
}

document.getElementById('start')
        .addEventListener( 'click', () => {
            cronometro();
        });

document.getElementById('stop')
        .addEventListener( 'click', () => {
            clearInterval(guardarHora);
        });

document.getElementById('reset')
        .addEventListener( 'click', () => {
            mili = 0;
            seg = 0;
            min = 0;
            horas = 0;

            crono.textContent = `${horas}:${min}:${seg}.${mili}`;
        });

/*
        Hecho por Victor:

    // let interval = setInterval(updateTime, 45);
    // let running = true;
    // function updateTime () {
    //     totalMils += 45;
    //     let milis = (totalMils % 1000).toFixed(0).padStart(2, "0");
    //     let secs = ((totalMils/1000) % 60).toFixed(0).padStart(2, "0");
    //     let mins = ((totalMils/1000) / 60).toFixed(0).padStart(2, "0");

    //     document.getElementById("mins").textContent = mins;
    //     document.getElementById("secs").textContent = secs;
    //     document.getElementById("mils").textContent = milis;

    // }

    

    // start.addEventListener("click", () => {
    //     interval = setInterval(updateTime, 45);
    //     if (!running) {
    //          interval = setInterval(updateTime,45);
    //          running = true;
    //     }
    // })

    // stops.addEventListener("click", () => {
    //     clearInterval(interval)
    //     running = false;
    // }) 

    // reset.addEventListener("click", () => {
    //     totalMils = 0;
    // })
*/