import {getDatabase,ref,child, update, remove, onValue,set} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";
const db = getDatabase();
var listaestu = [];


const username = document.getElementById("username");
const code = document.getElementById("code");
const curso = document.getElementById("curso");
const publicarBtn = document.getElementById("matricularBtn");
const estudiantesCont = document.getElementById("estudianteCont");
const snbn = document.getElementById("estudiantesSinBono");
const bnplta = document.getElementById("estudiantesBonoPlata");
const bnoro = document.getElementById("estudiantesBonoOro");


$(document).ready(function(){


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

        let estClass = new Estudiantes(newname,newcurso,newcode,newpart);
        estudiantesCont.appendChild(estClass.loadEst());
    
    });

    console.log("lista", data);
    });

});


const matricularEvent = () => {
    
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

}

publicarBtn.addEventListener("click", matricularEvent);