import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element";

import style from "./shared/tailwind.global.css";

@customElement("mobile-footer")
export class MobileFooter extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
    <div class="absolute bottom-0 left-0 flex flex-col justify-around items-center w-full h-[164px] bg-primary text-white">
        <div class="flex flex-row items-center justify-evenly pt-4" id="mobile-footer-btns">
            <a class="mobile-footer-btns font-unna-700-it" href="#">Newsletter</a>
            <a class="mobile-footer-btns font-unna-700-it" href="#">Contact</a>
        </div>

        <div class="font-jose-400 text-[11px] text-center leading-3">
            <p>©2023 Time&Place Funding. <br/>A pillar of Time&Place Consulting. <br/>All rights reserved</p>
        </div>

        <ul class="w-full px-9 flex flex-row justify-around font-jose-700 text-[11px]">
            <li><a href="#">Terms & Conditions</a></li>
            <li>-</li>
            <li><a href="#">Cookie Use</a></li>
            <li>-</li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>
    </div>
    `;
  }
}