
addEventListener("DOMContentLoaded", (e)=>{
   const hiloSecundario = new Worker("Recursos_Secundarios/main.js");
   hiloSecundario.postMessage({ metodo:'GET', url: "https://reqres.in/api/users"});
   const ID = document.querySelector("#Datos");
   const fragmen = new DocumentFragment();
   hiloSecundario.addEventListener('message', (e)=>{
       if(e.data.id!='ok'){
            let TR = document.createElement('TR');
            let TD = document.createElement('TD');
            let TDIMG = document.createElement('TD');
            let TDNombre = document.createElement('TD');
            let TDAPELLIDO = document.createElement('TD');
            let TDEMAIL = document.createElement('TD');
            let IMG = document.createElement('IMG');
            TD.appendChild(document.createElement('TD').appendChild(document.createTextNode(`${e.data.id}`)));
            IMG.src = `${e.data.avatar}`;
            TDIMG.appendChild(IMG);
            TDNombre.appendChild(document.createElement('TD').appendChild(document.createTextNode(`${e.data.first_name}`)));
            TDAPELLIDO.appendChild(document.createElement('TD').appendChild(document.createTextNode(`${e.data.last_name}`)));
            TDEMAIL.appendChild(document.createElement('TD').appendChild(document.createTextNode(`${e.data.email}`)));
            
            TR.appendChild(TD);
            TR.appendChild(TDIMG);
            TR.appendChild(TDNombre);
            TR.appendChild(TDAPELLIDO);
            TR.appendChild(TDEMAIL);
            fragmen.appendChild(TR);
       }else{
           ID.appendChild(fragmen);
           hiloSecundario.terminate();
       }
   })

   
})

















// addEventListener("DOMContentLoaded", (e)=>{
//    const hiloSecundario = new Worker("Recursos_Secundarios/main.js");
//    const randon = {
//        generar: function(){
//            return Math.trunc(Math.random()*500000);
//        }
//    }
//    hiloSecundario.postMessage({num: randon.generar()});
//    hiloSecundario.addEventListener('message', (e)=>{
//         if(e.data.res){
//             hiloSecundario.terminate();
//         }
//         console.log(e.data);
//         hiloSecundario.postMessage({num: randon.generar()})
        
//    })
   
// })

















// const peticion = new XMLHttpRequest();
// peticion.addEventListener("readystatechange", ()=>{
//     if(peticion.readyState==4){
//         console.log(peticion.readyState);
//         console.log(peticion.status);
//         console.log(JSON.parse(peticion.response));
        
//     }
    
// })
// peticion.open("POST", "https://reqres.in/api/users");
// peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");
// peticion.send(JSON.stringify({
//     "name": "Miguel",
//     "job": "Intructor"
// }));













