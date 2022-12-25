

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "./App.scss"
import swal from "sweetalert";
import { modal } from "bootstrap";
import "boxicons/css/boxicons.css"
import bologImg from "./photo.jpg"

const btn = document.getElementById("swAlert");
btn.onclick = () => {
    swal("Are you sure ?")
};

const blogImg = document.getElementById("blogImg");
blogImg.setAttribute("src", bologImg)