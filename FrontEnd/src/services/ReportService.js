import axios from "../axios";

class ReportService {
    postReport = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('report', data)   
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchReport = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('report')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

   
}
export default new ReportService();