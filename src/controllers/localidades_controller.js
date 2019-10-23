import fire from '../config/Fire';



export class LocalidadesController {

    constructor() {
        this.firebaseInstance = fire;
    }




    readLocalidadesyBarrios() {

        let localidades = [];
        return this.firebaseInstance.firestore().collection("localidades").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // console.log(doc.id, ' ',doc.data());
                //console.log("entra");
                let res = {
                    "localidad": doc.id,
                    "barrios": doc.data().barrios
                }

                localidades.push(res);
            });
            return localidades;
        });


    }




}