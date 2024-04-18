import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { MantineProvider } from "@mantine/core";
// import { NextUIProvider } from "@nextui-org/react";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
// import Footer from "../components/Footer";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-between relative">
      {/* <NextUIProvider> */}
        <MantineProvider>
          <Navbar />
          <div className="h-[90%] bg-gray-100">{children}</div>
          {/* <Footer /> */}
          <Notifications position="top-right" />
        </MantineProvider>
      {/* </NextUIProvider> */}
    </div>
  );
};

export default Layout;
