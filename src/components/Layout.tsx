import * as React from "react";
import { View } from "vcc-ui";

type Props = {
  children?: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <View
      extend={{
        maxWidth: 1600,
        border: "none",
        margin: '0 auto'
      }}
    >
      {children}
    </View>
  );
};

export default Layout;
