//general
const bkImg0 = "";
//lvl1
import bgImg1 from '@img/background/lvl1.jpg'//importamos por que sino webpack no nos transgorma la url y nos da un 404
import prevImg from '@img/preview/lvl1.jpg'
import bkImg1lvl1 from '@img/pieces_img/lvl1/1.jpg'
import bkImg2lvl1 from '@img/pieces_img/lvl1/2.jpg'
import bkImg3lvl1 from '@img/pieces_img/lvl1/3.jpg'
import bkImg4lvl1 from '@img/pieces_img/lvl1/4.jpg'
import bkImg5lvl1 from '@img/pieces_img/lvl1/5.jpg'
import bkImg6lvl1 from '@img/pieces_img/lvl1/6.jpg'
import bkImg7lvl1 from '@img/pieces_img/lvl1/7.jpg'
import bkImg8lvl1 from '@img/pieces_img/lvl1/8.jpg'
import bkImg9lvl1 from '@img/pieces_img/lvl1/9.jpg'
//lvl2
import bkImg1lvl2 from '@img/pieces_img/lvl2/1.jpg'
import bkImg2lvl2 from '@img/pieces_img/lvl2/2.jpg'
import bkImg3lvl2 from '@img/pieces_img/lvl2/3.jpg'
import bkImg4lvl2 from '@img/pieces_img/lvl2/4.jpg'
import bkImg5lvl2 from '@img/pieces_img/lvl2/5.jpg'
import bkImg6lvl2 from '@img/pieces_img/lvl2/6.jpg'
import bkImg7lvl2 from '@img/pieces_img/lvl2/7.jpg'
import bkImg8lvl2 from '@img/pieces_img/lvl2/8.jpg'
import bkImg9lvl2 from '@img/pieces_img/lvl2/9.jpg'

export const jigsawMaps = {
    lvl1: {
        mapWhidth: 3,//ancho de mapa
        mapHeight: 3,//alto
        limitTime: false, //tiempo limite
        movementLimit: false, //limite de movimientos
        stopWatch: 2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds 
        imgBackgroundUrl: bgImg1,//imagen de fondo
        imgPreview: prevImg,//vista en miniatura del mapa
        imgblocks: [
            bkImg0,
            bkImg1lvl1,
            bkImg2lvl1,
            bkImg3lvl1,
            bkImg4lvl1,
            bkImg5lvl1,
            bkImg6lvl1,
            bkImg7lvl1,
            bkImg8lvl1,
            bkImg9lvl1,],
        backgroundSound:'',
        movementSound:'',
        finishItems: {
            finishTitle:'YOU WIN',
            finishMessage: 'Este es el mensaje de finalizacion',
            nextStageButton: true,
            timeElapsed:true,
        },
    },
    lvl2: {
        mapWhidth: 4,//ancho de mapa
        mapHeight: 4,//alto
        limitTime: false, //tiempo limite
        movementLimit: false, //limite de movimientos
        stopWatch: 2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds 
        imgBackgroundUrl: bgImg1,//imagen de fondo
        imgPreview: prevImg,//vista en miniatura del mapa
        imgblocks: [
            bkImg1lvl2,
            bkImg2lvl2,
            bkImg3lvl2,
            bkImg4lvl2,
            bkImg5lvl2,
            bkImg6lvl2,
            bkImg7lvl2,
            bkImg8lvl2,
            bkImg9lvl2,
        ],
        backgroundSound:'',
        movementSound:'',
        finishItems: {
            finishTitle:'YOU WIN',
            finishMessage: 'Este es el mensaje de finalizacion',
            nextStageButton: true,
            timeElapsed:true,
        },
    },

}
// console.log(jigsawMaps.lvl1);
// export {jigsawMaps}


