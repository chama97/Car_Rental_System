import axios from "../axios";

class CarService {
    postCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('car', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('car')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    }

    fetchCarId = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('car/id')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    }

    putCar = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('car', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteCar = async (params) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('car', {params: params})
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
export default new CarService();