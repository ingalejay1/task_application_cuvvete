import React from 'react';
import { USER_API_END_POINT } from '../../utils/constant';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import axios from "axios";
import '../Styles/LogoutPopup.css';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setShowLogoutPopup, setUser }) => {
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                setUser(null);
                localStorage.removeItem('user');
                navigate("/");
                toast.success(res.data.message);
                console.log("Logged out successfully.");
                setShowLogoutPopup(false); 
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed.");
        }
    };

    return (
        <div className='logoutPopupCon'>
            <div className='logoutPopup'>
                <p>Are you sure you want to Logout?</p>
                <button className='logoutPopupBtn' onClick={logoutHandler}>Yes, Logout</button>
                <button className='hideLogoutBtn' onClick={() => setShowLogoutPopup(false)}>Cancel</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Logout;
