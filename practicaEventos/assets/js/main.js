function randomColor(){
    let colors = ['blue', 'red', 'green', 'orange', 'yellow'];
    let randomNum =  Math.floor(Math.random() * 5);    
    return colors[randomNum];
};

function alertSections (sectionName){
    sectionName.addEventListener('click', ()=>{
        let h3 =  sectionName.querySelector('h3').innerHTML       
        alert(`clickeaste en elemento ${h3}`)
    })    
}
window.addEventListener('load' ,()=>{
    
    let abraCadabraButton = document.querySelector('#abracadabra');
    abraCadabraButton.addEventListener('click', ()=>{
        let userName =  prompt('Ingresa tu nombre')
        
        let h1 = document.querySelector('h1#titular')
        h1.innerHTML =  `Hi, I’m ${userName}`
    });    
    
    let getInTouchButton = document.querySelector('a#getInTouch')
    getInTouchButton.addEventListener('dblclick', ()=>{
        let pColor = document.querySelector('p.parrafo-color')     
        pColor.style.color = randomColor()
    });       
    
    let selects = document.getElementsByTagName('select')

    Array.from(selects).forEach(section => {

        selects.addEventListener('click', ()=>{
            alert('Clickeaste en el elemnto ' + this.querySelector('h3').innerHTML)
        })
    })
    
    let sectionDialog = document.querySelector('section#dialog')
    let sectionCamera = document.querySelector('section#camera')
    let sectionOk = document.querySelector('section#ok')
    alertSections(sectionDialog)
    alertSections(sectionCamera)
    alertSections(sectionOk)
    
    let buttonRecentWork = document.querySelector('a#recent-work')
    
    buttonRecentWork.addEventListener('mouseover', (e)=>{
        let p = document.querySelector('footer p')
        p.style.color = randomColor()
    })
    
    buttonRecentWork.addEventListener('mouseout', (e)=>{
        let p = document.querySelector('footer p')
        p.style.color = '#888'
    })
    
    let imgLechuza = document.getElementById('lechuza')
    imgLechuza.addEventListener('click', ()=>{
        alert('Preparate para el futuro ...')
        
        setTimeout(function (){
            alert('El futuro ya llego!!!') 
        } ,5000)
    })
    
    let email = document.getElementById('email')
    
    email.addEventListener('keydown', (e)=>{
        if(e.which == 32){
            alert('No se puede tocar la barra en el cam[po email')
        }
    })
    
    addEventListener('keydown', (e)=>{
        console.log(e.key)
        let secretStatus= 0;
        if(secretStatus == 0 && e.key == 's'){
            secretStatus = 1;
        }else if(secretStatus == 1 && e.key == 'e'){
            secretStatus = 2;
        }else if(secretStatus == 2 && e.key == 'c'){
            secretStatus = 3;
        }else if(secretStatus == 3 && e.key == 'r'){
            secretStatus = 4;
        }else if(secretStatus == 4 && e.key == 'e'){
            secretStatus = 5;
        }else if(secretStatus == 5 && e.key == 't'){
            secretStatus = 6;
        }else if(secretStatus == 6 && e.key == 'o'){
            secretStatus = 0
            alert('SECRETO MAGICO')
        }else{
            secretStatus = 0
        }
        
    })
    
    
    
})





// Vamos con un desafío bastante más complejo... vamos a crear una máquina de
// estados . Nuestro objetivo será detectar cuando el usuario tipee de corrido la
// palabra “secreto”. El problema es que solamente podemos definir un evento
// cuando el usuario presiona una tecla y no cuando escribe toda una palabra. Por
// eso es que para empezar el ejercicio vamos a definir una variable estadoSecreto
// que empiece con el número 0. A partir de ahí, vamos a implementar un código
// interno que solo nosotros sabemos:
// 0 significa que todavía no escribió nada
// 1 significa que escribió “s”
// 2 significa que escribió “se”
// 3 significa que escribió “sec”
// 4 significa que escribió “secr”
// 5 significa que escribió “secre”
// 6 significa que escribió “secret”
// ¿Qué debe hacer nuestro código?
// Definiremos un evento al presionar una tecla que implemente la siguiente lógica:
// 1) Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1.
// 2) Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2.
// 3) Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3.
// 4) Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4.
// 5) Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5.
// 6) Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6.
// 7) Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y
// se dispara una alerta que diga “SECRETO MAGICO”.
// 8) Si no se cumple ninguna de las condiciones el estado vuelve a 0.
