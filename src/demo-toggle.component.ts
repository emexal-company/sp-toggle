import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-toggle.styles';
import template from './demo-toggle.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Toggle } from '@spectrum/sp-toggle';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-toggle')
export class DemoToggle extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-toggle': DemoToggle;
  }
}
