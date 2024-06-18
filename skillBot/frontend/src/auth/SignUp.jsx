import React from 'react'
import { useFormik } from 'formik';
import userService from '../services/userService';
import { signUpSchema } from '../schemas/signUp';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: initialState,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      eventSignUp();
      action.resetForm();
    }
  });

  const eventSignUp = async () => {
    try {
      const response = await userService.saveUser(values);
      console.log(response);
      var token = response.data.accessToken;
      var user_email = response.data.email;
      console.log(response.data);

      let timerInterval;
      Swal.fire({
        title: "Successfully Registered !",
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
      });

      setTimeout(() => {
        // dispatch(addUser(user_email));
        // dispatch(addColor(color));
        // dispatch(addToken(token));
        navigate("/sign-in");
      }, 3000);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong !",
      });
    }
  }

  return (
    <div>
      <section class="overflow-hidden">
        <div class="flex min-overflow-hidden">
          <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img class="absolute inset-0 object-cover w-full h-full bg-black" src="/img/sign-in.jpg" alt="" />
          </div>
          <div class="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <p class="text-blue-600 text-medium cursor-pointer" onClick={() => navigate("/")}>Dialogduo</p>
                <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">Sign up.</h2>
              </div>
              <div class="mt-8">
                <div class="mt-6">
                  <form onSubmit={handleSubmit} method="POST" class="space-y-6">
                    <div>
                      <label for="username" class="block text-sm font-medium text-neutral-600"> Username </label>
                      <div class="mt-1">
                        <input
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          id="username"
                          name="username"
                          autocomplete="email" required="" placeholder="Your username" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                      </div>
                      {errors.username && touched.username ? (
                        <p style={{ color: "red" }}>{errors.username}</p>
                      ) : null}
                    </div>
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
                    <div class="space-y-1">
                      <label for="confirmpassword" class="block text-sm font-medium text-neutral-600">Confirm Password </label>
                      <div class="mt-1">
                        <input
                          value={values.confirmpassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="password"
                          id="confirmpassword"
                          name="confirmpassword"
                          autocomplete="current-password" required="" placeholder="Confirm Password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                      </div>
                      {errors.confirmpassword && touched.confirmpassword ? (
                        <p style={{ color: "red" }}>{errors.confirmpassword}</p>
                      ) : null}
                    </div>
                    <div class="flex items-center justify-start">
                      <div class="text-sm">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                      </div>
                    </div>
                    <div>
                      <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
                    </div>
                  </form>
                  <div class="relative my-4">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 text-neutral-600 bg-white"> Or Already have an account </span>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => navigate("/sign-in")} class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      <div class="flex items-center justify-center">
                        <span>Sign in</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp