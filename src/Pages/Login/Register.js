import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [
        createUserWithEmailAndPassword,
        registerUser,
        registerLoading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };
    useEffect(() => {
        if (registerUser) {
            navigate("/home");
        }
    }, [navigate, registerUser]);
    return (
        <div className="container mx-auto px-2">
            <h2>Please log in</h2>
            <div className="max-w-[500px] mx-auto py-10 px-2">
                <div className="p-5 bg-white rounded-md border border-gray-700">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium"
                            >
                                Your Name:
                            </label>
                            <input
                                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md block w-full p-2.5  placeholder-black/75 text-black  border-primary"
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
                                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md block w-full p-2.5  placeholder-black/75 text-black  border-primary"
                                type="password"
                                placeholder="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                })}
                            />
                            {errors.password?.type === "required" && (
                                <span className="text-rose-600">
                                    Please enter password
                                </span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="text-rose-600">
                                    At least 6 character.
                                </span>
                            )}
                        </div>
                        <p className="text-rose-600 py-1">
                            {
                                registerError?.message
                                    .split("auth/")[1]
                                    .split(")")[0]
                            }
                        </p>

                        {registerLoading ? (
                            <button class="btn loading w-full">loading</button>
                        ) : (
                            <input
                                className="w-full  px-5 py-2 rounded-md btn btn-primary transition-all"
                                type="submit"
                                value="Register"
                            />
                        )}

                        <div className="mt-5">
                            <p className="">
                                Already registered?{" "}
                                <Link
                                    to="/login"
                                    className="underline text-blue-600"
                                >
                                    Click here to login...
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
