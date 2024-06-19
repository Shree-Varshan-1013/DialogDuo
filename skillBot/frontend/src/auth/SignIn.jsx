
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import userService from '../services/userService';
import { signInSchema } from '../schemas/signIn';
import Swal from 'sweetalert2';
import { addToken, addUser, addUserDetails, toggleLogin } from '../redux/GlobalSlice';
import { useDispatch } from 'react-redux';
import ResetButton from '../redux/ResetButton';

const SignIn = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const initialState = {
        email: "",
        password: ""
    }

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: initialState,
        validationSchema: signInSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventLogin();
            action.resetForm();
        }
    });

    const eventLogin = async () => {
        try {
            const response = await userService.loginUserWithEmailAndPassword(values);
            console.log(response);
            var token = response.data.accessToken;
            var user_email = response.data.email;
            console.log(response.data, token, user_email);

            let timerInterval;
            Swal.fire({
                title: "Successfully LoggedIn !",
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
                dispatch(addUser(user_email));
                dispatch(addUserDetails(response.data));
                dispatch(addToken(token));
                dispatch(toggleLogin(true));
                navigate("/dashboard");
            }, 3000);
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Bad Credentials !",
            });
        }
    }


    return (
        <>
            <section class="overflow-hidden">
                <div class="flex min-overflow-hidden">
                    <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
                        <img class="absolute inset-0 object-cover w-full h-full bg-black" src="/img/sign-in.jpg" alt="" />
                    </div>
                    <div class="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                        <div class="w-full max-w-xl mx-auto lg:w-96">
                            <div>
                                <p class="text-blue-600 text-medium cursor-pointer" onClick={() => navigate("/")}>Dialogduo</p>
                                <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">Sign in.</h2>
                            </div>

                            <div class="mt-8">
                                <div class="mt-6">
                                    <form onSubmit={handleSubmit} method="POST" class="space-y-6">
                                        <div>
                                            <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                            <div class="mt-1">
                                                <input
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                            </div>
                                            {errors.email && touched.email ? (
                                                <p style={{ color: "red" }}>{errors.email}</p>
                                            ) : null}
                                        </div>

                                        <div class="space-y-1">
                                            <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                                            <div class="mt-1">
                                                <input
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                            </div>
                                            {errors.password && touched.password ? (
                                                <p style={{ color: "red" }}>{errors.password}</p>
                                            ) : null}
                                        </div>
                                        <div class="flex items-center justify-start">
                                            <div class="text-sm">
                                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
                                        </div>
                                    </form>
                                    <div class="relative my-4">
                                        <div class="absolute inset-0 flex items-center">
                                            <div class="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div class="relative flex justify-center text-sm">
                                            <span class="px-2 text-neutral-600 bg-white"> Or Don't have an account </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => navigate("/sign-up")} class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                            <div class="flex items-center justify-center">
                                                <span>Sign Up</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn