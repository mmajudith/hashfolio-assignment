export default function records(state = [], action){
    switch(action.type){
        case 'GET_RECORDS':
            return action.records;
        default:
            return state;
    }
}