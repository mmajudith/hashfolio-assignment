import { basketRecords } from '../../sample'

export const getRecords = () => {
    return { type: "GET_RECORDS", records: basketRecords}
}