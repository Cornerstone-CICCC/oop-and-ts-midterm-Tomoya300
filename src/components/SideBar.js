import { Component } from "../common/Component";

export class SideBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const sideBar = document.createElement('div')
        sideBar.className = 'sidebar'
        sideBar.innerHTML = `
            
        `
    }
}