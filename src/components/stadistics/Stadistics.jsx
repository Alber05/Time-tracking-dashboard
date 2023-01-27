import React from "react";
import "./stadistics.css";

function Stadistics({ data, daily, weekly, monthly }) {

  function setIcon(name){
    switch(name){
      case "Work":
        return "../src/assets/icon-work.svg"
        case "Play":
        return "../src/assets/icon-play.svg"
        case "Study":
        return "../src/assets/icon-study.svg"
        case "Exercise":
        return "../src/assets/icon-exercise.svg"
        case "Social":
        return "../src/assets/icon-social.svg"
        case "Self Care":
        return "../src/assets/icon-self-care.svg"

      }
    }

    function setBackground(name){
      switch(name){
        case "Work":
          return "stadistics__container work"
          case "Play":
          return "stadistics__container play"
          case "Study":
          return "stadistics__container study"
          case "Exercise":
          return "stadistics__container exercise"
          case "Social":
          return "stadistics__container social"
          case "Self Care":
          return "stadistics__container self-care"
  
        }
      }
  

  return data.map((activity, index) => (
    <article key={index} className={
      setBackground(activity.title)
    }>
      <header className="stadistics__header">
        <img src={setIcon(activity.title)} alt="" />
      </header>
      <section className="stadistics__body">
        <div className="stadistics__menu">
          <h3>{activity.title}</h3>
          <img src="../src/assets/icon-ellipsis.svg" alt="" />
        </div>
        <div className="stadistics__time">
          <h2 className="stadistics__hours">
            {daily
              ? activity.timeframes.daily.current
              : weekly
              ? activity.timeframes.weekly.current
              : activity.timeframes.monthly.current}
              hrs
          </h2>
          <span> 
          {daily
              ? "Last day - "
              : weekly
              ? "Last week - "
              : "Last Month - "}  
          
          {daily
              ? activity.timeframes.daily.previous
              : weekly
              ? activity.timeframes.weekly.previous
              : activity.timeframes.monthly.previous}</span>
        </div>
      </section>
    </article>
  ));
}

export default Stadistics;
