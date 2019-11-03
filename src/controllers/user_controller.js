import fire from '../config/Fire';
import {FirebaseReadRepository} from '../access_data/firebase_read_repository';
import {FirebaseCreateRepository} from '../access_data/firebase_create_repository';
import {FirebaseUpdateRepository} from '../access_data/firebase_update_repository';



export class UserController {

    constructor() {
        this.firebaseInstance = fire;
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
    }

    //es  necesario que se pase un objeto en lugar del tipo especifico
    createUser(email, tipo) {
        let m;

        
        if (tipo == "Prestador") {
            m = {
                tipo : tipo,
                sumapuntuacion : 0,
                cantidadpuntuacion : 0
            };  
        } else {
            m = {
                tipo : tipo
            };
        }


           return this.firebaseCreateRepository.writeCollectionIdDefined('usuarios',email,m);
    }

    async getTipoUsuario(email) {
        return this.firebaseReadRepository.readCollection("usuarios").doc(email).get().then(
            querySnapshot =>{
                return querySnapshot.data();
            }
        )
    }

    getInfomracionUsuario(email){
        console.log("info user")
        console.log(email)
        return this.firebaseReadRepository.readCollection("usuarios").doc(email).get().then(
            querySnapshot =>{
                console.log(querySnapshot.data())
                return querySnapshot.data();
            }
        )
    }
    
    
    addMascota(email,mascotaInfo){

        return this.firebaseCreateRepository.writeCollectionIdDefined('usuarios/'+ email +"/mascotas/",mascotaInfo.nombre,mascotaInfo);
        
    }



    //recibe el email del usuario y el nuevo valor
    updateStars(email, nuevaPuntuacion){
        return this.firebaseReadRepository.readCollection("usuarios").doc(email).get().then(
            querySnapshot => {
                let sp =querySnapshot.data().sumapuntuacion + nuevaPuntuacion;
                let cp =  querySnapshot.data().cantidadpuntuacion + 1;
                let m = {
                    sumapuntuacion : sp,
                    cantidadpuntuacion : cp
                }
                return this.firebaseUpdateRepository.updateAttributesDocument("usuarios",email,m);
            })
    }

}