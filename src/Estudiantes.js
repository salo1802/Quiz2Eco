

class Estudiantes{
   

    constructor(name, curso, code,parti,database){
        this.name = name;
        this.curso = curso;
        this.code = code;
        this.parti = parti;
        this.database = database;
        this.clickSumar = false;
        this.clickQuitar = false;
    }

    
    loadEst = ()=>{
      
        let component = document.createElement('div');
        component.className = 'contEstudiantes';

            
            let cursoConteiner = document.createElement('h2');
            cursoConteiner.innerHTML = this.curso;
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
                this.clickSumar = true;
                this.parti++;
                partConteiner.innerHTML = this.parti; 
               
            });

           botonQuitar.addEventListener('click',()=>{
            this.clickQuitar = true;
               component.remove();
            });

            
     
     
      
      

        return component;
    }



}