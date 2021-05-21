import axios from 'axios' ;

const axiosinstance = axios.create({});

axiosinstance.interceptors.request.use((config) => {
    const params = new URLSearchParams();
    params.append('token','fbdfb4ty4t548654t45uth45thuh8yuhg6g68y');
    config.params = params ;
     return config ;
  })

  export default axiosinstance