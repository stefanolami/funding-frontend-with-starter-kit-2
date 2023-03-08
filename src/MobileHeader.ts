import { html } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element";

import style from "./shared/tailwind.global.css";

@customElement("mobile-header")
export class MobileHeader extends TailwindElement(style) {
    @state() 

    @query('#mobile') mobile: HTMLDivElement;

    @property({reflect: true}) isShowing?: boolean = false;

    render() {
        return html`
        <div id='header' class="mobile flex md:hidden justify-between items-center select-none md:bg-transparent pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-7 xl:pb-7">
            <object class="w-[138px] h-[43px] ml-4" data="../images/T&Pfunding-logo.svg" ></object>
            <div @click=${this.openMenu} id="mobile-menu-div" class="md:hidden relative mr-3">
                <div id="mobile-menu" class="select-none md:hidden">
                    <object data="../images/mobile-menu-circle.svg" width="48" height="35"></object>
                    <div class="absolute top-0 flex flex-col w-full h-[35px] justify-center items-center">
                        <div class="mobile-menu-rectangle"></div>
                        <div class="mobile-menu-rectangle"></div>
                        <div class="mobile-menu-rectangle"></div>
                    </div>
                </div>
                <nav id="mobile-menu-nav" class="${this.isShowing? 'hidden' : 'flex' } mobile absolute z-20 w-[148px] md:w-[500px] h-[352px] md:h-full top-[-4px] right-0 flex-col justify-between border-primary border-[3px] rounded-lg rounded-tr-none md:border-none bg-white md:bg-transparent">    
                    <div id="mobile-menu-close" class="ml-[85%] mt-0 font-nunito-400  text-primary text-lg md:hidden">x</div>
                    <ul class="flex flex-col md:flex-row justify-evenly h-[90%] ml-6 mb-3 font-jose-400-it text-primary-dark text-base">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Publications</a></li>
                        <li><a href="#">Why Us</a></li>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        `;
    }


    /* connectedCallback() {
        super.connectedCallback();
        window.addEventListener('click', this.clickOutside);
    }
    disconnectedCallback() {
        window.removeEventListener('click', this.clickOutside);
        super.disconnectedCallback();
    } */

    openMenu() {
        console.log(this.isShowing)
        this.isShowing = false;
        console.log(this.isShowing)
        console.log('clicking')
        this.requestUpdate()
    }

    closeMenu() {
        this.isShowing = false;
        console.log('closing')
    }

  /* clickOutside(e: Event) {
    const target = e.target as Element
    if (target.tagName !== 'mobile-header') {
        this.isShowing = false;
        console.log(this.isShowing)
        console.log('clicking outside')
    }
    } */
    
    /* if (!mobileMenuDiv.contains(e.target as Node)) {
        this.isShowing = false;
        console.log('clicking outside')
    } else {
        console.log('clicking inside')
    } */
}






























