import { FC } from "react";
import { useRoutes } from "react-router-dom";
import Home from "features/Home";
import About from "features/About";
import ExampleLayout from "layouts/ExampleLayout";

export const BaseRoute: FC = () => {
  const routers = useRoutes([
    {
      path: "",
      element: (
        <ExampleLayout>
          <Home />
        </ExampleLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <ExampleLayout>
          <About />
        </ExampleLayout>
      ),
    },
  ]);
  return routers;
};
