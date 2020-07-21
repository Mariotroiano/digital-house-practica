

alert('Bienvenidos a mi sitio');
var confirmation = confirm("estas seguro que deseas avanzar ?")

if(confirmation){          
    document.querySelector('h2').innerText = `Que alegria que quieras seguir!!!`
    
    let name = prompt("ingrese su nombre")
    
    let h1 = document.querySelector('h1')
    
    h1.innerHTML = `Bienvenido ${name}`
    
    let years =  prompt('¿Que edad tenes?')
    
    if(years < 18){ 
        let div = document.getElementsByClassName("container-general")[0].style.display = 'none'   
        let errorDiv = document.getElementById('accesoDenegado').style.display = 'block' 
        
    }else{         
        
        
        let hobbies =  prompt('ingrese sus hobbies, eso si, que esten separados por una ,')
        hobbies = hobbies.split(',')
        if(hobbies.includes('programar') || hobbies.includes('programación') || hobbies.includes('programacion')){
            alert('que bueno que te guste programar')
            let divHobbies = document.getElementById('hobbies').innerHTML = `
            <h1>Tus hobbies</h1>
            <ol>
            <li><article>${hobbies[0]}</article></li>
            <li><article>${hobbies[1]}</article></li>
            <li><article>${hobbies[2]}</article></li>
            </ol>`
            let divImg = document.getElementsByClassName('background-img')[0].innerHTML = `<img src="img/programmer.jpeg">`
        }else{
            alert('que malo que no te guste programar')
            let divImg = document.getElementsByClassName('background-img')[0].innerHTML = `<img src="img/gatito.jpeg">`
            
        }
        
        let colorPreferido = prompt('ingresa tu color favorito')
        console.log(colorPreferido)
        let name = prompt('ingresa tu nombre')
        
        let h1 = document.querySelector('h1').innerHTML = `Bienvenido <span class="color-preferido"> ${name} </span>`
        
    }
    
    
}else{           
    document.querySelector('h2').innerText = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
    
}













