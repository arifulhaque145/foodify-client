import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "../components/shared/GoogleButton";
import LoadingButton from "../components/shared/LoadingButton";
import auth from "../firebase/firebase.init";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { state, actionUser } = useAuth();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(userCredential.user, { displayName: data.name });
      await axiosPublic.post("/users/register", data);
      actionUser(data);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <div className="p-12 mt-36 max-w-md mx-auto border border-gray-400 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-12 text-center">
        Create an account
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          {...register("password", {
            required: "Password is required",
            minLength: 6,
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        {!state?.loading ? (
          <button className="btn btn-error text-white w-full" type="submit">
            Register Now
          </button>
        ) : (
          <LoadingButton />
        )}
      </form>
      <p className="mt-4 text-center text-slate-500">
        Already have an account? Please{" "}
        <Link className="underline" to="/login">
          Login
        </Link>
      </p>
      <div className="divider" />
      <p className="mb-4 text-center text-slate-500">Or</p>
      {!state?.googleLoading ? <GoogleButton /> : <LoadingButton />}
    </div>
  );
}
