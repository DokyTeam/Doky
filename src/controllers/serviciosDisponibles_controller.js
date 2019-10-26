import fire from '../config/Fire';




export class ServiciosDispController {

    constructor() {
        this.firebaseInstance = fire;
    }


    readServicioGuarderia() {
        let guarderias = [];
        return this.firebaseInstance.firestore().collectionGroup("guarderiasusuario").get().then(function (querySnapshot) {
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
        return this.firebaseInstance.firestore().collectionGroup("paseosusuario").get().then(function (querySnapshot) {
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
        return this.firebaseInstance.firestore().collectionGroup("veterinariasusuario").get().then(function (querySnapshot) {
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
        return this.firebaseInstance.firestore().collectionGroup("saltosusuario").get().then(function (querySnapshot) {
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
