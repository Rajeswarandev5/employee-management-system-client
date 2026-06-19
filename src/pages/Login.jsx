import {
  useForm,
} from "react-hook-form";

import {
  useNavigate,
} from "react-router-dom";

import {
  toast,
} from "react-toastify";

import {
  useAuth,
} from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const navigate =
    useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (
    values
  ) => {
    try {
      await login(
        values.email,
        values.password
      );

      toast.success(
        "Login Successful"
      );

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gray-100
    "
    >
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="
        bg-white
        p-8
        rounded-lg
        shadow-lg
        w-96
      "
      >
        <h2
          className="
          text-2xl
          font-bold
          mb-6
        "
        >
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          {...register(
            "email",
            {
              required:
                "Email required",
            }
          )}
          className="
          w-full
          border
          p-2
          mb-2
        "
        />

        <p className="text-red-500">
          {errors.email?.message}
        </p>

        <input
          type="password"
          placeholder="Password"
          {...register(
            "password",
            {
              required:
                "Password required",
            }
          )}
          className="
          w-full
          border
          p-2
          mb-2
        "
        />

        <p className="text-red-500">
          {
            errors.password
              ?.message
          }
        </p>

        <button
          className="
          w-full
          bg-blue-500
          text-white
          py-2
          rounded
          mt-4
        "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;