import axios from "axios";

let translateLog = []

const baseURL = "https://openapi.naver.com/v1/papago/n2mt"

const API_URL = axios.create({
    baseURL,
    headers:{
        'Content-Type':'application/json',
        'X-Naver-Client-Id':'8csA2ZxOCO0wOk4lKSKO',
        'X-Naver-Client-Secret':'hzPC7h_uvI'
    },
    method:'post'
})

export const createLog = async (source, target, text) => {
    const { 
        data: {
            message: {
                result : {
                    translatedText
                }
            }
        } 
    } = await API_URL.request({
        data:{
            source,
            target,
            text
        }
    })

    const data = {
        id:translateLog.length+1,
        sourceSentence:text,
        targetSentence:translatedText
    }

    translateLog.push(data)
    console.log(translateLog)
    return data
}

export const getLog = async () => {
    return translateLog
}

export const deleteLog = async (id) => {
    const filteredLog = translateLog.filter(log => log.id == id)
    const result = translateLog.filter(log => log.id !== id)
    translateLog = result

    return filteredLog[0]
}