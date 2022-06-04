import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {};

    return (
        <div className="container mx-auto px-2">
            <h2>Please log in</h2>
            <div className="max-w-[500px] mx-auto py-10 px-2">
                <div className="p-5 bg-white rounded-md border border-gray-700">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Your Name:
                            </label>
                            <input
                                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md block w-full p-2.5  placeholder-secondary/75 text-black  border-secondary"
                                type="text"
                                placeholder="name"
                                {...register("name", {
                                    minLength: 3,
                                    required: true,
                                })}
                            />
                            {errors.name && (
                                <span className="text-rose-600">
                                    Minimum 3 letters
                                </span>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Email:
                            </label>
                            <input
                                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md block w-full p-2.5  placeholder-secondary/75 text-black  border-secondary"
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
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                Password:
                            </label>
                            <input
                                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md   block w-full p-2.5  placeholder-secondary/75  text-black  border-secondary"
                                type="password"
                                placeholder="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                })}
                            />
                            {errors.password?.type === "required" && (
                                <span className="text-rose-600">
                                    Please enter your password
                                </span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="text-rose-600">
                                    At least 6 character.
                                </span>
                            )}
                        </div>
                        {/* <p className="text-rose-600 py-1">
                                {
                                    registerError?.message
                                        .split("auth/")[1]
                                        .split(")")[0]
                                }
                            </p> */}

                        <input
                            className="w-full  px-5 py-2 rounded-md btn btn-primary transition-all"
                            type="submit"
                            value="Register"
                        />

                        <div className="mt-5">
                            <p className="">
                                Already registered?{" "}
                                <button
                                    className="underline text-emerald-400"
                                    onClick={() => {}}
                                >
                                    Click here to login...
                                </button>{" "}
                            </p>
                        </div>
                        <div className="mt-5">
                            <p>
                                Forgot Password?{" "}
                                <Link
                                    className="underline text-emerald-400"
                                    to="/resetpassword"
                                >
                                    Reset Now...
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
