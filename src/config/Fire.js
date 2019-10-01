import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpeC4ex1pfc0jAXV2tX5sVrD_l_UTIcg4",
    authDomain: "doky-dokyteam.firebaseapp.com",
    databaseURL: "https://doky-dokyteam.firebaseio.com",
    projectId: "doky-dokyteam",
    storageBucket: "",
    messagingSenderId: "418566153692",
    appId: "1:418566153692:web:e168c505f51074d40b5b19",
    measurementId: "G-R7FL96Y5LQ"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;