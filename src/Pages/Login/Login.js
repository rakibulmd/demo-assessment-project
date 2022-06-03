import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const onLogInSubmit = (data) => {
        console.log(data);
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };
    return (
        <div className="container mx-auto px-2">
            <h2>Please log in</h2>
            <div className="max-w-[500px] mx-auto py-10 px-2">
                <div className="p-5 bg-white rounded-md border border-gray-700">
                    <form onSubmit={handleSubmit(onLogInSubmit)}>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium"
                            >
                                Email:
                            </label>
                            <input
                                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md block w-full p-2.5  placeholder-black/75 text-black  border-primary"
                                type="email"
                                placeholder="Enter email"
                                autoComplete="off"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-rose-600">
                                    Please enter your email
                                </span>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium"
                            >
                                Password:
                            </label>
                            <input
                                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md   block w-full p-2.5  placeholder-black/75  text-black  border-primary"
                                type="password"
                                placeholder="password"
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            {errors.password && (
                                <span className="text-rose-600">
                                    Please enter your password
                                </span>
                            )}
                        </div>
                        <p className="text-rose-600 py-1"></p>

                        <input
                            className="w-full  px-5 py-2 rounded-md btn btn-primary text-white transition-all"
                            type="submit"
                            value="Log In"
                        />

                        <div className="mt-5">
                            <p>
                                Not registered?{" "}
                                <Link
                                    className="underline text-blue-600"
                                    to="/"
                                >
                                    Click here to register...
                                </Link>{" "}
                            </p>
                        </div>
                        <div className="mt-5">
                            <p>
                                Forgot Password?{" "}
                                <Link
                                    className="underline text-blue-600"
                                    to="/"
                                >
                                    Reset Now...
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                    <div className="flex items-center max-w-[500px] mx-auto py-5">
                        <div className="w-1/2 border-b border-gray-300"></div>
                        <p className="mx-5 pb-1 text-xl">or</p>
                        <div className="w-1/2 border-b border-gray-300"></div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            {/* <p className="text-rose-600 py-1 text-center">
                                {
                                    GoogleError?.message
                                        .split("auth/")[1]
                                        .split(")")[0]
                                }
                            </p> */}
                            <button
                                onClick={handleGoogleSignIn}
                                type="button"
                                className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                            >
                                <svg
                                    className="w-6 h-6 mr-2 -ml-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="google"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 488 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                    ></path>
                                </svg>
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
