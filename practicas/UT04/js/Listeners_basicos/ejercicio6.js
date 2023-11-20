document.getElementById('btn')
        .addEventListener( 'click', () => {
            let body = document.body;
            let num1 = Math.random()*255;
            let num2 = Math.random()*255;
            let num3 = Math.random()*255;
            body.setAttribute('style', `background-color: rgb(${num1.toFixed(0)}, ${num2.toFixed(0)}, ${num3.toFixed(0)})`);
            //body.style.background = rgb(num1.toFixed(0), num2.toFixed(0), num3.toFixed(0));
        });