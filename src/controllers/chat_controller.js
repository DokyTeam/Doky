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


    async getIdChat(idUsuario, idPrestador){
        let result = [];  
        return this.firebaseReadRepository.readCollection("chats").where("user1","==",idUsuario).where("user2","==",idPrestador).get().then(
            function (querySnapshot) {  
                        querySnapshot.forEach(function (doc) {
                        result.push(doc.id);
                        result.push(doc.data().mensajes);
                        console.log(result);
                }
                
            )
            return result;
        })
    }



    getMesages(idUsuario, idPrestador){
        let values = [];
        return this.firebaseReadRepository.readCollection("chats").where("user1","==",idUsuario).where("user2","==",idPrestador).onSnapshot(
            function (querySnapshot) {  
                    querySnapshot.forEach(function (doc) {
                        let values = doc.data().mensajes;
                        console.log(values);
                }
            )
            return values;
        })
        
    }

    async writeMesage(mensaje, idUsuario, idPrestador, idEmisor){

        const forUpdate = new FirebaseUpdateRepository();
        let result = await this.getIdChat(idUsuario, idPrestador);  

        let m = {
            "userId" : idEmisor,
            "mensaje" : mensaje,
        };
        
        if(result.length === 0){
            let newChat = {
                "idUsuario" : idUsuario,
                "idPrestador" : idPrestador
            };
            newChat.mensajes = [m];
            return this.firebaseCreateRepository.writeDocument("chats", newChat);

        }

        let mensajesAnteriores = result[1];
        
        mensajesAnteriores.push(m);
        console.log(mensajesAnteriores);
        let update = {
            "mensajes" : mensajesAnteriores
        };

        return forUpdate.updateAttributesDocument("chats",result[0],update);

    }






}