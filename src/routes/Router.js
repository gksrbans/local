import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNavbar from "../components/AppNavbar";
import CoinTable from "../components/CoinTable";
const MyRouter = () => (
  <>
    <AppNavbar />
    <Header />
    <h1>Hello Body</h1>
    <CoinTable />
    <Footer />
  </>
);

export default MyRouter;