import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./styles/styles.scss";
import Desktop from "../components/desktop";
import Icon from "../components/icon";
import Taskbar from "../components/taskbar";
import { AppRoute } from "../constants/app";

export const metadata: Metadata = {
  title: "drk.me.uk",
};

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="layout">
          <Desktop className="desktop">
            <Icon
              label="Contacts"
              image="images/user.svg"
              to={AppRoute.Contacts}
            />

            {children}
          </Desktop>
          <Taskbar className="taskbar" />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
