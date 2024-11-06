import React from "react";
import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "../redux/service/user-service";
import { Typography, Stack } from "@mui/material";

export const UserDetail = () => {
  const { id } = useParams();
  const { error, isLoading, data } = useGetUsersQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user details.</div>;
  if (!data) return <div>No user found.</div>;

  return (
    <Stack spacing={2}>
      <Typography variant="h2">User Details</Typography>
      <Typography variant="h4">Title: {data.title}</Typography>
      <Typography variant="body1">Description: {data.description}</Typography>
    </Stack>
  );
};
