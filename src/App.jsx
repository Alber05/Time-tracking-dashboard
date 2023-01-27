
import jsonData from "./data.json";
import { useState, useEffect } from "react";
import Main from "./components/main/MainContainer";
import UserMenu from "./components/dash-board-menu/UserMenu";
import Stadistics from "./components/stadistics/Stadistics";


function App() {
  const [data, setData] = useState(jsonData);
  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);

  function setDays() {
    setDaily(true);
    setWeekly(false);
    setMonthly(false);
  }

  function setWeeks() {
    setDaily(false);
    setWeekly(true);
    setMonthly(false);
  }

  function setMonths() {
    setDaily(false);
    setWeekly(false);
    setMonthly(true);
  }

  useEffect(() => {
    setDaily(true);
  }, []);

  return (
    <>
      <Main>
        <UserMenu
          setDays={setDays}
          setWeeks={setWeeks}
          setMonths={setMonths}
        ></UserMenu>
        <Stadistics
          data={data}
          daily={daily}
          weekly={weekly}
          monthly={monthly}
        ></Stadistics>
      </Main>
    </>
  );
}

export default App;
