import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/client/Homepage";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import BlogPage from "./components/pages/client/BlogPage";
import Blogs from "./components/pages/client/Blogs";
import Profiles from "./components/pages/Dashboard/Profile";
import NotFound from "./components/pages/client/NotFound";

import DashboardLayout from "./components/templates/DashboardLayout";
import PagesDashboard from "./components/pages/Dashboard/Pages";
import Page from "./components/pages/Dashboard/Page/Page";
import Sections from "./components/pages/Dashboard/Sections";



const App = () => {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPage />} />(
        <>
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/pages"
            element={
              <DashboardLayout>
                <PagesDashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/pages/page"
            element={ <Page />
              // <DashboardLayout>
               
              // </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/sections"
            element={
              <DashboardLayout>
                <Sections />
              </DashboardLayout>
            }
          />
        </>
        )
        <Route path="/profile" element={<Profiles />} />
        {/* <Route path="/dashboard/*" element={<NotFound />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
