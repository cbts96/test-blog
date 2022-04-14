import "./App.css";

import HomeTemplate from "./templates/HomeTemplate";
import UserTemplate from "./templates/UserTemplate";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErorrBoundary/ErrorBoundary";
import React, { Suspense } from "react";
import Login from "./pages/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import CreateBlog from "./pages/CreateBlog";
import  EditBlog  from "./pages/EditBlog";
const Home = React.lazy(() => import("./pages/Home"));
const BlogDetail = React.lazy(() => import("./pages/BlogDetail"));

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeTemplate path="/home" exact Component={Home} />

          <HomeTemplate path="/" exact Component={Home} />
          <HomeTemplate path="/login" exact Component={Login} />

          <HomeTemplate path="/detail/:id" exact Component={BlogDetail} />
          <UserTemplate path="/dashboard" exact Component={DashBoard} />
          <UserTemplate path="/edit/:blogId" exact Component={EditBlog} />
          <UserTemplate path="/create" exact Component={CreateBlog} />
          
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
