import axios,{CanceledError} from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"04b81be2f3a0494992e840d74b32712a"
    },
    headers:{},
})
export {CanceledError};