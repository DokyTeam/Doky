import fire from '../config/Fire';
import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';
import {FirebaseUpdateRepository} from '../access_data/firebase_update_repository';

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
    
}