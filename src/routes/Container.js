import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthenticationContext } from "../context/authenticationContext";
import useLocalStorage from "../hooks/useLocalStorage";
import AppNotification from "utils/appNotification";

function ContainerApp() {
    const hasToken = useSelector((state) => state.auth?.token);
    const authStorage = useLocalStorage((storage) => storage.authStorage);

    const cachedUserIsAuthenticated = useMemo(() => {
        const userIsAuthenticated =
            Boolean(hasToken) || authStorage?.isAuthenticated;

        return userIsAuthenticated;
    }, [hasToken, authStorage?.isAuthenticated]);

    console.log(
        "User Authenticated:: %s -- %s",
        Boolean(hasToken),
        authStorage?.isAuthenticated
    );

    return (
        <AuthenticationContext.Provider
            value={{ userIsAuthenticated: cachedUserIsAuthenticated }}
        >
            <div>
                <Outlet/>
            </div>
        </AuthenticationContext.Provider>
    );
}

export default ContainerApp;