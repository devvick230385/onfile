import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Submit from "../../components/shared/Submit";
import TextField from "../../components/shared/TextField";
import PostRequest from "../../utils/PostRequest";

const Login = () => {
  const [remember, setRemember] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState({});
  const navigate = useNavigate();

  // INPUT CHANGE HANDLER
  const changeHandler = (field, value) => {
    setData({
      ...data,
      [field]: value.trim(),
    });
  };

  // LOGIN IN USER AUTOMATICALLY IF THERE IS LOCALSTORAGE
  React.useEffect(() => {
    if (localStorage.getItem("admin")) {
      navigate("/images");
    }
  }, []);

  // SUBMIT USER DATA
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await PostRequest("/login", data, false);
    setLoading(false);
    if (response.success) {
      if (remember) {
        localStorage.setItem("admin", Boolean(response.data[0].level));
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
          onSubmit={submitHandler}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <small className="">Sign in to an account</small>
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
            field="userIdentifier"
            onChange={changeHandler}
            label="Username or Email"
            type="text"
          />
          <TextField
            field="password"
            onChange={changeHandler}
            label="Password"
            type="password"
          />

          <Submit
            remember={remember}
            loading={loading}
            event="Sign up"
            onChangeRemember={() => setRemember(!remember)}
          />
          <div className="items-center flex flex-col mt-4">
            <small>
              Don't have an account?{" "}
              <span>
                <Link to="/register" className="text-blue-500 font-bold">
                  Register
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

export default Login;
