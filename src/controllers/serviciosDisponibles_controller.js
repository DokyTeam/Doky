

import {FirebaseReadRepository} from '../access_data/firebase_read_repository';
import {FirebaseCreateRepository} from '../access_data/firebase_create_repository';
import {FirebaseUpdateRepository} from '../access_data/firebase_update_repository';




export class ServiciosDispController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
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


    // crea el servicio en la base de datos
    // recibe el email del prestador y el objeto guarderia que incluye:
    // el nombre de la guarderia y los demas atributos.
    writeServicioGuarderia(email, guarderia){
        guarderia.sumapuntuacion = 0;
        guarderia.cantidadpuntuacion = 0;
        return this.firebaseCreateRepository.writeCollectionIdDefined("servicios/guarderia/guarderias/" + email + "/guarderiasusuario/",guarderia.nombre,guarderia);
    }


    writeServicioPaseo(email, paseo){
        paseo.sumapuntuacion = 0;
        paseo.cantidadpuntuacion = 0;
        return this.firebaseCreateRepository.writeCollectionIdDefined("servicios/paseo/paseos/" + email + "/paseosusuario/",paseo.nombre,paseo);
    }


    writeServicioVeterinaria(email, veterinaria){
        veterinaria.sumapuntuacion = 0;
        veterinaria.cantidadpuntuacion = 0;
        return this.firebaseCreateRepository.writeCollectionIdDefined("servicios/veterinaria/veterinarias/" + email + "/veterinariasusuario/",veterinaria.nombre,veterinaria);
    }


    writeServicioSalto(email, salto){
        salto.sumapuntuacion = 0;
        salto.cantidadpuntuacion = 0;
        return this.firebaseCreateRepository.writeCollectionIdDefined("servicios/salto/saltos/" + email + "/saltosusuario/",salto.nombre,salto);
    }


    // recibe el email del prestador que se va a calificar, el tipo de servicio (guarderia, veterinaria, salto, paseo) y el valor de la nueva puntuacion
    updateStars(email, tipoServicio, nombre, nuevaPuntuacion){
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + email + "/" + tipoServicio + "susuario/";
        return this.firebaseReadRepository.readCollection(direccion).doc(nombre).get().then(
            querySnapshot => {
                let sp =querySnapshot.data().sumapuntuacion + nuevaPuntuacion;
                let cp =  querySnapshot.data().cantidadpuntuacion + 1;
                let m = {
                    sumapuntuacion : sp,
                    cantidadpuntuacion : cp
                }
                return this.firebaseUpdateRepository.updateAttributesDocument(direccion,nombre,m);
            })
    }


}






