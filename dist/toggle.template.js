import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export default function template() {
    let id = '';
    let templateAB = [];
    const classes = {
        'spectrum-ToggleSwitch--quiet': this.quiet,
        'spectrum-ToggleSwitch--ab': this.ab
    };
    if (this.ab) {
        id = 'toggle-ab';
    }
    else if (!this.ab) {
        id = 'toggle-onoff';
    }
    if (this.disabled) {
        id += '-disabled';
    }
    if (this.ab) {
        templateAB.push(html `
            <label class="spectrum-ToggleSwitch-label" for=${id}>${this.labelA}</label>
        `);
    }
    return html `
    <div class="spectrum-ToggleSwitch ${classMap(classes)}">
        ${templateAB}
        <input type="checkbox" class="spectrum-ToggleSwitch-input" id=${id} ?disabled=${this.disabled}>
        <span class="spectrum-ToggleSwitch-switch"></span>
        <label class="spectrum-ToggleSwitch-label" for=${id}>${this.labelB}</label>
    </div>
    `;
}
//# sourceMappingURL=toggle.template.js.map