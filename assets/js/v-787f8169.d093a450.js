"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1958],{96221:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-787f8169",path:"/devices/067776.html",title:"Legrand 067776 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand 067776 control via MQTT",description:"Integrate your Legrand 067776 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-01-14T19:34:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Model number",slug:"model-number",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/067776.md",git:{updatedTime:1657201045e3}}},1825:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var d=o(66252);const i=(0,d.uE)('<h1 id="legrand-067776" tabindex="-1"><a class="header-anchor" href="#legrand-067776" aria-hidden="true">#</a> Legrand 067776</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>067776</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Netatmo wired shutter switch</td></tr><tr><td>Exposes</td><td>cover (state, position), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/067776.jpg" alt="Legrand 067776"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="model-number" tabindex="-1"><a class="header-anchor" href="#model-number" aria-hidden="true">#</a> Model number</h3><p>Model number depends on the country and the colour of the devices. French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 26&quot;, &quot;0 677 76&quot; and &quot;0 648 96&quot;. Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 07&quot;, &quot;7 418 37&quot; and &quot;7 418 67&quot;.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),a=(0,d.Uk)("How to use device type specific configuration"),r=(0,d.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),n={},s=(0,o(83744).Z)(n,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[a])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);