import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from "../../components/shared/Submit";
import TextField from "../../components/shared/TextField";
import PostRequest from "../../utils/PostRequest";

const Register = () => {
  const [admin, setAdmin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [remember, setRemember] = React.useState(true);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState({});
  const navigate = useNavigate();
  const changeHandler = (field, value) => {
    setData({
      ...data,
      [field]: value.trim(),
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await PostRequest(
      "/register",
      { ...data, level: Number(admin) },
      false
    );
    setLoading(false);
    if (response.success) {
      if (remember) {
        localStorage.setItem("admin", admin);
      }

      navigate("/images");
    } else {
      setError(response.msg);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        bottom: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
          <div className="mb-4">
            <small className="">Create new account</small>
          </div>
          {!!error && (
            <div
              className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              {error}
            </div>
          )}
          <TextField
            field="userName"
            onChange={changeHandler}
            label="Username"
            type="text"
          />
          <TextField
            field="email"
            onChange={changeHandler}
            label="Email"
            type="email"
          />
          <TextField
            field="password"
            onChange={changeHandler}
            label="Password"
            type="password"
          />
          <div className="my-4">
            <label>
              Admin:{" "}
              <input
                type="checkbox"
                onChange={() => setAdmin(!admin)}
                checked={admin}
              />
            </label>
          </div>
          <Submit
            remember={remember}
            loading={loading}
            event="Sign up"
            onChangeRemember={() => setRemember(!remember)}
          />
          <div className="items-center flex flex-col mt-4">
            <small>
              Already have an account?{" "}
              <span>
                <Link to="/" className="text-blue-500 font-bold">
                  Login
                </Link>
              </span>
            </small>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Onfile. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
