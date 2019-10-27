import fire from '../config/Fire';

export class UserController {

    constructor() {
        this.firebaseInstance = fire;
    }

    createUser(email, tipo) {
        return this.firebaseInstance.firestore().collection('usuarios').doc(email).set({
            tipo: tipo
        })
    }

    getTipoUsuario(email) {
        return this.firebaseInstance.firestore().collection("usuarios").doc(email).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    getInfomracionUsuario(email){
        return this.firebaseInstance.firestore().collection("usuarios").doc(email).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }
    
}