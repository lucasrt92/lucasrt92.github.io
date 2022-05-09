let estudio = true;
if (!estudio) {
 alert('segui asi')
}else {
    //logica si es false
    alert('vamos mal')
}

let edad = 1;
if(edad ===1){
    alert('soy bebe')
} else if(edad ===2) {
    alert('soy bebe de 2')
} else {
    alert('niño')
}

// switch

edad = 5;

switch(edad) {
    case 1: 
      alert('soy bebe1');
        break;
    case 2:
        alert('soy bebe2')
        break;
    default:
        alert('niño')
}