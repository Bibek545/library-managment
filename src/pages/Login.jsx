import { useState } from "react";
import CustomInputs from "../components/CustomInputs";
import { Figure, Form, Placeholder } from "react-bootstrap";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginInputList = [
    {
      type: "email",
      placeholder: "Enter Email",
      name: "email",
      controlId: "formEmail",
      value: form.email,
    },
    {
      type: "password",
      placeholder: "Enter Password",
      name: "password",
      controlId: "formPassword",
      value: form.value,
    },
  ];
  return (
    <div className="bg-dark p-4 text-white rounded">
      <h2>Login</h2>
      <Form>
        

        {loginInputList.map((field) => {
          return (
            // <CustomInputs
            //   type={field.type}
            //   placeholder={field.placeholder}
            //   controlId={field.controlId}
            //   value={field.value}
            // />

            <CustomInputs {...field}/>
          );
        })}

        <button type="submit">Login </button>
      </Form>
    </div>
  );
};

export default Login;
