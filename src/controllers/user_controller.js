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

    //es  necesario que se pase un objeto en lugar del tipo especifico
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

    getInfomracionUsuario(email) {
        return this.firebaseReadRepository.readCollection("usuarios").doc(email).get().then(
            querySnapshot => {
                return querySnapshot.data();
            }
        )
    }

    getUserId() {
        return fire.auth().currentUser.uid;
    }

    addMascota(email, mascotaInfo) {

        return this.firebaseCreateRepository.writeCollectionIdDefined('usuarios/' + email + "/mascotas/", mascotaInfo.nombre, mascotaInfo);

    }

    addImagen(img, loadImg, error, fullyLoaded) {
        const storageRef = fire.storage().ref(`/FotosPerfil/${this.getUserId()}`);
        const task = storageRef.put(img);

        task.on('state_changed',
            snapshot => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                loadImg(percentage)
            },
            errorTask => { error(errorTask) },
            async () => {
                try {
                    let url = await task.snapshot.ref.getDownloadURL();
                    await fire.firestore().collection("usuarios").doc(this.getUserId()).set({ foto: url }, { merge: true });
                    fullyLoaded()
                } catch (error) {
                    console.log(error)
                }
            }
        )
    }

    storeImagen(img) {

    }

}