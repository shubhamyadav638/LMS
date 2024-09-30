import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,  } from "react-redux";
import { loginThunk } from "../redux/admin.clice";

const Signin = () => {
  const dispatch = useDispatch(() => {});

  let navigate = useNavigate()

  // const result = useSelector((state) => state.admin.user);
  // console.log(result);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handlelogin(e) {
    e.preventDefault();
    if (email && password) {
      const data = { email: email, password: password };
      try {
        await dispatch(loginThunk(data)).unwrap();
        navigate("/dashboard")
      } catch (e) {
        // toast.error(e.message);
      }
   
    } else {
      toast.error("All feilds are required");
    }
  }

  return (
    <center className="p-6 bg-slate-700">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  dark:text-gray-800 shdow-md shadow-white">
        <h2 className="mb-3 text-3xl text-white font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-600 text-white">
          Dont have account?
          <Link
            to="/signup"
            className="focus:underline hover:underline text-white"
          >
            &nbsp; Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-red-800"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
            </svg>
            <p className="text-white">Login with Google</p>
          </button>

          <button
            aria-label="Login with Twitter"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-red-800"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
            </svg>
            <p className="text-white">Login with Twitter</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>

        <form
          method="post"
          action=""
          onSubmit={handlelogin}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm text-white text-start"
              >
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm text-white">
                  Password
                </label>
                <Link className="text-xs hover:underline dark:text-gray-600 text-white">
                  Forgot password?
                </Link>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </center>
  );
};

export default Signin;
