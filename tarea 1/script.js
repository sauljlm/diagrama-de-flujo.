let s= prompt("ingrese salario");
s=parseInt(s);
let he=prompt("ingrese horas extra");
he=parseInt(he);
let categoria=prompt("ingrese categoria");
categoria=parseInt(categoria);
let precio;
precio=parseInt(precio);
switch(categoria){
    case 1:
        precio=30;
        break
    case 2:
        precio=38;
        break
    case 3:
        precio=50;
        break
    case 4:
        precio=0;
        break
}
if(he>30){
    s=s+(30*precio);
}else{
    s=s+(he*precio);
}
console.log(s);
