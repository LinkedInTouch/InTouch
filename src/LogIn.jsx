import axios from 'axios';
import React,{useEffect} from 'react';

export default function LogIn() {
    const accessToken = 'AQS0vtZDhj9hwyoOUM0Y5UJYgJuBA3jH_BK8_7SM4n19Qbvge2GStqMbpx96cZwb7YN9sXZLfAScIPoepJzofIh6dAT_zF747ib-HVQCMrM5YnwiU5LtV0wperWlotXl_G5Mp4eDFHwSXGKgrnUxxyYZqZtfhagmEmQukRHChE4AQD7inCtPwyRJZCL_UWRzqqoIwG-Io0SNiMagkEo'
    // const getAccess = async () => {
    //     try{
    //         await axios({
    //             method: "GET",
    //             url: "https://www.linkedin.com/oauth/v2/accessToken",
    //             headers: {
    //                 "Authorization": "Bearer " + accessToken
    //             }
    //         })
    //         .then(data => console.log(data))
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
 
    // }
    // useEffect(() => {
    //     getAccess();
    // },[])
    return (
        <div>
            This is the login page. 
            <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=77l2yl9ia652i4&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi">To signup through LinkedIn Click Here</a>
        </div>
    )
}
