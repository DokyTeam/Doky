import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseUpdateRepository } from '../access_data/firebase_update_repository';
import { FirebaseAuthRepository } from '../access_data/firebase_auth_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';

export class ChatController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
        this.firebaseAuthRepository = new FirebaseAuthRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
    }



    getMesages(idUsuario, idPrestador){
        return this.firebaseReadRepository.readCollection("chats").where("user1","==",idUsuario).where("user2","==",idPrestador).onSnapshot(
            function (querySnapshot) {  
                    querySnapshot.forEach(function (doc) {
                        let id = { "id": doc.id }
                        let values = doc.data().mensajes;
                        return values;
                }
            )
        })
    }


}