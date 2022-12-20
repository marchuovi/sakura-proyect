// const GetCards = () => {
//     fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
//         .then(respuesta => respuesta.json());
//     // .then (data => (console.log(data)));
// }
export const Data = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    .then(respuesta => respuesta.json());


