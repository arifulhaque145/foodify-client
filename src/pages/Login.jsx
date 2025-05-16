import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "../components/shared/GoogleButton";
import LoadingButton from "../components/shared/LoadingButton";
import auth from "../firebase/firebase.init";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { state, setLoading, actionUser } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      actionUser(data.email);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        {!state?.loading ? (
          <button className="btn btn-success w-full" type="submit">
            Login
          </button>
        ) : (
          <LoadingButton />
        )}
      </form>
      <p className="mt-4 text-center text-slate-500">
        Not an account? Please{" "}
        <Link className="underline" to="/register">
          Register
        </Link>
      </p>
      <div className="divider" />
      <p className="mb-4 text-center text-slate-500">Or Login with Google</p>
      {!state?.googleLoading ? <GoogleButton /> : <LoadingButton />}
    </div>
  );
}
