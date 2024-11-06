import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/service/user-service";

export const Form = () => {
  const { handleSubmit, register, reset } = useForm();
  const [userMutationFn] = useCreateUserMutation();

  const submit = (data) => {
    console.log(data);
    userMutationFn(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      });

    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Stack gap={"20px"} mb={"40px"}>
          <TextField placeholder="Title" {...register("title")} />
          <TextField placeholder="Description" {...register("description")} />
          <Button type="submit" variant="contained">
            send
          </Button>
        </Stack>
      </form>
    </div>
  );
};
