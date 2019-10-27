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

    async getTipoUsuario(email) {
        return this.firebaseInstance.firestore().collection("usuarios").doc(email).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    getInfomracionUsuario(email){
        console.log("info user")
        console.log(email)
        return this.firebaseInstance.firestore().collection("usuarios").doc(email).get().then(
            querySnapshot =>{
                console.log(querySnapshot.data())
                return querySnapshot.data();
            }
        )
    }
    
    addMascota(email,mascotaInfo){
        console.log(mascotaInfo)
        console.log(email)
        return this.firebaseInstance.firestore().collection('usuarios').doc(email).collection("mascotas").doc(mascotaInfo.nombre).set(mascotaInfo);
    }

}