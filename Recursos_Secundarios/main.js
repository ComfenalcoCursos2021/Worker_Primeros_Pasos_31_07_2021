addEventListener('message', (e)=>{
    
    const resquest = new XMLHttpRequest();
    resquest.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState==4 && e.target.status==200){
            JSON.parse(e.target.response).data.map((value, indice)=>{
                postMessage(value);
            })
            postMessage({id: 'ok'});
        }    
    })
    resquest.open(e.data.metodo, e.data.url);
    resquest.send();

})


// addEventListener('message', (e)=>{
//     if(e.data.num==324578){
//         postMessage({name: `Envio el numero ${e.data.num}`, res: true});
//     }
//     postMessage({name: `Envio el numero ${e.data.num}`, res: false});
    
// })


