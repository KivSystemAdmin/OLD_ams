"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useInput } from "@/app/hooks/useInput";
import { useAuth } from "@/app/hooks/useAuth";
import { isValidRegister } from "@/app/helper/validationUtils";

function Register() {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();
  const [passConfirmation, onPassConfirmationChange] = useInput();
  const router = useRouter();

  const endpoint = "http://localhost:4000/admins/register";
  useAuth(endpoint);

  // Register the admin.
  const registerHandler = async (e: FormEvent) => {
    e.preventDefault();

    // Check the validation of the input values.
    const checkResult = isValidRegister({
      name,
      email,
      password,
      passConfirmation,
    });

    if (!checkResult) {
      return;
    }

    // Define the data to be sent to the server side.
    const registerURL = "http://localhost:4000/admins/register";
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({
      name,
      email,
      password,
    });

    const response = await fetch(registerURL, {
      method: "POST",
      credentials: "include",
      headers,
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message); // Set alert message temporarily.
      if (data.redirectUrl) {
        // Without session, redirect to the login page.
        const redirectUrl = data.redirectUrl;
        router.push(redirectUrl);
      }
      return;
    }

    alert("Registered successfully"); // Set alert message temporarily.
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={registerHandler}>
        <label>
          Name
          <input type="text" value={name} onChange={onNameChange} />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={onEmailChange} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={onPasswordChange} />
        </label>
        <label>
          Password Confirmation
          <input
            type="password"
            value={passConfirmation}
            onChange={onPassConfirmationChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
