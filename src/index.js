import {getDatabase,ref,child, update, remove, onValue,set,get} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";
const db = getDatabase();
var listaestu = [];
var cards = [];


const username = document.getElementById("username");
const code = document.getElementById("code");
const curso = document.getElementById("curso");
const publicarBtn = document.getElementById("matricularBtn");
const snbn = document.getElementById("estudiantesSinBono");
const bnplta = document.getElementById("estudiantesBonoPlata");
const bnoro = document.getElementById("estudiantesBonoOro");


const sumar = (p,cod,cur,nombre) =>{
    
    set(ref(db, "Estudiantes/"+cod),{
        nombre: nombre,
        code: cod,
        curso: cur,
        participacion: p
    }).then(()=>{
        
    }).catch((error)=>{
        alert("papi paso esto: "+ error);
    });

    location.reload();
}

const quitar = (c) =>{
    remove(ref(db,"Estudiantes/"+c));
    location.reload();
}

$(document).ready(function(){

    console.log("reinicio");

    const dbRef = ref(db, 'Estudiantes');
onValue(dbRef, (snapshot) =>{
    const data = snapshot.val();

    snapshot.forEach((doc) => {
       
        let v = JSON.stringify(doc.val());
        let pa = JSON.parse(v)
        console.log("nombre a verificar = "+pa.nombre);
        let newestu = pa.nombre+pa.curso;
        listaestu.push(newestu);
        let newname = pa.nombre;
        let newcode = pa.code;
        let newcurso = pa.curso;
        let newpart = pa.participacion;
        console.log(pa.nombre);
        console.log(pa.curso);
        console.log(pa.code);
        console.log(pa.participacion);

        let estClass = new Estudiantes(newname,newcurso,newcode,newpart,db);
        console.log("objeto"+estClass);
        cards.push(estClass);
         
        if(estClass.parti<6){
            snbn.appendChild(estClass.loadEst());
        }
        if(estClass.parti>5&&estClass.parti<11){
            bnplta.appendChild(estClass.loadEst());
        }
      if(estClass.parti>10){
          bnoro.appendChild(estClass.loadEst());
      }
      
  
     
    
    });

    console.log("lista", cards);
    });

    
    


});

document.onclick = function(){
    cards.forEach((actual)=>{
        console.log(actual.code);
      if(actual.clickSumar==true){
          
          sumar(actual.parti,actual.code,actual.curso,actual.name);
        
      }
      if(actual.clickQuitar==true){
          quitar(actual.code);
      }
        
       
    });
   // location.reload();
}

const matricularEvent = () => {
    if(username.value==""||code.value==""||curso.value==""){
        alert("rellene todos los campos para matricular");
        return; 
    }
    if(listaestu.some(estu =>  estu == username.value+curso.value)){
        alert("este estudiante ya esta matricuado en este curso");
        return;  }


    set(ref(db, "Estudiantes/"+code.value),{
        nombre: username.value,
        code: code.value,
        curso: curso.value,
        participacion: 0
    }).then(()=>{
        
    }).catch((error)=>{
        alert("papi paso esto: "+ error);
    });


/*

const dbRef = ref(db, 'Estudiantes');
onValue(dbRef, (snapshot) =>{
    const data = snapshot.val();

    snapshot.forEach((doc) => {
       
        let v = JSON.stringify(doc.val());
        let pa = JSON.parse(v)
        console.log(pa.nombre + pa.content);
        let estClass = new Estudiantes(pa.nombre,pa.curso,pa.code,pa.participacion);
    estudiantesCont.appendChild(estClass.loadEst());
    
    });

    console.log("lista", data);
    });
*/

location.reload();


}

publicarBtn.addEventListener("click", matricularEvent);