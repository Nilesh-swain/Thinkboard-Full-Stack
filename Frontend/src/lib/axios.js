import axious from "axios"

const api = axious.create({
    baseURL : "http://localhost:5001/api"
})

export default api