import { type AppType } from "next/app";
import { Notifications } from "@mantine/notifications";
import "@/styles/globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { nprogress, NavigationProgress } from "@mantine/nprogress";
import AppLayout from "@/layouts/AppLayout";
import { SessionProvider } from "next-auth/react";
import { Anuphan } from "next/font/google";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/dates/styles.css";

const fontSans = Anuphan({
  subsets: ["latin"],
  variable: "--font-sans",
});

const themeMantine = createTheme({
  fontFamily: "Anuphan",
  radius: {
    sm: "0.4rem",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      {/* <div className={fontSans.className}> */}
        <MantineProvider theme={themeMantine}>
          <NavigationProgress />
          <Notifications position="top-right" />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </MantineProvider>
      {/* </div> */}
    </SessionProvider>
  );
};

export default MyApp;
