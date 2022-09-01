import { Drawer } from "antd";
import React, { ReactElement } from "react";

interface AppDrawerInterface {
  children: ReactElement;
  showSider: boolean;
  toggleSider: () => void;
}
export const AppDrawer = ({
  children,
  toggleSider,
  showSider,
}: AppDrawerInterface) => {
  const onClose = () => {
    toggleSider();
  };

  console.log(showSider, "dsadsa");
  return (
    <Drawer
      title="Add Admin User"
      placement={"right"}
      closable={false}
      onClose={onClose}
      visible={showSider}
      key={"right"}
    >
      {children}
    </Drawer>
  );
};
