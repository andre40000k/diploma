import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginFormData, loginSchema } from "../../utils/validationSchemas";
import Button from "../../components/common/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/slices/authSlices/loginSlice"

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.login);
  const handleSubmit = (value: LoginFormData) => {
    dispatch(loginUser(value))
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label className="">Email</label>
            <Field name="email" type="email" className="" placeholder="example@gmail.com" />
            <ErrorMessage name="email" component="div" className="" />
          </div>
          <div>
            <label className="">Password</label>
            <Field name="password" type="password" className="" placeholder="******" />
            <ErrorMessage name="password" component="div" className="" />
          </div>
          
          {error && <div>{typeof error === "string" ? error : error.message}</div>}

          <Button type="submit" className="" disabled={isLoading}>
            {isLoading ? "Entering ..." : "Login"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
