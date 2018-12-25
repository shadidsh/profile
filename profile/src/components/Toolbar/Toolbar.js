import React from 'react';
import './Toolbar.css';
import Skills from '../Skills/Skills';

//const text = "Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m.";
class Toolbar extends React.Component {
    render() {
      return (
        <div >
          <div id="topnav" className="topnav">
            <a id="name" href="#default">Shadman Shadid</a>
            <a id="home" className="active" href="#home">Home</a>
            <a id="about" href="#about">About</a>
            <a id="projects" href="#projects">Projects</a>
            <a id="contact" href="#contact">Contact</a>
          </div>

          <h1 className="name">Shadman Shadid</h1>

          <Skills/>
        </div>
      );
    }
}
    
function scrollFunc() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("topnav").style.padding = "20px 10px";
    document.getElementById("name").style.fontSize = "25px";
  } else {
    document.getElementById("topnav").style.padding = "80px 10px";
    document.getElementById("name").style.fontSize = "35px";
  }
}

function toggleActive(elem) {
  var current = document.getElementById("topnav").getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = "";
  }
  elem.className = "active";
}

window.addEventListener('load', function(){
 // window.onscroll = function() {scrollFunc()};

  var home = document.getElementById("home");
  var about = document.getElementById("about");
  var contact = document.getElementById("contact");
  var projects = document.getElementById("projects");
  
  about.addEventListener('click', function(e) {
    toggleActive(about);
  });

  projects.addEventListener('click', function(e) {
    toggleActive(projects);
  });
  home.addEventListener('click', function(e) {
    toggleActive(home);   
  });
  contact.addEventListener('click', function(e) {
    toggleActive(contact);
  });

});
export default Toolbar;