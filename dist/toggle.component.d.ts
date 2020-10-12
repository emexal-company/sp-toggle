import { Base } from '@spectrum/sp-base';
export declare class Toggle extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    quiet: boolean;
    ab: boolean;
    disabled: boolean;
    labelA: boolean;
    labelB: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-toggle': Toggle;
    }
}
