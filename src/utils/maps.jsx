import bgImg1 from '@img/background/lvl1.jpg'//importamos por que sino webpack no nos transgorma la url y nos da un 404
import prevImg from '@img/preview/lvl1.jpg'
import bkImg1 from '@img/pieces_img/lvl1/1.jpg'
import bkImg2 from '@img/pieces_img/lvl1/2.jpg'
import bkImg3 from '@img/pieces_img/lvl1/3.jpg'
import bkImg4 from '@img/pieces_img/lvl1/4.jpg'
import bkImg5 from '@img/pieces_img/lvl1/5.jpg'
import bkImg6 from '@img/pieces_img/lvl1/6.jpg'
import bkImg7 from '@img/pieces_img/lvl1/7.jpg'
import bkImg8 from '@img/pieces_img/lvl1/8.jpg'
import bkImg9 from '@img/pieces_img/lvl1/9.jpg'


export const jigsawMaps={
    lvl1:{
        mapWhidth:3,//ancho de mapa
        mapHeight:3,//alto
        limitTime:false, //tiempo limite
        movimentLimit:false, //limite de movimientos
        stopWatch:2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds 
        imgBackgroundUrl:bgImg1,//imagen de fondo
        imgPreview:prevImg,//vista en miniatura del mapa
        imgblocks:{
            1:bkImg1,
            2:bkImg2,
            3:bkImg3,
            4:bkImg4,
            5:bkImg5,
            6:bkImg6,
            7:bkImg7,
            8:bkImg8,
            9:bkImg9,
        }
    },
    lvl2:{
        mapWhidth:4,
        mapHeight:4,
        limitTime:false,
        movimentLimit:false,
        stopWatch:2,//0 disabled. 1 minutes:seconds:milliseconds.  2 minutes:seconds 
        imgBackground:'',
        imgPreview:'',
    },


}
// console.log(jigsawMaps.lvl1);
// export {jigsawMaps}


