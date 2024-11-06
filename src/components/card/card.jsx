import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDeleteUserMutation } from "../../redux/service/user-service";
import { Link } from "react-router-dom";

export const Card = ({ title, description, id }) => {
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = () => {
    deleteUser(id);
  };

  return (
    <Link to={`/user-detail/${id}`}>
      <Stack mb={"20px"}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h4">{description}</Typography>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Stack>
    </Link>
  );
};
