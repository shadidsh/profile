import React from 'react';

import './Toolbar.css'
class Toolbar extends React.Component {
    render() {
      return (
      
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#news">Project</a>
          <a href="#contact">Contact</a>
        </div>
      );
    }
}


export default Toolbar;