/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //objects
  let who = ["The dog", "My grandma", "The mailman", "My bird", "I"];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "got late because there were"
  ];
  let what = ["my homework", "my phone", "the car", "traffic jam"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "this morning"
  ];
  // how can i connect the words to create an excuse? i need to know the length!!

  let var1 = Math.floor(Math.random() * who.length);
  let var2 = Math.floor(Math.random() * action.length);
  let var3 = Math.floor(Math.random() * what.length);
  let var4 = Math.floor(Math.random() * when.length);

  // I need to show this ¿how?.. I need to use the id selector

  document.querySelector("#quote_excuse").innerHTML =
    who[var1] + " " + action[var2] + " " + what[var3] + " " + when[var4];
};
