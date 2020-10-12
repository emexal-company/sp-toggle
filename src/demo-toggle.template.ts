import { html } from 'lit-element';
import { DemoToggle } from './demo-toggle.component';

import '@spectrum/sp-toggle';
import '@spectrum/sp-container';


export default function template(this: DemoToggle) {
  return html`
  <sp-container>
      <sp-rule medium label="Toggle - On and Off"></sp-rule>
      <sp-demo width="220">
        <pre><sp-toggle labelB='ToogleOff'></sp-toggle></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-toggle disabled labelB='ToogleOff'></sp-toggle></pre>
      </sp-demo>
      <sp-rule medium label="Toggle - Quiet"></sp-rule>
      <sp-demo width="220">
        <pre><sp-toggle quiet labelB='ToogleOff'></sp-toggle></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-toggle quiet disabled labelB='ToogleOff'></sp-toggle></pre>
      </sp-demo>
      <sp-rule medium label="Toggle - From A or B"></sp-rule>
      <sp-demo width="220">
        <pre><sp-toggle ab labelA='Off' labelB='On'></sp-toggle></pre>
      </sp-demo>
      <sp-demo width="220">
        <pre><sp-toggle disabled ab labelA='Off' labelB='On'></sp-toggle></pre>
      </sp-demo>
    </sp-container>
  `;
}
