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
        return this.firebaseReadRepository.readCollection("chats").where("user1","==",idUsuario).where("user2","==",idPrestador).get().then(
            function (querySnapshot) {  
                let result = [];   
                    querySnapshot.forEach(function (doc) {
                        result.push(doc.id);
                        result.push(doc.data().mensajes);
                        console.log(result);
                        return result;
                }
            )
        })
    }



    async getMesages(idUsuario, idPrestador){
        return this.firebaseReadRepository.readCollection("chats").where("user1","==",idUsuario).where("user2","==",idPrestador).get().then(
            function (querySnapshot) {  
                    querySnapshot.forEach(function (doc) {
                        let values = doc.data().mensajes;
                        return values;
                }
            )
        })
    }

    async writeMesage(mensaje, idUsuario, idPrestador, idEmisor){
        const forUpdate = new FirebaseUpdateRepository();
        
        let result = [];   
        this.firebaseReadRepository.readCollection("chats").where("user1","==",idUsuario).where("user2","==",idPrestador).get().then(
            function (querySnapshot) {  
                
                    querySnapshot.forEach(function (doc) {
                        console.log("entra");
                        result = doc.data().mensajes;
                        console.log(result);

                        let m = {
                            "userId" : idEmisor,
                            "mensaje" : mensaje,
                        };
                        
                        let mensajesAnteriores = result;
                        if(result === null){
                            let newChat = {
                                "idUsuario" : idUsuario,
                                "idPrestador" : idPrestador
                            };
                            newChat.mensajes = [];
                            this.firebaseCreateRepository.writeDocument("chats", newChat);
                        }
                        
                        
                        mensajesAnteriores.push(m);
                        console.log(mensajesAnteriores);
                        let update = {
                            "mensajes" : mensajesAnteriores
                        };

                        forUpdate.updateAttributesDocument("chats",doc.id,update);
                    
                        
                }
                
            )
        })

        /*
        let m = {
            "userId" : idEmisor,
            "mensaje" : mensaje,
        };
        
        let mensajesAnteriores = [];
        try{
            mensajesAnteriores = result[1];
        }catch(error){
            let newChat = {
                "idUsuario" : idUsuario,
                "idPrestador" : idPrestador
            };
            newChat.mensajes = [];
            this.firebaseCreateRepository.writeDocument("chats", newChat);
        }

        
        let nuevosMensajes = mensajesAnteriores.push(m);
        let update = {
            "mensajes" : nuevosMensajes
        };

        this.firebaseUpdateRepository.updateAttributesDocument("chats",result[0],update);
        */
    }







}