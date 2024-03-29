import axios from "../axios";

class DriverService {
    postDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('driver', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchDriver = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('driver')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putDriver = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('driver', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteDriver = async (params) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('driver', {params: params})
            .then((res) => {
                return resolve(res)
            }) 
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
}
export default new DriverService();