

import React, { createContext,  useEffect,  useState } from 'react'
import featureFlagDataServiceCall from '../flag.data';

export const  FeatureFlagContext = createContext(null);

 function  FeatureFlagGlobalState({children}) {
  const [loading,setLoading] = useState(false)
  const [enabledFlags,setEnabledFlags] = useState({})

async function fetchFeatureFlags() {
  setLoading(true);
  try {
    let data = await featureFlagDataServiceCall();
    setEnabledFlags(data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    // Ye block tab chalta hai jab try khatam ho jaye YA catch khatam ho jaye.
    // Isliye set(false) ko do baar likhne ki zaroorat nahi padti.
    setLoading(false);
  }
}

  useEffect(()=>{
    fetchFeatureFlags()
  },[])
  

  return (
     <FeatureFlagContext.Provider value={{loading,enabledFlags}}>
      {children}
     </FeatureFlagContext.Provider>
  )
}

export default FeatureFlagGlobalState