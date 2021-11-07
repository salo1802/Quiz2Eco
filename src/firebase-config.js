const firebaseConfig = {
    apiKey: "AIzaSyDvr5AZEdnbRmTQuKvph5cIeO1o662mTQ8",
      authDomain: "ecosistemas-de-apps-2de1b.firebaseapp.com",
      databaseURL: "https://ecosistemas-de-apps-2de1b-default-rtdb.firebaseio.com",
      projectId: "ecosistemas-de-apps-2de1b",
      storageBucket: "ecosistemas-de-apps-2de1b.appspot.com",
      messagingSenderId: "131410176852",
      appId: "1:131410176852:web:c2d43a49b8d997a853b6c1",
      measurementId: "G-1QX8HCNEN8"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
