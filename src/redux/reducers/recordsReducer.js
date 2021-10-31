export default function records(records = [], action){
    switch(action.type){
        case 'GET_RECORDS':
            return action.records;
        default:
            return records;
    }
}