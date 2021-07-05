import React from "react";

const RemoteButton = React.lazy(() => import("app1/Button"));

const App = () => (
  <div>
    <h1>Micro Switch</h1>
    <h2>Main</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;
