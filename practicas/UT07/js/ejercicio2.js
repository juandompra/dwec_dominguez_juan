const url = 'https://swapi.dev/api/planets';
let json;
let tabla = document.getElementById('list');

async function conseguirDatos(url) {
    fetch( url )
        .then( response => response.json() )
        .then(data => {
            data.results.forEach(element => {
                tabla.innerHTML += `
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.climate}</td>
                        <td>${element.gravity}</td>
                        <td>${element.terrain}</td>
                    </tr>
                `;
            });

            if (data.next) {
                conseguirDatos(data.next);
            }
        });
};

conseguirDatos(url);