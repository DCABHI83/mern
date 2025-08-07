import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
export const Authcontext = createContext()

export const Authprovider =  ({children})=>{
const [token,setToken] = useState(localStorage.getItem("token"))
const [user,setUser] = useState("")
const [servicedata,setServiceData] = useState([])
const authorizationToken = `Bearer ${token}`
    const storeTokenLocally = (serverToken)=>{
      setToken(serverToken)
     return localStorage.setItem("token",serverToken)
    }
let isLoggedIn = !!token
    const LogoutUser = ()=>{
      setToken("")
      return localStorage.removeItem("token")
    }
const userAUthentication = async ()=>{
   try {
     const res = await fetch("http://localhost:4000/api/v1/user",{
        headers:{
         Authorization :authorizationToken
        }
     })
 
     const data =await res.json()
     setUser(data)
 
   } catch (error) {
      console.log('error while getting the data : ', error)
   }
}


    useEffect(()=>{
        userAUthentication()
    },[token])


    //fetching services data
const fetchData =async ()=>{
  try {
    const res= await fetch("http://localhost:4000/api/v1/service",{
      method:"GET"
    })

    const data =await res.json()

  if(res.ok){
setServiceData(data.msg)
  }
  } catch (error) {
    console.log("error while fetching the data : ",error)
  }
}

useEffect(()=>{
  fetchData()
},[])

  return <Authcontext.Provider value={{storeTokenLocally,LogoutUser,isLoggedIn,user,servicedata,authorizationToken}}>{children}</Authcontext.Provider>
}

export const useAuth = ()=>{
    const authContextValue = useContext(Authcontext)
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue
}