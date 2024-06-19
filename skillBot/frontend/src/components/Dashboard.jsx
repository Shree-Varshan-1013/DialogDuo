import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import Layout from './Layout';
import { addToken, addUser, addUserDetails, toggleLogin } from '../redux/GlobalSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("Home");

    const toggleMenu = () => {
        setOpen(!open);
    }

    const setCurrentPageFunction = (page) => {
        setCurrentPage(page);
    }

    const logout = () => {
        let timerInterval;
        Swal.fire({
            title: "Logging you out !",
            html: "Redirecting in <b></b> milliseconds.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        setTimeout(() => {
            dispatch(addUser(null));
            dispatch(addUserDetails(null));
            dispatch(addToken(null));
            dispatch(toggleLogin(false));
            navigate("/");
        }, 3000);
    }

    return (
        <div className='relative grid grid-cols-1 lg:grid-cols-2'>
            <header className='flex lg:hidden justify-center flex-col'>
                <div className='flex justify-between select-none'>
                    <div className='p-3'>
                        <TfiMenu onClick={toggleMenu} fontSize={32} className={`${open ? 'hidden' : 'block'}`} />
                        <IoClose onClick={toggleMenu} fontSize={32} className={`${open ? 'block' : 'hidden'}`} />
                    </div>
                    <div className='flex justify-end select-none'>
                        <img src="/img/logo.png" className='w-1/2' />
                    </div>
                </div>
                <div className={`w-full ${open ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in shadow-xl`}>
                    <div className='p-4 bg-slate-200 w-full z-50 select-none'>
                        <ul>
                            <li className='p-4 border-b cursor-pointer' onClick={() => setCurrentPageFunction("Home")}>Dashboard</li>
                            <li className='p-4 border-b cursor-pointer' onClick={() => setCurrentPageFunction("Profile")}>Profile</li>
                            <li className='p-4 border-b cursor-pointer' onClick={() => setCurrentPageFunction("Resume")}>Resume</li>
                            <li className='p-4 border-b cursor-pointer' onClick={() => logout()}>Logout</li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="sm:absolute w-64 hidden lg:block h-screen bg-slate-200 shadow-md select-none">
                <ul>
                    <li className='border-b cursor-pointer' onClick={() => navigate("/")}><img src="/img/logo.png" className='w-72' /></li>
                    <li className="p-4 border-b cursor-pointer" onClick={() => setCurrentPageFunction("Home")}>Dashboard</li>
                    <li className="p-4 border-b cursor-pointer" onClick={() => setCurrentPageFunction("Profile")}>Profile</li>
                    <li className="p-4 border-b cursor-pointer" onClick={() => setCurrentPageFunction("Resume")}>Resume</li>
                    <li className="p-4 border-b cursor-pointer" onClick={() => logout()}>Logout</li>
                </ul>
            </div>
            <div className='absolute -z-50'>
                <Layout link={currentPage} />
            </div>
        </div>
    );
}

export default Dashboard;
