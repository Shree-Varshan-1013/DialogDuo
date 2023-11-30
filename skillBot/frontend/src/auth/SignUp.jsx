import React from 'react'
import { useFormik } from 'formik';
import userService from '../services/userService';
import { signUpSchema } from '../schemas/signUp';
import Swal from 'sweetalert2';
import "../styles/Signin.css"
import { useNavigate } from 'react-router-dom';

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
      <div className='signin'>
        <div className="signin-card">
          <div className="signin-cardtext">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className='input-box'>
                <input
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username" />
                {errors.username && touched.username ? (
                  <p style={{ color: "red" }}>{errors.username}</p>
                ) : null}
              </div>
              <div className='input-box'>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email" />
                {errors.email && touched.email ? (
                  <p style={{ color: "red" }}>{errors.email}</p>
                ) : null}
              </div>
              <div className='input-box'>
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password" />
                {errors.password && touched.password ? (
                  <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}
              </div>
              <div className='input-box'>
                <input
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  id="confirmpasword"
                  name="confirmpassword"
                  placeholder="Confirm Password" />
                {errors.confirmpassword && touched.confirmpassword ? (
                  <p style={{ color: "red" }}>{errors.confirmpassword}</p>
                ) : null}
              </div>
              <div className='signin-buttons'>
                <button type="submit" className='button-5'>SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp