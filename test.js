/* const miObjeto = {};

for (let i = 0; i < 5; i++) {
  const clave = `clave${i}`;
  const valor = `valor${i}`;
  miObjeto[clave] = valor;
}

console.log(miObjeto);
 */

/* 
const miObjeto = {};

miObjeto.clave2 = {
  claveInterior: 'valorInterior',
};

console.log(miObjeto);
 */
/* 
const blockStyle = {};
for (let i = 0; i < 9; i++) {
    const key = `backgoundImage`
    console.log(key)
    blockStyle[i] = { backgroundImage: `url(${[i]})` } //creamos un claves backgroundImg con el valor de cada imagen    
    // blockStyle.push(`backgoundImage:url(${jigsawMaps.lvl1.imgblocks[i]})`)
}
console.log(blockStyle)
 */
//getjisawmap[index] //recorre el mapa creando una clase para cada div
//cada case creada ya tiene la imagen lista
//entonces tengo que crear un objeto que ordene las imagenes del mismo modo que
//el getjigsawMap para luego asignarlas como estilos en cada div desde el objeto blocksStyles