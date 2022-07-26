import axios from "../axios";

class CategoryService {
    postCategory = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('category', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchCategory = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('category')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putCategory = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('category', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteCategory = async (params) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('category', {params: params})
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
export default new CategoryService();