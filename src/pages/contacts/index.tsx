import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { DraggableWindow } from "../../components/draggable-window";
import {
  AppRoute,
  MetricaTarget,
  YA_METRICA_COUNTER_ID,
} from "../../constants";

export const Contacts: FC = () => {
  const navigate = useNavigate();

  const handleWindowClose = () => {
    navigate(AppRoute.Home);
  };

  const handleClick = useCallback((target: MetricaTarget) => {
    window.ym(YA_METRICA_COUNTER_ID, "reachGoal", target);
  }, []);

  return (
    <DraggableWindow title="Contacts" onClose={handleWindowClose}>
      <ul>
        <li>
          <a
            href="https://github.com/aso1datov"
            target="_blank"
            rel="nofollow"
            onClick={handleClick.bind(null, MetricaTarget.Github)}
          >
            Github
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/aso1datov/"
            target="_blank"
            rel="nofollow"
            onClick={handleClick.bind(null, MetricaTarget.LinkedIn)}
          >
            Linked.in
          </a>
        </li>

        <li>
          <a
            href="https://career.habr.com/aso1datov"
            target="_blank"
            rel="nofollow"
            onClick={handleClick.bind(null, MetricaTarget.HabrCareer)}
          >
            Хабр Карьера
          </a>
        </li>
      </ul>
    </DraggableWindow>
  );
};
