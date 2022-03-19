import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { DraggableWindow } from "../../components/draggable-window";
import { ROUTES } from "../../constants";

export const Contacts: FC = () => {
  const navigate = useNavigate();

  const handleWindowClose = () => {
    navigate(ROUTES.home);
  };

  return (
    <DraggableWindow title="Contacts" onClose={handleWindowClose}>
      <ul>
        <li>
          <a href="https://github.com/aso1datov" target="_blank" rel="nofollow">
            Github
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/aso1datov/"
            target="_blank"
            rel="nofollow"
          >
            Linked.in
          </a>
        </li>

        <li>
          <a
            href="https://career.habr.com/aso1datov"
            target="_blank"
            rel="nofollow"
          >
            Хабр Карьера
          </a>
        </li>
      </ul>
    </DraggableWindow>
  );
};
