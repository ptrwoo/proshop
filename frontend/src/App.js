import React from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
