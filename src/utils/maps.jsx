//general
const bkImg0 = "";
//lvl1
import bgImglvl1 from '@img/background/lvl1.jpg'//importamos por que sino webpack no nos transgorma la url y nos da un 404
import prevImglvl1 from '@img/preview/lvl1.jpg'
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
import bgImglvl2 from '@img/background/lvl2.jpg'
import bkImg1lvl2 from '@img/pieces_img/lvl2/1.jpg'
import bkImg2lvl2 from '@img/pieces_img/lvl2/2.jpg'
import bkImg3lvl2 from '@img/pieces_img/lvl2/3.jpg'
import bkImg4lvl2 from '@img/pieces_img/lvl2/4.jpg'
import bkImg5lvl2 from '@img/pieces_img/lvl2/5.jpg'
import bkImg6lvl2 from '@img/pieces_img/lvl2/6.jpg'
import bkImg7lvl2 from '@img/pieces_img/lvl2/7.jpg'
import bkImg8lvl2 from '@img/pieces_img/lvl2/8.jpg'
import bkImg9lvl2 from '@img/pieces_img/lvl2/9.jpg'
import bkImg10lvl2 from '@img/pieces_img/lvl2/10.jpg'
import bkImg11lvl2 from '@img/pieces_img/lvl2/11.jpg'
import bkImg12lvl2 from '@img/pieces_img/lvl2/12.jpg'
import bkImg13lvl2 from '@img/pieces_img/lvl2/13.jpg'
import bkImg14lvl2 from '@img/pieces_img/lvl2/14.jpg'
import bkImg15lvl2 from '@img/pieces_img/lvl2/15.jpg'
import bkImg16lvl2 from '@img/pieces_img/lvl2/16.jpg'
import prevImglvl2 from '@img/preview/lvl2.jpg'
//lvl3
import bgImglvl3 from '@img/background/lvl3.jpg'
import bkImg1lvl3 from '@img/pieces_img/lvl3/1.jpg'
import bkImg2lvl3 from '@img/pieces_img/lvl3/2.jpg'
import bkImg3lvl3 from '@img/pieces_img/lvl3/3.jpg'
import bkImg4lvl3 from '@img/pieces_img/lvl3/4.jpg'
import bkImg5lvl3 from '@img/pieces_img/lvl3/5.jpg'
import bkImg6lvl3 from '@img/pieces_img/lvl3/6.jpg'
import bkImg7lvl3 from '@img/pieces_img/lvl3/7.jpg'
import bkImg8lvl3 from '@img/pieces_img/lvl3/8.jpg'
import bkImg9lvl3 from '@img/pieces_img/lvl3/9.jpg'
import prevImglvl3 from '@img/preview/lvl3.jpg'



export const jigsawMaps = {
    1: {//lvl1
        mapWhidth: 3,//ancho de mapa
        mapHeight: 3,//alto
        limitTime: false, //tiempo limite
        movementLimit: false, //limite de movimientos
        stopWatch: 2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds
        frameBackgroundColor:{backgroundColor:"rgba(0, 39, 65, 0.38)"}, 
        imgBackgroundUrl: bgImglvl1,//imagen de fondo
        imgPreview: prevImglvl1,//vista en miniatura del mapa
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
    2: {//lvl2
        mapWhidth: 4,//ancho de mapa
        mapHeight: 4,//alto
        limitTime: false, //tiempo limite
        movementLimit: false, //limite de movimientos
        stopWatch: 2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds 
        frameBackgroundColor:{backgroundColor:"rgba(0, 56, 6, 0.38)"}, 
        imgBackgroundUrl: bgImglvl2,//imagen de fondo
        imgPreview: prevImglvl2,//vista en miniatura del mapa
        imgblocks: [
            bkImg0,
            bkImg1lvl2,
            bkImg2lvl2,
            bkImg3lvl2,
            bkImg4lvl2,
            bkImg5lvl2,
            bkImg6lvl2,
            bkImg7lvl2,
            bkImg8lvl2,
            bkImg9lvl2,
            bkImg10lvl2,
            bkImg11lvl2,
            bkImg12lvl2,
            bkImg13lvl2,
            bkImg14lvl2,
            bkImg15lvl2,
            bkImg16lvl2,
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
    3: {
        mapWhidth: 3,//ancho de mapa
        mapHeight: 3,//alto
        limitTime: false, //tiempo limite
        movementLimit: false, //limite de movimientos
        stopWatch: 2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds 
        frameBackgroundColor:{backgroundColor:"rgba(0, 0, 0, 0.38)"}, 
        imgBackgroundUrl: bgImglvl3,//imagen de fondo
        imgPreview: prevImglvl3,//vista en miniatura del mapa
        imgblocks: [
            bkImg0,
            bkImg1lvl3,
            bkImg2lvl3,
            bkImg3lvl3,
            bkImg4lvl3,
            bkImg5lvl3,
            bkImg6lvl3,
            bkImg7lvl3,
            bkImg8lvl3,
            bkImg9lvl3,],
        backgroundSound:'',
        movementSound:'',
        finishItems: {
            finishTitle:'YOU WIN',
            finishMessage: 'Este es el mensaje de finalizacion',
            nextStageButton: true,
            timeElapsed:true,
        },
    },
/*     4: {
        mapWhidth: 3,//ancho de mapa
        mapHeight: 3,//alto
        limitTime: false, //tiempo limite
        movementLimit: false, //limite de movimientos
        stopWatch: 2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds 
        frameBackgroundColor:{backgroundColor:"rgba(0, 0, 0, 0.38)"}, 
        imgBackgroundUrl: bgImglvl3,//imagen de fondo
        imgPreview: prevImglvl3,//vista en miniatura del mapa
        imgblocks: [
            bkImg0,
            bkImg1lvl3,
            bkImg2lvl3,
            bkImg3lvl3,
            bkImg4lvl3,
            bkImg5lvl3,
            bkImg6lvl3,
            bkImg7lvl3,
            bkImg8lvl3,
            bkImg9lvl3,],
        backgroundSound:'',
        movementSound:'',
        finishItems: {
            finishTitle:'YOU WIN',
            finishMessage: 'Este es el mensaje de finalizacion',
            nextStageButton: true,
            timeElapsed:true,
        },
    }, */


}
// console.log(jigsawMaps.lvl1);
// export {jigsawMaps}


