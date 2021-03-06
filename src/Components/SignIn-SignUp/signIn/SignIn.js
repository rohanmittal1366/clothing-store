import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../../Firebase/Firebase";
import CustomButton from "../../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./signIn.scss";

const SignIn = () => {
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(value, pass);
    // const state = {
    //   email: value,
    //   password: pass,
    // };
    try {
      await auth.signInWithEmailAndPassword(value, pass);
      setValue("");
      setPass("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signIn">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={value}
          label="Email"
          required
          onChange={(event) => setValue(event.target.value)}
        />

        <FormInput
          name="password"
          type="password"
          value={pass}
          label="Password"
          required
          onChange={(event) => setPass(event.target.value)}
        />
        <div className="buttons">
          <CustomButton type="submit">SignIn</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            SignIn with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
