import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

type ExampleLayoutProps = {
  children?: React.ReactNode;
};

const ExampleLayout: FC<ExampleLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default ExampleLayout;
