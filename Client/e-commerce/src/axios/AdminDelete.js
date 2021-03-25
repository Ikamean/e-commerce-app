import axios from 'axios';


export const DeleteAllUploads = async () => {
    let res = await axios.delete( 'api/upload/deleteAll');
    return res.data
}

