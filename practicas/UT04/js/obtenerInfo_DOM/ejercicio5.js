/*
let enlaces = document.querySelectorAll('li');

let arr = [
    "https://google.com",
    "https://duckduckgo.com",
    "https://www.bing.com",
    "https://www.ecosia.org/",
    "https://www.wolframalpha.com/"
];

let contador = 0;

while (contador < arr.length) {
    let a = document.createElement('a');
    a.setAttribute('href', arr[contador]);
    a.textContent = enlaces[contador].textContent;
    enlaces[contador].textContent = null;
    enlaces[contador].append(a);
    contador++;
}
*/


// Hecho por Victor

const urls = {
    google: "https://google.com",
    duckduckgo: "https://duckduckgo.com",
    bing: "https://www.bing.com",
    ecosia: "https://www.ecosia.org",
    wolframalpha: "https://www.wolframalpha.com"
}

let lis = document.getElementsByTagName('li');

Array.from(lis)
     .forEach( li => {
        li.innerHTML = `<a href="${urls[li.textContent.toLowerCase()]}">${li.textContent}</a>`
});