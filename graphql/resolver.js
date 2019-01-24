import {createLog, getLog, deleteLog} from '../db'

const resolvers = {
    Query:{
        createLog:(_,{source, target, text}) => createLog(source, target, text),
        getLog,
    },
    Mutation:{
        deleteLog:(_,{logId}) => deleteLog(logId)
    }
}

export default resolvers