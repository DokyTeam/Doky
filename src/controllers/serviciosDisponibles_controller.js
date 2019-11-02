

import {FirebaseReadRepository} from '../access_data/firebase_read_repository';




export class ServiciosDispController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
    }


    readServicioGuarderia() {
        let guarderias = [];
        return this.firebaseReadRepository.readGroupCollection("guarderiasusuario").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let id = { "id": doc.id }
                let values = { ...doc.data(), ...id }
                guarderias.push(values);
            });
            return guarderias;
        });
    }

    readServicioPaseo() {
        let paseos = [];
        return this.firebaseReadRepository.readGroupCollection("paseosusuario").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let id = { "id": doc.id }
                let values = { ...doc.data(), ...id }
                paseos.push(values);
            });
            return paseos;
        });
    }

    readServicioVeterinaria() {
        let veterinarias = [];
        return this.firebaseReadRepository.readGroupCollection("veterinariasusuario").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let id = { "id": doc.id }
                let values = { ...doc.data(), ...id }
                veterinarias.push(values);
            });
            return veterinarias;
        });
    }

    readServicioSalto() {
        let saltos = [];
        return this.firebaseReadRepository.readGroupCollection("saltosusuario").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let id = {
                    "id": doc.id,
                }
                let values = { ...doc.data(), ...id }
                saltos.push(values);
            });
            return saltos;
        });
    }



}






