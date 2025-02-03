import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const headerElement = document.createElement('div')
    headerElement.className = 'header'
    headerElement.innerHTML = `
      <div class='header-logo'>
        <img src="../image/C-logo.svg">
      </div>
      <div class='header-menu'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>My Account</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div class='signin-btn'>
        <button>Sign in</button>
      </div>
    `

    return headerElement
  }
}