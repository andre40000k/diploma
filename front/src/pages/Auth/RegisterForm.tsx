import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "../../utils/validationSchemas";
import Button from "../../components/common/Button";

const RegisterForm = () => {
  const handleSubmit = (value: any) => {};

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
            <Field name="username" type="text" className="" placeholder="Andrii" />
            <ErrorMessage name="username" component="div" className="" />
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

          <Button type="submit" className="" disabled={isSubmitting}>
            {isSubmitting ? "Registering ..." : "Sing up"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
