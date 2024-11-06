import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import CmsRoutes from "./routes/CmsRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
                <CmsRoutes />
        </BrowserRouter>
    );
}

export default App;
