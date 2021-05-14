
import { ref } from "@vue/reactivity";
import axios from "axios";

const userdata=ref()
export  function  addusers() {
   axios.get("https://jsonplaceholder.typicode.com/posts").then(
                            (response) => {
                                userdata.value=response.data
                            },
                            (error) => { console.log(error)}
                        )
    return {
        userdata
    }

}
  