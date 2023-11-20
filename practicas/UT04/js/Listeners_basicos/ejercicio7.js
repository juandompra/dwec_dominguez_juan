document.getElementById('btn')
        .addEventListener( 'click', () => {
            let img = document.querySelector('.images');
            let imagenes = img.querySelectorAll('img');
            img.prepend(imagenes[4]);
        })