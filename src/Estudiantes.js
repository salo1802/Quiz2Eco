class Estudiantes{

    constructor(name, curso, code,parti){
        parti = 0;
        this.name = name;
        this.content = curso;
        this.code = code;
        this.parti = parti;
    }

    loadEst = ()=>{
        let component = document.createElement('div');
        component.className = 'contEstudiantes';

            
            let cursoConteiner = document.createElement('h2');
            cursoConteiner.innerHTML = this.content;
            cursoConteiner.className = 'cursotxt';

            let nameConteiner = document.createElement('h3');
            nameConteiner.innerHTML =  this.name;
            nameConteiner.className = 'nombretxt';

            let codeConteiner = document.createElement('h3');
            codeConteiner.innerHTML = this.code;
            codeConteiner.className = 'codetxt';

            let partConteiner = document.createElement('h1');
            partConteiner.innerHTML = this.parti;
            partConteiner.className = 'parttxt';

            let botonSumar = document.createElement('button');
            botonSumar.innerHTML = "+"
            botonSumar.className = 'botonSumar';

            let botonQuitar = document.createElement('button');
            botonQuitar.innerHTML = "X"
            botonQuitar.className= 'botonQuitar';

            component.appendChild(cursoConteiner);
            component.appendChild(nameConteiner);
            component.appendChild(codeConteiner);
            component.appendChild(partConteiner);
            component.appendChild(botonSumar);
            component.appendChild(botonQuitar);

            botonSumar.addEventListener('click', ()=>{
               const database = firebase.database();
               database.ref('Estudiantes/')
            });

        return component;
    }


}