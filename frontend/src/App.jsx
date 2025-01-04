import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Client/pages/Homepage";
import Dashboard from "./components/Dashboard/pages/Dashboard";
import BlogPage from "./components/Client/pages/BlogPage";
import Blogs from "./components/Client/pages/Blogs";
import Profiles from "./components/Dashboard/pages/Profile";
import NotFound from "./components/Client/pages/NotFound";

// Dashboard
import DashboardLayout from "./components/Dashboard/templates/DashboardLayout";
import PagesDashboard from "./components/Dashboard/pages/Pages";
import Users from "./components/Dashboard/pages/Users";
import Page from "./components/Dashboard/pages/page-editor/Page";
import Sections from "./components/Dashboard/pages/Sections";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        {/* <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPage />} />( */}
        <>
          {/* <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          /> */}
          <Route
          // path="/dashboard/pages"
            path="/dashboard"
            element={
              <DashboardLayout>
                <PagesDashboard />
              </DashboardLayout>
            }
          />
          <Route path="/dashboard/pages/page" element={<Page />} />
          <Route path="/dashboard/pages/page/:id" element={<Page />} />

          <Route
            path="/dashboard/users"
            element={
              <DashboardLayout>
                <Users title="Users" api="users" />
              </DashboardLayout>
            }
          />
          {/* <Route
            path="/dashboard/sections"
            element={
              <DashboardLayout>
                <Sections />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/authors"
            element={
              <DashboardLayout>
                <Users title="Authors" />
              </DashboardLayout>
            }
          /> */}
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
