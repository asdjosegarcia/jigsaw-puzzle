// m=(float(1000-60)/float(1023-0)) * inputAnalogVal+60;

// const tiempo=((0-999)/(10000-0)) * 20+999
// const movimientos=((0-999)/(1000-0)) * 20+999
// console.log('tiempo',tiempo)
// console.log('movimientos',movimientos)
// console.log((tiempo*movimientos)/1000)



// async function PostApiScores() {
//     const res = await fetch('https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/new/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: {
//             "user":"jugador3348",
//             "map":4,
//             "userId":5343,
//             "score":403400,
//             "secondsPlayed":22233442,
//             "movementsNumber":543
//         },
//     });
//     const data = await res.json();
//     console.log('respuesta',data);
// }
// PostApiScores();

// async function postF(){

//     const res = await fetch("https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/", {
//         method: "GET",//creamos la tarea con POST
//         // headers: { //le indicamos que trabajaremos con 
//         //   "Content-Type": "application/json",//json
//         // },
//         // body: JSON.stringify({
//         //     user:"jugador3348",
//         //     map:4,
//         //     userId:5343,
//         //     score:403400,
//         //     secondsPlayed:22233442,
//         //     movementsNumber:543
//         // }),//enviamos como datos para la nueva tarea un post con titulo y descripcion
//       })
//        console.log(res)
// }
// postF()


/* 
async function PostApiScores() {
    try {
        const res = await fetch('https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/new/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                "user":"jugador3348",
                "map":4,
                "userId":5343,
                "score":403400,
                "secondsPlayed":22233442,
                "movementsNumber":543
            },
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }

        const data = await res.json();
        console.log('respuesta', data);
    } catch (error) {
        console.error('Error en la solicitud:', error.message);
    }
}

PostApiScores(); */

/* async function getApiScores() {
    const res = await fetch(`https://db-asdjosegarcia.vercel.app/api/jigsaw/scores`)
    const data = (await res.json())
    console.log(data)
    //   await new Promise((resolve)=>{setTimeout(resolve,1000)})

    // return data
}
getApiScores() */
async function getApiScores() {
    const res = await fetch(`https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/best-ten`)
    const data = (await res.json())
    console.log(await data)
    // setData(await data)
}
getApiScores()