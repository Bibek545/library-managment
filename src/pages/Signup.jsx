import React, { useState } from "react";
import CustomInputs from "../components/CustomInputs";
import { Form } from "react-bootstrap";

const Signup = () => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
  });
  const signUpList = [
    {
      type: "First name",
      placeholder: "Enter your first name",
      name: "fname",
      controlId: "formFname",
      value: form.fName,
    },
    {
      type: "Last name",
      placeholder: "Enter your last name",
      name: "lname",
      controlId: "formLname",
      value: form.lName,
    },
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
      value: form.password,
    },
    {
      type: "number",
      placeholder: "Enter your number",
      name: "number",
      controlId: "formNumber",
      value: form.number,
    },
  ];
  return   <div className="bg-dark p-4 text-white rounded">
      <h2>Sign up</h2>
      <Form>
        

        {signUpList.map((field) => {
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

        <button type="submit">Sign up </button>
      </Form>
    </div>;
};

export default Signup;
