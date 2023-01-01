import * as React from "react";
import { FieldValues, useForm } from "react-hook-form";
import "../login/Login.scss";

interface Props {
  // Props are optional, but you can specify types and default values
  onLogin: (email: string, password: string) => void;
}

type SubmitHandler<FormValues> = (
  data: FormValues,
  e?: React.BaseSyntheticEvent
) => void | Promise<void>;

const Login: React.FC<Props> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleFormSubmit: SubmitHandler<FieldValues> = (data, e) => {
    if (data.email === "test@lendsqr.com" && data.password === "password") {
      onLogin(data.email, data.password);
    }
  };

  const password = watch("password");
  return (
    <>
      <form className="login" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="title">
          <h1 className="header">Welcome!</h1>
          <p className="text">Enter details to login.</p>
        </div>
        {/* <label htmlFor="email">Email:</label> */}
        <div className="email-wrapper">
          <input
            type="email"
            id="email"
            className="email-input"
            //   {...register("firstName", { required: true, maxLength: 20 })}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
          />
          {errors.email && <p>This field is required</p>}
        </div>

        {/* <label htmlFor="password">Password:</label> */}
        {/* <div className="password-field"> */}
        <div className="password-wrapper">
          <input
            className="password-input"
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: true,
              minLength: { value: 8, message: "Min length is 8 " },
            })}
            placeholder="Password"
          />
          {errors.password && (
            <p>This field is required and must be at least 8 characters long</p>
          )}
        </div>

        {/* {password && (
          <>
            <label htmlFor="show-password">Show</label>
            <input
              type="checkbox"
              id="show-password"
              name="show-password"
              onChange={() => setShowPassword(!showPassword)}
            />
          </>
        )} */}
        {/* </div> */}

        <button type="submit">LOG IN</button>
      </form>
    </>
  );
};

export default Login;
