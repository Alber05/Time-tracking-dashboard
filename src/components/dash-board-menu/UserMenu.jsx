import React from "react";
import "./useMenu.css";

function UserMenu({ setDays, setWeeks, setMonths }) {
  return (
    <article className="userMenu__container" >
      <header className="userMenu__header">
        <img
          src="./src/assets/image-jeremy.png"
          alt=""
          className="userMenu__avatar"
        />
        <h1 className="userMenu__name-container">
          <span>Report for</span>
          <span>Jeremy Robson</span>
        </h1>
      </header>
      <section className="userMenu__body">
        <nav className="userMenu__nav">
          <ul>
            <li>
              <a href="#" onClick={setDays}>
                Daily
              </a>
            </li>
            <li>
              <a href="#" onClick={setWeeks}>
                Weekly
              </a>
            </li>
            <li>
              <a href="#" onClick={setMonths}>
                Monthly
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </article>
  );
}

export default UserMenu;
