import { Route, Routes } from "react-router-dom";
import { Users } from "./pages/users";
import { UserDetail } from "./pages/user-detail";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
