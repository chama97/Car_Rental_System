import axios from "../axios";

class ScheduleService {
    postSchedule = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('schedule', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchSchedule = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('schedule')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putSchedule = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('schedule', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteSchedule = async (params) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('schedule', {params: params})
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
export default new ScheduleService();