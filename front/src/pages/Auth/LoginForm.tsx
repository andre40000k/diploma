import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../../utils/validationSchemas";
import Button from "../../components/common/Button";

const LoginForm = () => {
  const handleSubmit = (value: any) => {};

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

          <Button type="submit" className="" disabled={isSubmitting}>
            {isSubmitting ? "Entering ..." : "Login"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
