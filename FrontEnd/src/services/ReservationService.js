import axios from "../axios";

class ReservationService {
    postRes = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('reservation', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchRes = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('reservation')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    }

    fetchResId = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('reservation/GenerateReservationID')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    }

    // fetchResId = async () => {
    //     const promise = new Promise((resolve, reject) => {
    //         axios.get('car/id')
    //             .then((res) => {
    //                 return resolve(res)
    //             })
    //             .catch((er) => {
    //                 return resolve(er)
    //             })
    //     })
    //     return await promise;
    // }

    putRes = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('reservation', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteRes = async (params) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('reservation', {params: params})
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
export default new ReservationService();