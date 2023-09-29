let radio = prompt("Introduce el radio del círculo");
radio = Number(radio);
perimetro = 2 * Math.PI * radio;
area = Math.PI * (Math.pow(radio, 2));
alert(`El perímetro del círculo de radio ${radio} es ${perimetro} y su área es ${area}`);