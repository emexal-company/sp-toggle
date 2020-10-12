import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import toggleStyles from './toggle.styles';
import template from './toggle.template';

@customElement('sp-toggle')
export class Toggle extends Base {
  public static componentStyles = [toggleStyles];

  @property({ type: Boolean }) quiet = false;
  @property({ type: Boolean }) ab = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) labelA = false;
  @property({ type: String }) labelB = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-toggle': Toggle;
  }
}
