"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function FormContainer(props) {
  const router = useRouter();

  async function submitHandler(formData) {
    if (props.action) {
      await props.action(formData);
    }
    if (props.redirectTo) {
      router.push(props.redirectTo);
    }
  }

  return (
    <form action={submitHandler}>
      <h3>{props.formTitle}</h3>
      {props.children}
      <button type="submit">Submit</button>
    </form>
  );
}
