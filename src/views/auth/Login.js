import React, { useState } from "react";
//import { login } from "Services/AuthService";
//import { alertService } from "Services/alertservice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "Services";


function Login() {
  const dispatch = useDispatch();
  const loginLoading = useSelector(({ auth }) => auth.user_loading);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Username est obligatoire").min(6, "Username doit contient ou moins 6 caractères"),
      password: Yup.string().required("Mot de passe est obligatoire").min(6, "Mot de passe doit contient ou moins 6 caractères")
    }),
    onSubmit: (data, actions) => {
      //console.log(formik);
      //console.log(data);
      //alert(data.username);
      //navigate("/admin");
      console.log("-----------------");
      /*setError(null);
      setLoading(true);
      login(data.username.toString(), data.password.toString())
        .then(() => {
          setLoading(false);
          
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.status === 401) {
            setError(error.response.data.message);
          }
          else setError(error.response.data.message);
          //setSubmitting(false);
          //alertService.error(error);
        });*/
      function alterFormToAPIResult(error, success) {
        if (error) {
          actions.setFieldTouched("password", false);
          actions.setFieldValue("password", "");
        }
      }
      dispatch(login(data, alterFormToAPIResult));
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-5">
                  <img
                    alt="..."
                    src={require("assets/img/Matuass.png")}
                    className=" border-none max-w-150-px img-login"
                  />
                </div>
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-600 text-xv font-semibold">
                    Vous devez connectez pour accéder à la page d'accueil 
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-500 text-xv font-semibold mb-2"
                      htmlFor="email"
                    >
                      Username
                    </label>
                    <input
                      //{...username}
                      id="email"
                      name="email"
                      type="text"
                      className="border border-color-input-login auth px-3 placeholder-blueGray-300 rounded-lg text-sm w-full"
                      placeholder="Username"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      defaultValue={formik.values.username}
                    />
                    {formik.touched.username && formik.errors && formik.errors.username && (
                      <div>
                        <>
                          <small style={{ color: "red" }}>{formik.errors.username}</small>
                          <br />
                        </>
                      </div>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-500 text-xv font-semibold mb-2"
                      htmlFor="password"
                    >
                      Mot de passe
                    </label>
                    <input
                      //{...password}
                      id="password"
                      name="password"
                      type="password"
                      className="border border-color-input-login auth px-3 placeholder-blueGray-300 rounded-lg text-sm w-full"
                      placeholder="Mot de passe"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      defaultValue={formik.values.password}
                    />
                    {formik.touched.password&& formik.errors && formik.errors.password && (
                      <div>
                        <>
                          <small style={{ color: "red" }}>{formik.errors.password}</small>
                          <br />
                        </>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer mt-1">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-xv font-semibold text-blueGray-600">
                        Sauvegarder le mot de passe
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <div className="w-full px-1">
                      <div className="relative  mb-3">
                        <button
                          value={loading ? "Connexion..." : "Connexion"}
                          //onClick={onSubmit}
                          //disabled={loading}
                          type="submit"
                          className="btn-login bg-blueGray-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-7 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          Connexion
                        </button>
                      </div>
                    </div>
                  </div>
                  {error && (
                    <div className="text-center">
                      <>
                        <small style={{ color: "red" }}>{error}</small>
                        <br />
                      </>
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-500"
                >
                  <small>Mot de passe oublié ?</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
