import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


const Auth = () => {
    const [auth, setAuth] = useState(true);
    const location = useLocation();

    // Use useEffect to fetch data and update auth state
    useEffect(() => { 
        console.log("HERE");
        (async () => {
            try {
                
                // read from the response
                const authResponse = await fetch("http://localhost:8080/getAuth", {
                    mode: 'cors',
                    method: "POST"
                });
                
                // console.log(authResponse);
                if(authResponse !== true){
                    setAuth(false);
                    console.log(authResponse.ok);
                }
            } catch (err) {
                console.log('Error occured when fetching login information');
            }
        })();
    }, []); // Empty array as dependency to run effect only once

    return (
        <>
            {auth ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />}
        </>
    )
}

export default Auth;