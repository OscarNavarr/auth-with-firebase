
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';


export const PrivateRoutes = () => {
    const { status} = useSelector( state => state.auth);


    

    console.log("En PrivateRoute.jsx el estatus es:" + status)
    return (

        (status === 'authenticated')
            ?
            <Outlet/>
            :
            <Navigate  to='/authentication/login'/>
  )
}
