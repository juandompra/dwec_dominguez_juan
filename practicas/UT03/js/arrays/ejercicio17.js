let arr = [
    {   
        name: 'Juan',
        surname: 'Dominguez',
    },
    {
        name: 'Pepe',
        surname: 'Pérez',
    }]

function generateUsername(arr) {
    arr.forEach(element => {
        let anadido = element.name.charAt(0).toLowerCase()
            + element.surname.toLowerCase() + Math.round((Math.random()*10).toString())
            + Math.round((Math.random()*10).toString());
        element.nickname = anadido;
    });

    return arr;
}

console.log(generateUsername(arr));