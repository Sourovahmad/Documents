import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import CreatePage from "../Pages/create-page/CreatePage";

const NavbarRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="create-page" element={<CreatePage/>}/>
            </Route>
        </Routes>
    );
};

const Home = () => {
    return <h1>Hello I am home <Link to="/create-page"> Create Page </Link> </h1>;
};

export default NavbarRouter;
