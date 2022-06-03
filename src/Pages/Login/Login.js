import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onLogInSubmit = (data) => {
        console.log(data);
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
                </div>
            </div>
        </div>
    );
};

export default Login;
