import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardIndex from "../pages/cms/dashboard";
import CmsLayout from "../layouts/CmsLayout";
import LoginIndex from "../pages/cms/login";
const CmsRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="cms" />}></Route> */}
            <Route path="/cms" element={<CmsLayout />}>
                <Route index element={<DashboardIndex />}></Route>;
                <Route path="login" element={<LoginIndex />}></Route>
            </Route>
        </Routes>
    );
};

export default CmsRoutes;
