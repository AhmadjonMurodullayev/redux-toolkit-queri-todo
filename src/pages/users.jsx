import React from "react";
import { useGetUsersQuery } from "../redux/service/user-service";
import { Card } from "../components/card/card";
import { Form } from "../components/form/form";
import { IconButton, Skeleton, Stack } from "@mui/material";

export const Users = () => {
  const [page, seTpage] = React.useState(1);
  const { data, isLoading, isFetching } = useGetUsersQuery(page);

  const changePage = (newPage) => {
    seTpage(newPage);
  };
  return (
    <div>
      <Form />
      {isLoading || isFetching ? (
        <div>
          <Stack gap={"2px"} mb={"20px"}>
            <Skeleton height={"72px"} width={"100%"} />
            <Skeleton height={"42px"} width={"100%"} />
            <Skeleton height={"37px"} width={"100%"} />
          </Stack>
          <Stack gap={"2px"} mb={"20px"}>
            <Skeleton height={"72px"} width={"100%"} />
            <Skeleton height={"42px"} width={"100%"} />
            <Skeleton height={"37px"} width={"100%"} />
          </Stack>
          <Stack gap={"2px"} mb={"20px"}>
            <Skeleton height={"72px"} width={"100%"} />
            <Skeleton height={"42px"} width={"100%"} />
            <Skeleton height={"37px"} width={"100%"} />
          </Stack>
          <Stack gap={"2px"} mb={"20px"}>
            <Skeleton height={"72px"} width={"100%"} />
            <Skeleton height={"42px"} width={"100%"} />
            <Skeleton height={"37px"} width={"100%"} />
          </Stack>
        </div>
      ) : (
        // ""
        data?.data?.map((item) => <Card key={item.id} {...item} />)
      )}

      {Array(data?.pageSize)
        ?.fill(null)
        ?.map((_, index) => (
          <IconButton
            key={index}
            sx={{
              bgcolor: `${page == index + 1 ? "red" : ""}`,
            }}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </IconButton>
        ))}
    </div>
  );
};
