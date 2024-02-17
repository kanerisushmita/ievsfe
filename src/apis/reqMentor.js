import apiCall from "../utils/apiUtils";

const reqMentor = async (data)=>{
    const response = await apiCall({
        url:"/reqMentor/req",
        method:"POST",
        data:data
    });
    return response;
};

const getReqById =async (requestId) =>{
    console.log("Data in getReqById: ",requestId);
    const response = await apiCall({
        url:`/reqMentor/${requestId}`,
        method:"GET",
    });
    return response;
};

const updateReq = async (reqId, data, mailOptions) => {
    const response = await apiCall({
      url: `/reqMentor/${reqId}`,
      method: "PUT",
      data: {data,mailOptions},
    });
    return response;
};

const getAllReq = async ()=>{
    const response = await apiCall({
        url:"/reqMentor",
        method:"GET",
    });
    return response;
};

export {
    reqMentor,
    getAllReq,
    updateReq,
    getReqById,
}