import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToken, addUser, addUserDetails, deleteToken, deleteUser, deleteUserDetails, toggleLogin } from '../redux/GlobalSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch(); 


    const navigate = useNavigate();

    const { isLoggedIn } = useSelector(state => state.global);

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
            dispatch(deleteUser());
            dispatch(deleteUserDetails());
            dispatch(deleteToken());
            dispatch(toggleLogin(false));
            navigate("/");
        }, 3000);
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="/img/logo.png" className='w-full lg:w-1/4 md:w-1/2' alt="Logo" onClick={() => navigate('/')} style={{ cursor: "pointer" }} />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            isLoggedIn &&
                            (<><li><a>Resume</a></li>
                                <li><a>Chatbot</a></li></>)
                        }
                        {
                            isLoggedIn === true ?  <li><a onClick={() => logout()}>Logout</a></li> : <li><a onClick={() => navigate("/sign-in")}>Login</a></li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header