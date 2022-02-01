import { Routes, Route } from "react-router-dom";
import { useGetContext } from "@forrestjs/react-root";

import { HomePage } from "./HomePage";

export const App = () => {
  const routes = useGetContext("app.routes");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Extends this via features */}
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </div>
  );
};