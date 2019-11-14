import fire from '../config/Fire';
import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';
import { FirebaseUpdateRepository } from '../access_data/firebase_update_repository';

export class UserController {

    constructor() {
        this.firebaseInstance = fire;
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
    }

    createUser(id, data) {
        return this.firebaseCreateRepository.writeCollectionIdDefined('usuarios', id, data);
    }

    async getTipoUsuario(email) {
        return this.firebaseReadRepository.readCollection("usuarios").doc(email).get().then(
            querySnapshot => {
                return querySnapshot.data();
            }
        )
    }

    getInfomracionUsuario(userId) {
        return this.firebaseReadRepository.readCollection("usuarios").doc(userId).get().then(
            querySnapshot => {
                return querySnapshot.data();
            }
        )
    }

    getUserId() {
        return fire.auth().currentUser.uid;
    }

    addMascota(userId, mascotaInfo) {

        return this.firebaseCreateRepository.writeCollectionIdDefined('usuarios/' + userId + "/mascotas/", mascotaInfo.nombre, mascotaInfo);

    }

    addImagen(img, loadImg, error, fullyLoaded) {
        const storageRef = fire.storage().ref(`/FotosPerfil/${this.getUserId()}`);
        const task = storageRef.put(img);

        task.on('state_changed',
            snapshot => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                loadImg(percentage)
            },
            error,
            async () => {
                try {
                    let url = await task.snapshot.ref.getDownloadURL();
                    await fire.firestore().collection("usuarios").doc(this.getUserId()).set({ foto: url }, { merge: true });
                    fullyLoaded()
                } catch (errorCatch) {
                    error(errorCatch)
                }
            }
        )
    }

    async getInformacionMascotas(){
        const userId = this.getUserId();
        return fire.firestore().collection("usuarios").doc(userId).collection("mascotas").get().then(
            querySnapshot => {
                let mascotas = []
                querySnapshot.forEach(
                    doc =>{
                        mascotas.push(doc.data())
                    }
                )
                return mascotas
            }
        )
    }

    

}