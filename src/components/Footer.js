import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footerElement = document.createElement('div')
    footerElement.className = 'footer'
    footerElement.innerHTML = `
      <div class='footer-top'>
        <div class='footer-logo'>
          <p>logo</p>
        </div>
        <div class='footer-menu'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>My account</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>Privacy Policy</a></li>
          </ul>
        </div>
        <div class='signin-btn'>
          <button>Sign in</button>
        </div>
      </div>
      <div class='copyright'>
        <p>&copy;${new Date().getFullYear()} Pretty Charmmy. All rights reserved.</p>
      </div>
    `

    return footerElement
  }
}