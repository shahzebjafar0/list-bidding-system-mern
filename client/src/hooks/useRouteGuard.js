import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function useRouteGuard({ path }) {
    const navigate = useNavigate();
    const user = localStorage.getItem("token");

    useEffect(() => {
        if (!user) {
            navigate("/sign-in");
        } else if (path === "sign-in" || path === "sign-up") {
            navigate("/")
        }
    }, [navigate, user]);
}

export default useRouteGuard;
