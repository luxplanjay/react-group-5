import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Loadable from 'react-loadable';
import Nav from './Nav';
// import Loader from './Loader';

const AsyncHome = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "home-page" */),
);

const AsyncPosts = lazy(() =>
  import('../pages/Posts' /* webpackChunkName: "posts-page" */),
);

const AsyncProfile = lazy(() =>
  import('../pages/Profile' /* webpackChunkName: "profile-page" */),
);

const AsyncNotFound = lazy(() =>
  import('../pages/NotFound' /* webpackChunkName: "notfound-page" */),
);

/*
 * React loader
 */
// const AsyncHome = Loadable({
//   loader: () => import('../pages/Home' /* webpackChunkName: "home-page" */),
//   loading: Loader,
//   timeout: 10000,
//   delay: 200,
// });

// const AsyncPosts = Loadable({
//   loader: () => import('../pages/Posts' /* webpackChunkName: "posts-page" */),
//   loading: Loader,
// });

// const AsyncProfile = Loadable({
//   loader: () =>
//     import('../pages/Profile' /* webpackChunkName: "profile-page" */),
//   loading: Loader,
// });

// const AsyncNotFound = Loadable({
//   loader: () =>
//     import('../pages/NotFound' /* webpackChunkName: "notfound-page" */),
//   loading: Loader,
// });

const App = () => (
  <div>
    <Nav />

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/posts" exact component={AsyncPosts} />
        <Route path="/profile" exact component={AsyncProfile} />
        <Route component={AsyncNotFound} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
