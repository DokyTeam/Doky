import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';
import { FirebaseUpdateRepository } from '../access_data/firebase_update_repository';
import { FirebaseAuthRepository } from '../access_data/firebase_auth_repository';
import { FirebaseStorageRespository } from '../access_data/firebase_storage_repository';

//Servicios disp controller
const addImagen = (img, loadImg, error, fullyLoaded,getUserId,getaIdServicio,nombreServicio) => {
    const firebaseStorageRespository = new FirebaseStorageRespository();
    const task = firebaseStorageRespository.storageData(`/Servicios/${nombreServicio}/${getUserId}/${getaIdServicio}`, img);

    task.on('state_changed',
        snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            loadImg(percentage)
        },
        error,
        async () => {
            try {
                let url = await task.snapshot.ref.getDownloadURL();
                fullyLoaded(url)
            } catch (errorCatch) {
                error(errorCatch)
            }
        }
    )
}

export class ServiciosDispController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
        this.firebaseAuthRepository = new FirebaseAuthRepository();
    }

    promedio = (suma, cantidad) => {
        return suma / cantidad
    }

    infoServicio = (doc) => {
        if (doc.exists) {
            const data = doc.data();
            let id = { "id": doc.id }
            let parent = { "usuario": doc.ref.parent.parent.id }
            let cantidad = { puntuacion: this.promedio(data.sumapuntuacion, data.cantidadpuntuacion) }
            return { ...data, ...id, ...parent, ...cantidad }
        } else {
            console.log("No such document!");
        }

    }

    //CONSULTAS SIN FILTROS ##################################################################################################################

    async readServicio(tipoServicio) {
        const infoServicio = this.infoServicio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    const values = infoServicio(doc)
                    servicio.push(values);
                });
                return servicio;
            });
    }


    readServicioGuarderia() {
        return this.readServicio("guarderia");
    }


    readServicioPaseo() {
        return this.readServicio("paseo");
    }


    readServicioVeterinaria() {
        return this.readServicio("veterinaria");
    }


    readServicioSalto() {
        return this.readServicio("salto");
    }

    //Devuelve un arreglo de guarderias ordenadas de mayor a menor puntuacion
    async readServicioFiltroPuntuacion(tipoServicio) {
        return this.readServicio(tipoServicio).then(function (servicio) {
            function comparar(a, b) { return b.puntuacion - a.puntuacion; }
            return servicio.sort(comparar);
        });
    }


    readServicioGuarderiaFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("guarderia");
    }

    readServicioPaseoFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("paseo");
    }

    readServicioVeterinariaFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("veterinaria");
    }

    readServicioSaltoFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("salto");
    }

    //Devuelve un arreglo de guarderias ordenadas de menor a mayor dentro de un rango de precio
    async readServicioFiltroPrecio(precioMin, precioMax, tipoServicio) {
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('precio', '>=', precioMin).where('precio', '<=', precioMax).orderBy('precio').get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;

            });
    }

    readServicioGuarderiaFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "guarderia");
    }

    readServicioPaseoFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "paseo");
    }

    readServicioVeterinariaFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "veterinaria");
    }

    readServicioSaltoFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "salto");
    }

    //Devuelve un arreglo de guarderias cuyo atributo 'localidad' == localidad
    async readServicioFiltroLocalidad(localidad, tipoServicio) {
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('localidad', '==', localidad).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;

            });
    }


    readServicioGuarderiaFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }

    readServicioPaseoFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "paseo");
    }

    readServicioVeterinarioFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "veterinaria");
    }

    readServicioSaltoFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }

    //Devuelve un arreglo de guarderias cuyo atributo 'barrio' == barrio
    readServicioFiltroBarrio(barrio, tipoServicio) {
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('barrio', '==', barrio).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;

            });
    }

    readServicioGuarderiaFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "guarderia");
    }

    readServicioPaseoFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "paseo");
    }

    readServicioVeterinariaFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "veterinaria");
    }

    readServicioSaltoFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "salto");
    }

    // crea el servicio en la base de datos
    // recibe el email del prestador y el objeto guarderia que incluye:
    // el nombre de la guarderia y los demas atributos.
    writeServicio(email, tipoServicio, servicio) {
        servicio.sumapuntuacion = 0;
        servicio.cantidadpuntuacion = 0;
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + email + "/" + tipoServicio + "susuario/";
        return this.firebaseCreateRepository.writeCollectionIdDefined(direccion, servicio.nombre, servicio);
    }

    //Para TODAS las fuciones
    //-img: Imagen que se va a enviar tipo file
    //-loadImg: Una funcion que se ejecuta al cargar la imagen
    //-error: Una fucnion que se ejecuta al ocurrir un error
    //-fullyLoaded: Una funcion que se ejecuta al cargar la imagen

    async fullServicio(servicio,img, loadImg, error, fullyLoaded,addImagen,nombreServicio){
        try{
            const idUser = this.firebaseAuthRepository.getUserId();
            await this.writeServicio(idUser, nombreServicio, servicio);
            addImagen(img, loadImg, error, fullyLoaded,idUser,servicio.nombre)
        }catch(errorCatch){
            console.log(errorCatch)
        }
    }

    writeServicioGuarderia(guarderia,img, loadImg, error, fullyLoaded) {
        this.fullServicio(guarderia,img, loadImg, error, fullyLoaded,this.addImagenGuarderia,"guarderia")
    }

    writeServicioPaseo(paseo,img, loadImg, error, fullyLoaded) {
        this.fullServicio(paseo,img, loadImg, error, fullyLoaded,this.addImagenPaseo,"paseo")
    }

    writeServicioVeterinaria(veterinaria,img, loadImg, error, fullyLoaded) {
        this.fullServicio(veterinaria,img, loadImg, error, fullyLoaded,this.addImagenVeterinaria,"veterinaria")
    }

    writeServicioSalto(salto,img, loadImg, error, fullyLoaded) {
        this.fullServicio(salto,img, loadImg, error, fullyLoaded,this.addImagenSalto,"salto")
    }

    // recibe el email del prestador que se va a calificar, el tipo de servicio (guarderia, veterinaria, salto, paseo) y el valor de la nueva puntuacion
    async updateStars(email, tipoServicio, nombre, nuevaPuntuacion) {
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + email + "/" + tipoServicio + "susuario/";
        return this.firebaseReadRepository.readCollection(direccion).doc(nombre).get().then(
            querySnapshot => {
                let sp = querySnapshot.data().sumapuntuacion + nuevaPuntuacion;
                let cp = querySnapshot.data().cantidadpuntuacion + 1;
                let m = {
                    sumapuntuacion: sp,
                    cantidadpuntuacion: cp
                }
                return this.firebaseUpdateRepository.updateAttributesDocument(direccion, nombre, m);
            })
    }

    updateStarsGuarderia(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "guarderia", idDoc, nuevaPuntuacion);
    }

    updateStarsPaseo(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "paseo", idDoc, nuevaPuntuacion);
    }

    updateStarsVeterinaria(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "veterinaria", idDoc, nuevaPuntuacion);
    }

    updateStarsSalto(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "salto", idDoc, nuevaPuntuacion);
    }

    //Get info servicios
    async serviciosFullInfo(servicio, userId, servicioId) {
        const search = 'servicios/' + servicio + '/' + servicio + 's/' +userId+'/'+ servicio + 'susuario/' + servicioId;
        return this.firebaseReadRepository.readDocument(search).get().then(
            querySnapshot => {
                return this.infoServicio(querySnapshot)
            }
        )
    }

    readSaltosFullInfo(userId, saltoId) {
        return this.serviciosFullInfo('salto', userId, saltoId);
    }

    readPasesosFullInfo(userId, idPaseo) {
        return this.serviciosFullInfo('paseo', userId, idPaseo);
    }

    readVeterinariaFullInfo(userId, idVeterinaria) {
        return this.serviciosFullInfo('veterinaria', userId, idVeterinaria);
    }

    readGuarderiaFullInfo(userId, idGuarderia) {
        return this.serviciosFullInfo('guarderia', userId, idGuarderia);
    }


    //Add imagen a los servicios
    
    //Para TODAS las fuciones
    //Reciben 4 parametros:
    //-imagen que se va a enviar tipo file
    //-una funcion que se ejecuta al cargar la imagen
    //-una fucnion que se ejecuta al ocurrir un error
    //-una funcion que se ejecuta al cargar la imagen

    addImagenPaseo(img, loadImg, error, fullyLoaded,idUser,idPaseo){
        return addImagen(img, loadImg, error, fullyLoaded,idUser,idPaseo,"Paseos")
    }

    addImagenGuarderia(img, loadImg, error, fullyLoaded,idUser,idGuarderia){
        return addImagen(img, loadImg, error, fullyLoaded,idUser,idGuarderia,"Guarderias")
    }

    addImagenSalto(img, loadImg, error, fullyLoaded,idUser,idSalto){
        return addImagen(img, loadImg, error, fullyLoaded,idUser,idSalto,"Saltos")
    }

    addImagenVeterinaria(img, loadImg, error, fullyLoaded,idUser,idVeterinaria){
        return addImagen(img, loadImg, error, fullyLoaded,idUser,idVeterinaria,"Veterinarias")
    }

}