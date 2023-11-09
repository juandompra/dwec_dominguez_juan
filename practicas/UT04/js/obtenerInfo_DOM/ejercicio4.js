let parrafos = document.getElementsByTagName('p');

let enlaces = document.getElementsByTagName('a');
let penultimo = enlaces[enlaces.length - 2].getAttribute('href');
                //enlaces[enlaces.length - 2].href;

let coinciden = document.querySelectorAll("[href='https://www.google.es']");
/*
let coinciden = Array.from(enlaces)
                     .map( item => item.href )
                     .reduce((acum, enlace) => {
                        return enlace == 'https://www.google.es/' ? acum+1 : acum;
                     }, 0)

*/

let numPalabrasParrafo = parrafos[1].textContent
                                    .trim()
                                    .split(" ")
                                    .length;

let span1 = document.getElementById("parrafos");
let span2 = document.getElementById("segundo-enlace");
let span3 = document.getElementById("links-google-es");
let span4 = document.getElementById("palabras-segundo-parrafo");

span1.textContent = parrafos.length;
span2.textContent = penultimo;
span3.textContent = coinciden.length;
span4.textContent = numPalabrasParrafo;