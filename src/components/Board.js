import React from "react";
import "../assets/css/board.css";
import List from "./List";

const Info = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sofia Cooper",
    birthday: "1995-09-01",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Miller Wright",
    birthday: "1998-09-02",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Tara Kelly",
    birthday: "1991-09-09",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Freddie Watson",
    birthday: "1999-09-11",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brianna Baker",
    birthday: "1994-10-10",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brad Myers",
    birthday: "1997-10-12",
  },
];

function Board() {
  return (
    <main id="site-main">
      <h1 className="text-dark title">Birthday Remainder</h1>
      <div className="board">
        <h2 className="upcoming text-dark">Recent</h2>
        <List info={Recent(Info)} />
        <h2 className="upcoming text-dark">Today</h2>
        <List info={Today(Info)} />
        <h2 className="upcoming text-dark">Upcoming</h2>
        <List info={Upcoming(Info, 2)} upcoming={true} />
      </div>
    </main>
  );
}

export default Board;

// Today Birthday

function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filterVariable = person.filter((data) => {
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();

    return currentDay === day && currentMonth === month;
  })

  return filterVariable;
}

// upcoming Birthday

function Upcoming(person, toMonth) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter(data => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay === day) return; // eslint-disable-line
    return month >= currentMonth && currentDay <= day + toMonth
  });
  return filter
}

// Recents Birthday
function Recent(person) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter((data) => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay === day) return; // eslint-disable-line
    return month >= currentMonth && currentDay >= day
  })
  return filter
}