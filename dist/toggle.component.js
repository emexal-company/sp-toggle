import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import toggleStyles from './toggle.styles';
import template from './toggle.template';
let Toggle = class Toggle extends Base {
    constructor() {
        super(...arguments);
        this.quiet = false;
        this.ab = false;
        this.disabled = false;
        this.labelA = false;
        this.labelB = false;
    }
    render() {
        return template.call(this);
    }
};
Toggle.componentStyles = [toggleStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Toggle.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Toggle.prototype, "ab", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Toggle.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Toggle.prototype, "labelA", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Toggle.prototype, "labelB", void 0);
Toggle = __decorate([
    customElement('sp-toggle')
], Toggle);
export { Toggle };
//# sourceMappingURL=toggle.component.js.map