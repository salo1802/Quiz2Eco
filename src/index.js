import { initializeApp } from 'firebase/app';


import { getFirebaseConfig } from './firebase-config';
import { getDatabase, ref, set,child, onValue, push, get} from 'firebase/database';
// Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const db = getDatabase();



const username = document.getElementById("username");
const postInput = document.getElementById("postInput");
const publicarBtn = document.getElementById("publicarBtn");
const postCont = document.getElementById("postConteiner");



const publicarEvent = () => {
 


    set(ref(db, "posts/"+username.value+"'s post"),{
        nombre: username.value,
        content: postInput.value
    }).then(()=>{
        
    }).catch((error)=>{
        alert("papi paso esto: "+ error);
    });

    const newPost = {
       
        nombre: username.value,
        content: postInput.value
    }
   // referencia.set(newPost);
    const jsonObject = JSON.stringify(newPost);
    console.log(jsonObject);
    let postClass = new Post(username.value,postInput.value);
    postCont.appendChild(postClass.loadPost());

   /* 
const dbref = ref(db);

get(child(dbref,"posts/"))*/


const dbRef = ref(db, 'posts');
onValue(dbRef, (snapshot) =>{
    const data = snapshot.val();

    snapshot.forEach((doc) => {
       
        let v = JSON.stringify(doc.val());
        let pa = JSON.parse(v)
        console.log(pa.nombre + pa.content);
        let postClass = new Post(pa.nombre,pa.content);
    postCont.appendChild(postClass.loadPost());
    
    });

    console.log("lista", data);
    });


}

publicarBtn.addEventListener("click", publicarEvent);
