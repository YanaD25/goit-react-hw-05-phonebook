(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={contacts:"ContactList_contacts__i3BL2",contactsItem:"ContactList_contactsItem__3TTDF",contactsText:"ContactList_contactsText__vLX2Y",contactsButton:"ContactList_contactsButton__1Awyl",enter:"ContactList_enter__D3dvU",enterActive:"ContactList_enterActive__3Ktrk",exit:"ContactList_exit__1rglQ",exitActive:"ContactList_exitActive__S_pH3"}},15:function(t,e,n){t.exports={notification:"Notification_notification__1HoI2",enter:"Notification_enter__3Wju-",enterActive:"Notification_enterActive__EFzz1",exit:"Notification_exit__3jHQy",exitActive:"Notification_exitActive__ALnT4"}},19:function(t,e,n){t.exports={filter:"Filter_filter__3nGYa"}},21:function(t,e,n){t.exports=n(29)},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),i=n(16),s=n(8),l=n(9),m=n(10),u=n(13),f=n(12),_=n(32),p=n(7),h=n.n(p),v=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,o={id:Object(_.a)(),name:a,number:c};t.props.addContact(o),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:h.a.form},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name:",c.a.createElement("input",{className:h.a.formInput,type:"text",value:e,name:"name",placeholder:"enter the name...",onChange:this.handleChange})),c.a.createElement("br",null),c.a.createElement("label",null,"Number:",c.a.createElement("input",{className:h.a.formInput,type:"tel",value:n,name:"number",placeholder:"enter the number...",onChange:this.handleChange})),c.a.createElement("br",null),c.a.createElement("button",{className:h.a.formButton,type:"submit",disabled:!e.length||!n.length},"Add contact")))}}]),n}(a.Component),b=n(1),d=n.n(b),E=function(t){var e=t.name,n=t.number,a=t.onRemove;return c.a.createElement("li",{className:d.a.contactsItem},c.a.createElement("p",{className:d.a.contactsText},e," : ",n),c.a.createElement("button",{className:d.a.contactsButton,type:"button",onClick:a},"\xd7"))},C=n(33),g=n(31),x=function(t){var e=t.contacts,n=t.onRemove;return c.a.createElement("div",{className:d.a.contacts},c.a.createElement(C.a,{component:"ul"},e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(g.a,{key:e,classNames:d.a,timeout:250,unmountOnExit:!0},c.a.createElement(E,{key:e,name:a,number:o,onRemove:function(){return n(e)}}))}))))},N=n(19),y=n.n(N),S=function(t){var e=t.onChange;return c.a.createElement("div",{className:y.a.filter},"Find contacts by name:",c.a.createElement("input",{type:"text",name:"filter",onChange:e}))},O=n(6),j=n.n(O),A=function(t){var e=t.title,n=t.children;return c.a.createElement("section",null,c.a.createElement(g.a,{in:!0,appear:!0,timeout:500,classNames:j.a,unmountOnExit:!0},c.a.createElement("h2",{className:j.a.section},e)),n)},k=(n(28),n(15)),L=n.n(k),T=function(t){var e=t.alert;return c.a.createElement(g.a,{in:e,classNames:L.a,timeout:400,unmountOnEnter:!0,unmountOnExit:!0},c.a.createElement("div",{className:L.a.notification},c.a.createElement("p",null,"Contact already exists!")))},I=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",alert:!1},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(s.a)({},a,c))},t.removeContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:Object(i.a)(n)})},t.addContact=function(e){var n=e.name;t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?(t.setState({alert:!0}),setTimeout((function(){t.setState({alert:!1})}),3e3)):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;if(n.length)return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.alert;return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{title:"Phonebook"}),c.a.createElement(T,{alert:n}),c.a.createElement(v,{addContact:this.addContact}),c.a.createElement("div",null,c.a.createElement("h2",{className:j.a.contactsTitle},"Contacts"),e.length>1&&c.a.createElement(S,{onChange:this.handleChange}),e.length?c.a.createElement(x,{contacts:this.getVisibleContacts(),onRemove:this.removeContact}):c.a.createElement("p",{className:j.a.sectionText},"There are no contacts here")))}}]),n}(a.Component);r.a.render(c.a.createElement(I,null),document.getElementById("root"))},6:function(t,e,n){t.exports={section:"Section_section__3CE4I",sectionText:"Section_sectionText__25rBH",appear:"Section_appear__3sHpd",appearActive:"Section_appearActive__3KlkP",contactsTitle:"Section_contactsTitle__3pkrV"}},7:function(t,e,n){t.exports={form:"ContactForm_form__2eq62",formInput:"ContactForm_formInput__2aA_l",formButton:"ContactForm_formButton__3bj21"}}},[[21,1,2]]]);
//# sourceMappingURL=main.857babbf.chunk.js.map