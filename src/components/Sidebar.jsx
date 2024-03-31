import React from 'react';

function Sidebar() {
    return(
        <div class="wrapper">
      <input type="checkbox" id="btn" hidden />
      <label for="btn" class="menu-btn">
        <i class="fas fa-bars">Open</i>
        <i class="fas fa-times">X</i>
      </label>
      <nav id="sidebar">
        <div class="title">Menu</div>
        <ul class="list-items">
          <li><a href="/">Home</a></li>
          <li><a href="/login">login</a></li>
          <li><a href="/welcome">welcome</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
    </div>
    )
}

export default Sidebar;