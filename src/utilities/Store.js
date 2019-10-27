export const useStore = (
    () => {
        let storeInstance;
        let subs = [];
        const createStoreInstance = () =>{
            let store = '';
            
            const getStore = () =>{
                return store;
            }
            const setStore = (newStore) =>{
                store = newStore;
                subs.forEach(
                    fx => fx()
                );
                return store;
            }

            const subscribe = (fx) => {
                subs.push(fx)
            }

            const unsuscribe = (fx) => {
                let index =  subs.indexOf(fx);
                subs.splice(index, 1)
            }

            return [getStore,setStore];
        }


        return () =>{
            if(!storeInstance){
                storeInstance = createStoreInstance()
            }
            return storeInstance
        }

    })()