import axios from "axios";


// const boardList = function() {
//     return axios.get("/boards")
// }
// 아래와 동일한 내용임
export const boardList = () => axios.get("/boards")
