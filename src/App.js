import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import style from "./App.css";

import Layout from "./components/Layout/Layout";
import routes from "./routes";

const HomePage = lazy(() => import("./pages/HomePage.js" /* webpackChunkName: "home-page" */));
const GalleryPage = lazy(() => import("./pages/GalleryPage.js" /* webpackChunkName: "gallery-page" */));

const App = () => (
  <Layout>
    <Suspense fallback={<Loader type="Rings" color="#738a93" height={60} width={60} className={style.loader} />}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.gallery} component={GalleryPage} />
      </Switch>
    </Suspense>
  </Layout>
);
export default App;
