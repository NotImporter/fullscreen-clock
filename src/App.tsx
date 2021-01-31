import React, { useState } from "react";
import "./App.css";

const DAY_STRING = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

type State = {
  year: number;
  month: number;
  date: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
};

class App extends React.Component {
  public state: State;

  constructor(arg: any) {
    super(arg);

    const currentDate = new Date();

    this.state = {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      date: currentDate.getDate(),
      day: currentDate.getDay(),
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };
  }

  public componentDidMount() {
    this.requestTimerFrame();
  }

  public render() {
    const { year, month, date, day, hours, minutes, seconds } = this.state;

    return (
      <div id="app">
        <span className="date-text">
          {year}-{this.fixTimeNumber(month)}-{this.fixTimeNumber(date)} {DAY_STRING[day]}
        </span>
        <span className="time-text">
          {hours} : {this.fixTimeNumber(minutes)}
          <span className="seconds-text"> : {this.fixTimeNumber(seconds)}</span>
        </span>
      </div>
    );
  }

  private updateDate() {
    const currentDate = new Date();

    this.setState({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      date: currentDate.getDate(),
      day: currentDate.getDay(),
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    });
  }

  private requestTimerFrame() {
    window.requestAnimationFrame(() => {
      this.updateDate();
      this.requestTimerFrame();
    });
  }

  private fixTimeNumber(n: number): string {
    return n < 10 ? "0" + n : "" + n;
  }
}

export default App;
