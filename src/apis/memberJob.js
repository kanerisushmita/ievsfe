import apiCall from "../utils/apiUtils";

const postJob=async(data)=>{
    const response=await apiCall({
        url:"/memberJobPost/postJob",
        method:"POST",
        data:data
    });
    return response;
}

const getAllJobs= async()=>{
    const response= await apiCall({
        url:"/memberJobPost",
        method:"GET",
    });
    return response;
}

export {
    postJob,
    getAllJobs,
}