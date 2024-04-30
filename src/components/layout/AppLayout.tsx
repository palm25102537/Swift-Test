import { FC, PropsWithChildren } from "react";
import AppHeader from "./AppHeader";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="d-flex p-4 flex-col h-app">
      <AppHeader />
      {children}
    </div>
  );
};

export default AppLayout;
