import React from "react";

import "./CSS/styles.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import {RouterProvider} from "react-router-dom";

import Router from "./Router";

function App() {
    return (
        <div>
            <NavBar />
            <div className="mainContent" style={{
                margin: "4em 6em 3em 5em",
            }}>
                <React.Suspense>
                    <RouterProvider router={Router} />
                </React.Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default App;
