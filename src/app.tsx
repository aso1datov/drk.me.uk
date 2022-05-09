import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Desktop } from "./components/desktop";
import { Favicon } from "./components/favicon";
import { Icon } from "./components/icon";
import { Layout } from "./components/layout";
import { Taskbar } from "./components/taskbar";
import { ReactComponent as UserIcon } from "./images/user.svg";
import { Contacts } from "./pages/contacts";
import { ROUTES } from "./constants";

import styles from "./app.module.scss";

export const App: FC = () => (
  <>
    <Layout>
      <Desktop className={styles.desktop}>
        <Icon label="Contacts" image={<UserIcon />} to={ROUTES.contacts} />

        <Routes>
          <Route path={ROUTES.home} element={<></>} />
          <Route path={ROUTES.contacts} element={<Contacts />} />
        </Routes>
      </Desktop>
      <Taskbar className={styles.taskbar} />
    </Layout>

    <Favicon />
  </>
);
