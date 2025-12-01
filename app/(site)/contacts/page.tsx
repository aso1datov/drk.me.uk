"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { AppRoute } from "@/app/constants/app";
import DraggableWindow from "../../components/draggable-window";
import { MetricaTarget, YA_METRICA_COUNTER_ID } from "../../constants/metrica";

function Contacts() {
  const router = useRouter();

  const handleWindowClose = () => {
    router.push(AppRoute.Home);
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
            rel="noopener nofollow"
            onClick={handleClick.bind(null, MetricaTarget.Github)}
          >
            Github
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/aso1datov/"
            target="_blank"
            rel="noopener nofollow"
            onClick={handleClick.bind(null, MetricaTarget.LinkedIn)}
          >
            Linked.in
          </a>
        </li>

        <li>
          <a
            href="https://career.habr.com/aso1datov"
            target="_blank"
            rel="noopener nofollow"
            onClick={handleClick.bind(null, MetricaTarget.HabrCareer)}
          >
            Хабр Карьера
          </a>
        </li>
      </ul>
    </DraggableWindow>
  );
}

export default Contacts;
