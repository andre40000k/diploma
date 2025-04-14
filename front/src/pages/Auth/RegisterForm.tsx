import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterFormData, registerSchema } from "../../utils/validationSchemas";
import Button from "../../components/common/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registerUser } from "../../store/slices/authSlices/registerSlice";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.regist);
  const handleSubmit = (value: RegisterFormData) => {
    dispatch(registerUser(value));
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label className="">Name</label>
            <Field name="name" type="text" className="" placeholder="Andrii" />
            <ErrorMessage name="name" component="div" className="" />
          </div>
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
            {isLoading ? "Registering ..." : "Sing up"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
