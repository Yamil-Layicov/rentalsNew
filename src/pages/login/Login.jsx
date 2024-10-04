import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Etibarlı e-poçt ünvanını daxil edin")
    .required("E-poçt qeyd olunmalıdır"),
  password: yup.string().required("Şifrə qeyd olunmalıdır"),
});

const initialValues = {
  email: "",
  password: "",
};


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();
  const form = useRef(null);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (
    values,
    actions
  ) => {
    try {
      const response = await axios.post(
        "https://apiicareler.azeraholding.az/api/login",
        values
      );
      setUser(response?.data);
      navigate("binalar");
    } catch (error) {
      toast.error("E-poçt və ya parol səhvdir");
    }
    actions.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: basicSchema,
    onSubmit,
  });

  const {
    handleSubmit,
    errors,
    handleChange,
    touched,
    handleBlur,
    values,
  } = formik;

  return (
    <div className="mainLogin">
      <div className="login">
        <div className="intoLogin">
          <h3>Giriş</h3>
          <form noValidate ref={form} onSubmit={handleSubmit}>
            <label htmlFor="email">E-poçt</label>
            <div className="inputBox">
              <input
                type="email"
                id="email"
                placeholder="E-poçt"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "inputError" : ""}
              />
              {errors.email && touched.email && <small>{errors.email}</small>}
            </div>
            <label htmlFor="password">Şifrə</label>
            <div className="inputBox">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "inputError" : ""
                }
              />
              {errors.password && touched.password && (
                <small>{errors.password}</small>
              )}
              <div className="inputEyes" onClick={handleTogglePassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div className="btnWrapper">
              <button type="submit">Daxil ol</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
