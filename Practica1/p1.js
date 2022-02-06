let b = 6;
let a = 0;

function crearMeteorito() {
    const met = document.getElementById("meteorito") //Donde lo quieres meter
    const meteoros = document.createElement('img') //Lo que quieres crear
    met.appendChild(meteoros); //Añadir hijo (nuevo objeto) al padre met
    meteoros.style.top = `${Math.random() *(20-0)+0}px`
    meteoros.style.left = `${Math.random() *(1700-0)+0}px`
    meteoros.className = "modMeteorito"
    meteoros.src = "meteorito.jpg"
    if(document.getElementsByClassName("modMeteorito").length > 9 ){  //Importante
        document.getElementsByClassName("modMeteorito")[0].remove();
    }
    //console.log(document.getElementsByClassName("modMeteorito").length)
}
setInterval(crearMeteorito, 4000);


function caerMeteoro() {
    const elem = document.getElementsByClassName("modMeteorito");
    for (let i = 0; i < elem.length; i++) {
        if(parseInt(elem[i].style.top.replace("px", ""))<750){
        elem[i].style.top = parseInt(elem[i].style.top.replace("px", "")) + 5 + "px"
        }else{
            elem[i].remove();
        }
    }


}

setInterval(caerMeteoro, Math.random() * (200 - 30) + 30);

function crearMisil() {
    const mis = document.getElementById("misil") //Donde lo quieres meter
    const misiles = document.createElement('img') //Lo que quieres crear
    mis.appendChild(misiles); //Añadir hijo (nuevo objeto) al padre met
    misiles.style.top = 750;
    console.log(document.getElementById("nave").style.left);
    if(document.getElementById("nave").style.left===""){
    }else{
        misiles.style.left = `${parseInt(document.getElementById("nave").style.left.replace("px", "")) + 25 + "px"}`
    }
    misiles.className = "modMisil"
    misiles.src = "misil.jpg"
}
function subirMisil() {
    const elem = document.getElementsByClassName("modMisil");
    for (let i = 0; i < elem.length; i++) {
        if(parseInt(elem[i].style.top.replace("px", ""))>20){
        elem[i].style.top = parseInt(elem[i].style.top.replace("px", "")) - 5 + "px"
        }else{
            elem[i].remove();
        }
    }


}
setInterval(subirMisil, 15);

function destruirMeteorito(){
    const mis = document.getElementsByClassName("modMisil"); 
    const met= document.getElementsByClassName("modMeteorito"); 

    for(let i=0; i<met.length; i++){
        for(let j=0; j<mis.length; j++){
            const dchaM = parseInt(document.getElementsByClassName("modMisil")[j].style.left.replace("px", "")) + 30 
            const izqM =  parseInt(document.getElementsByClassName("modMisil")[j].style.left.replace("px", ""))
            const dchaMeteo =  parseInt(document.getElementsByClassName("modMeteorito")[i].style.left.replace("px", "")) + 60 
            const izqMeteo =  parseInt(document.getElementsByClassName("modMeteorito")[i].style.left.replace("px", ""))
            const AbajoMeteo = parseInt(document.getElementsByClassName("modMeteorito")[i].style.top.replace("px", "")) + 60 
            const arrMis = parseInt(document.getElementsByClassName("modMisil")[j].style.top.replace("px", ""))
            const max = arrMis + 30; 
            const min = arrMis - 30;
            console.log(AbajoMeteo);
            console.log(arrMis)
                if((AbajoMeteo < max && AbajoMeteo > min) && ((dchaM >= dchaMeteo && izqM <= dchaMeteo) || (dchaM >= izqMeteo && izqM <= izqMeteo) || (izqM > izqMeteo && dchaM < dchaMeteo))){
                   console.log("AAAAAAAAAAAA")
                    mis[j].remove();
                    met[i].remove();
                }
        }
     
        

    }
}
/*if(document.getElementById("misil").style.left==document.getElementById("meteorito").style.left && document.getElementById("misil").style.top == document.getElementById("meteorito").style.bottom){
if(document.getElementById("misil").style.left){
}*/
setInterval(destruirMeteorito,100);

function destruirNave(){
    const nave = document.getElementsById("nav")
    const meteos = document.getElementsByClassName("modMeteorito");
    const dchaM = parseInt(document.getElementsById("nav").style.left.replace("px", "")) + 30 
    const izqM =  parseInt(document.getElementsById("nav").style.left.replace("px", ""))
    const arrMis = parseInt(document.getElementsById("nav").style.top.replace("px", ""))
    for(let i=0; i<meteos.length; i++){
        const dchaMeteo =  parseInt(document.getElementsByClassName("modMeteorito")[i].style.left.replace("px", "")) + 60 
        const izqMeteo =  parseInt(document.getElementsByClassName("modMeteorito")[i].style.left.replace("px", ""))
        const AbajoMeteo = parseInt(document.getElementsByClassName("modMeteorito")[i].style.top.replace("px", "")) + 60 
        const max = AbajoMeteo + 30; 
        const min = AbajoMeteo - 30;
        if((arrMis < max && arrMis > min) /*&& ((dchaM >= dchaMeteo && izqM <= dchaMeteo) || (dchaM >= izqMeteo && izqM <= izqMeteo) || (izqM > izqMeteo && dchaM < dchaMeteo))*/){
                nave.remove();
                meteos[i].remove()
        }

    }
}

function crearNave() {
    const nav = document.getElementById("nave") //Donde lo quieres meter
    const naves = document.createElement('img') //Lo que quieres crear
    nav.appendChild(naves); //Añadir hijo (nuevo objeto) al padre met
    naves.style.top = 820;
    naves.style.left = 600;
    naves.className = "modNave"
    naves.src = "nave.jpg"
}


const velocidad = 10;
let left = 560;

function moverIzquierda() {
    const nav = document.getElementById("nave");
    left -= velocidad;
    nav.style.left = `${ left }px`
}
function moverDerecha() {
    const nav = document.getElementById("nave");
    left += velocidad;
    nav.style.left = `${ left }px `
}
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
        moverIzquierda();
    }
    if (e.key == "ArrowRight") {
        moverDerecha();
    }
    if (e.keyCode == 32){
        crearMisil();
    }
    if(e.key=="s"){
        destruirMeteorito();
    }
})
