import { fieldRender, webInit } from "./webInit";
import "./style.css";

window.onload = () => {
  webInit();
  fieldRender("player1");
  fieldRender("player2");
};
