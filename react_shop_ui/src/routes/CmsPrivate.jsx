import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fromStorage, removeStorage } from "../lib/functions"
import cmsHttp from "../http/cmsHttp"
import { setAdmin } from "../store/adminSlice"
import { Navigate } from "react-router-dom"



export const CmsPrivate = ({children})=>{
    const admin=useSelector(state=>state.admin)
    const [loggedIn, setLoggedIn] = useState(true)
    const dispatch = useDispatch();
    useEffect(()=>{
        if(Object.keys(admin).length < 1){
            const token = fromStorage('admin_token')
            if(token==null || token==''){
                setLoggedIn(false);
            }else{
                cmsHttp.get('/cms/user').then(({data})=>{
                    dispatch(setAdmin(data))
                    setLoggedIn(true)
                })
                // .then(resp=>{
                //     dispatch(setAdmin(resp.data))
                //     setLoggedIn(true)
                // })
                .catch(err={
                    removeStorage('admin_token')
                    setLoggedIn(false)
                })
            }
        }
    },[admin])
    return loggedIn ? children : <Navigate to="/cms/login" replace={true}></Navigate>
    return children
}