import axios from 'axios';

const API_KEY = 'wximaton6zjynak9b'
const Base_URL = 'https://techhk.aoscdn.com/'
const MAXIMUM_RETRIES=20;
export const  enhancedImageAPI = async (file)=>{
    try {
       
   const taskId = await uploadImage(file)

      console.log(`image uploaded (TaskID): ${taskId} `)

   const enhancedImgData = await PollForEnhancedImage(taskId)

       console.log('enhancedData :',enhancedImgData)
    return enhancedImgData;    

    } 
    
    catch (error) {
         alert(`Error enhanching image : ${error.message}`)
    }
};


const uploadImage = async (file)=>{
     // uploade the img
     // /api/tasks/visual/scale -post
       const formData = new FormData();   // Creates empty FormData object -------- sets Content-Type: multipart/form-data[2][7
             formData.append('image_file',file); // Adds file to 'image_file' field
      
   const {data} =   await axios.post(`${Base_URL}/api/tasks/visual/scale`,formData,{
        headers : {
           'Content-Type': 'multipart/form-data', // content is not text data thats why not writen
           'X-API-KEY' : API_KEY,
        }
      })      
      //Axios responses contain properties like data, status, headers, etc. The data property holds the server's response body  
      //const {data} extracts the data property directly from the response object, equivalent to:  ---1--- const response = await axios.post(...); ---2---const data = response.data;
      
      if(!data?.data?.task_id){
        throw new Error('Failed to upload image! Task ID not found.')
      }

      console.log(data)
     return data.data.task_id;
};

const fetchedEnhancedImage = async (taskId) => {
       // get enhanced img
      // /api/tasks/visual/scale/{task_id} --get
      const {data} =   await axios.get(
                     `${Base_URL}/api/tasks/visual/scale/${taskId}`,{
                     headers : {
                               'X-API-KEY' : API_KEY,
                               }
      })  
    //   console.log(data.data.image)
    if(!data?.data){
        throw new Error('Failed to fetch enhanced image! Image not found.')
    }
    return data.data;
}

//calling untill state 5 don't reach because  the upper code exicute fastly when enhancer is still on the work
const PollForEnhancedImage = async (taskId , retries =0) =>{
    const result = await fetchedEnhancedImage(taskId)

    if (result.status === 4) {
        console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`)
        
         if(retries>=MAXIMUM_RETRIES){
            throw new Error('Max retires reached. Please try again learn.')
         }

         //waite for2 sec
         await new Promise((resolve) => setTimeout(resolve,2000));

         return PollForEnhancedImage(taskId, retries+1)
 
        }

        console.log('Enhanced Image URL :',result);
        return result;
}

 



/*
data: {task_id: '92b2683d-5996-43e8-a868-74ad6da73962'}
message: "success"
status: 200
*/