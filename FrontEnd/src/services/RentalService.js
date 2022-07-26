import axios from "../axios";

class RentalService {
    
    fetchRent = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('rental')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    }

    putRent = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('rental', data)
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
export default new RentalService();