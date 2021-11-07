const firebaseConfig = {
    apiKey: "AIzaSyDvr5AZEdnbRmTQuKvph5cIeO1o662mTQ8",
  authDomain: "ecosistemas-de-apps-2de1b.firebaseapp.com",
  databaseURL: "https://ecosistemas-de-apps-2de1b-default-rtdb.firebaseio.com",
  projectId: "ecosistemas-de-apps-2de1b",
  storageBucket: "ecosistemas-de-apps-2de1b.appspot.com",
  messagingSenderId: "131410176852",
  appId: "1:131410176852:web:b3d2f6d8f10c4eb453b6c1",
  measurementId: "G-G6B2XSS9D1"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
