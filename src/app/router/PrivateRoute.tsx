import AuthSelector from "app/auth/selector";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import {
    IndexRouteProps,
    LayoutRouteProps,
    PathRouteProps,
    Route,
    useNavigate
} from "react-router-dom";

const PrivateRoute = memo((props: PathRouteProps | LayoutRouteProps | IndexRouteProps) => {
    const authenticated = useSelector(AuthSelector.authenticated);
    const navigate      = useNavigate();

    if (!authenticated) {
        navigate('/')
    }

    return <Route {...props}/>
})

export default PrivateRoute