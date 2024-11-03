// src/utils/logout.js
import axios from 'axios';
import { USER_API_END_POINT } from './utils/constant';
import { toast } from 'react-toastify';

export const logoutUser = async (setUser, navigate, setShowLogout) => {
    try {
        const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });

        if (res.data.success) {
            setUser(null);
            localStorage.removeItem('user');
            navigate("/"); // Redirect to the home page or login page
            toast.success(res.data.message);
            if (setShowLogout) setShowLogout(false);
        }
    } catch (error) {
        console.error("Logout error:", error);
        toast.error(error?.response?.data?.message || "An error occurred during logout");
    }
};
