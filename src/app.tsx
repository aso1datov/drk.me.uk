import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Desktop } from "./components/desktop";
import { Favicon } from "./components/favicon";
import { Icon } from "./components/icon";
import { Layout } from "./components/layout";
import { Taskbar } from "./components/taskbar";
import { ReactComponent as UserIcon } from "./images/user.svg";
import { Contacts } from "./pages/contacts";
import { AppRoute } from "./routes";

import styles from "./app.module.scss";

export const App: FC = () => (
  <>
    <Layout>
      <Desktop className={styles.desktop}>
        <Icon label="Contacts" image={<UserIcon />} to={AppRoute.Contacts} />

        <Routes>
          <Route path={AppRoute.Home} element={<></>} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
        </Routes>
      </Desktop>
      <Taskbar className={styles.taskbar} />
    </Layout>

    <Favicon />
  </>
);
