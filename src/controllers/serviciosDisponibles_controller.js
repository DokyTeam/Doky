import fire from '../config/Fire';




export class ServiciosDispController {

    constructor(){
        this.firebaseInstance = fire;   
    }


    readServicioGuarderia(){
        let guarderias = [];
        return this.firebaseInstance.firestore().collectionGroup("guarderiasusuario").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) { 
                let id = {"id" : doc.id}
                let values = {...doc.data(),...id}
                guarderias.push(values);
            });
            return guarderias;
        });
    }

    readServicioPaseo(){
        //let path = "servicios/guarderia/guarderias";
        let paseos = [];
        return this.firebaseInstance.firestore().collectionGroup("paseosusuario").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) { 
                    //console.log(doc.id, ' ',doc.data());
                    
                    let res = {
                        "id" : doc.id,
                        "barrio" : doc.data().barrio,
                        "description" : doc.data().descripcion,
                        "horario" : doc.data().horario,
                        "localidad" : doc.data().localidad,
                        "precio" : doc.data().precio,
                        "duracionMax" : doc.data().duracionMax

                    }

                    paseos.push(res);
            });
            return paseos;
        });
    }

    readServicioVeterinaria(){
        let  veterinarias = [];
        return this.firebaseInstance.firestore().collectionGroup("veterinariasusuario").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) { 
                    let res = {"id" : doc.id}
                    let asd = {...doc.data(),...res}
                    veterinarias.push(asd);
            });
            return veterinarias;
        });
    }

    readServicioSalto(){
        //let path = "servicios/guarderia/guarderias";
        let  saltos = [];
        return this.firebaseInstance.firestore().collectionGroup("saltosusuario").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) { 
                    //console.log(doc.id, ' ',doc.data());
                    
                    let res = {
                        "id" : doc.id,
                        "idMascota" : doc.data().idMascota,
                        "barrio" : doc.data().barrio,
                        "description" : doc.data().descripcion,
                        "localidad" : doc.data().localidad,
                        "precio" : doc.data().precio

                    }

                    saltos.push(res);
            });
            return saltos;
        });
    }



}
