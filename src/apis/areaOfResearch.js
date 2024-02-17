import apiCall from "../utils/apiUtils";

const addAreaOfResearch = async (data)=>{
    console.log("data in AOR post: ",data);
    const response = await apiCall({
        url:"/areaOfResearch/area",
        method:"POST",
        data:data
    });
    return response;
}

const getAllAreaOfResearches = async ()=>{
    const response = await apiCall({
        url:"/areaOfResearch",
        method:"GET",
    });
    return response;
}

const getAreaOfResearchById =async (areaId) =>{
    console.log("Data in getAreaByID: ",areaId);
    const response = await apiCall({
        url:`/areaOfResearch/${areaId}`,
        method:"GET",
    });
    return response;
};

const getAreaOfResearchByName = async (data)=>{
    console.log("Data in getAreaByName: ",data);
    const response =await apiCall({
        url:"/areaOfResearch/areaByName",
        method:"GET",
        data:data
    });
    return response;
};

export {
    addAreaOfResearch,
    getAllAreaOfResearches,
    getAreaOfResearchById,
    getAreaOfResearchByName,
}