import axios from "axios";

const API_URL = axios.create({
    baseURL:"https://openapi.naver.com/v1/papago/n2mt",
    headers:{
        'Content-Type':'application/json',
        'X-Naver-Client-Id':'8csA2ZxOCO0wOk4lKSKO',
        'X-Naver-Client-Secret':'hzPC7h_uvI'
    }
})

const resolvers = {
    Query:{
        translate:async (_,{source, target, text}) => {
            const result = await API_URL.request({
                params:{
                    source,
                    target,
                    text
                }
            })
            console.log(result)
            return result
        }
    }
}

export default resolvers