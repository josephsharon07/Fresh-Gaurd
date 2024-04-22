const firebaseConfig = {
  apiKey: "AIzaSyAF4tQTSM90xjCu6lhQ3x_GwsR0NiAp9LI",
  authDomain: "precigrow.firebaseapp.com",
  databaseURL: "https://precigrow-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "precigrow",
  storageBucket: "precigrow.appspot.com",
  messagingSenderId: "880829404032",
  appId: "1:880829404032:web:08284388219f9224ffe765",
  measurementId: "G-0CP6M6NCKE"
};

  const app = firebase.initializeApp(firebaseConfig);
  auth = app.auth()