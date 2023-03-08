import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element";

import style from "./shared/tailwind.global.css";

@customElement("wrapper-div")
export class Wrapper extends TailwindElement(style) {
  @property({reflect: true}) isShowing: boolean = false;

  render() {
    return html`
      <div @click=${this.clickOutside} id="wrapper" class="relative min-h-screen">
        <mobile-header isShowing=${this.isShowing}></mobile-header>
        <mobile-footer></mobile-footer>
      </div>
    `;
  }

  clickOutside(e: Event) {
    const target = e.target as Element
    console.log(target.tagName)
    if (target.tagName == 'MOBILE-HEADER') {
      this.isShowing = true;
      console.log(this.isShowing)
      console.log('clicking inside')
    } else {
      this.isShowing = false
      console.log(this.isShowing)
      console.log('click outside')
    }
  }
}