import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "@app/Components/Header";
import Footer from "@app/Components/Footer";

export default function Layout() {
    return (
        <>
            {/* App header component */}
            <Header
                parent={{
                    className: "app-header",
                }}
            />

            {/* App content */}
            <main className="app-body">
                <Outlet />
            </main>

            {/* App footer component */}
            <Footer />
        </>
    );
}
