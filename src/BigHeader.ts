import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element";

import style from "./shared/tailwind.global.css";

@customElement("big-header")
export class BigHeader extends TailwindElement(style) {
  @property()
  name?: string = "World";

  render() {
    return html`
    <div class="hidden md:flex justify-between items-center select-none md:bg-transparent pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-7 xl:pb-7">
        <object class="w-[177px] xl:hidden h-[55px] ml-7" data="../images/T&Pfunding-logo.svg" ></object>
        <object class="hidden w-[145px] xl:inline h-[98px] ml-[4%]" data="../images/T&Pfunding-logo-desktop.svg" ></object>

        <nav id="header-nav" class="hidden md:flex flex-row justify-around xl:justify-center items-center w-[70%] h-full font-jose-400-it text-base text-center pr-4">    
            <a class="desktop-header-nav-items" href="#">Newsroom</a>
            <a class="desktop-header-nav-items" href="#">Services</a>
            <a class="desktop-header-nav-items" href="#">Publications</a>
            <a class="desktop-header-nav-items" href="#">Why Us</a>
            <a class="desktop-header-nav-items" href="#">Who We Are</a>
            <a class="desktop-header-nav-items xl:border-r-0" href="#">Contact</a>
        </nav>
    </div>
    `;
  }
}