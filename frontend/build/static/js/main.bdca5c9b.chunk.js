(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logod.ec8d5b49.svg"},,,function(e,t,a){e.exports=a.p+"static/media/noimagen.ff4cebf1.jpg"},,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/hero-image.f8a901ce.svg"},function(e,t,a){e.exports=a.p+"static/media/badge-header.973f5842.svg"},function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(25),c=a.n(s),l=(a(34),a(1)),o=a(2),i=a(4),m=a(3),u=a(16),p=a(15),h=a.n(p),d=(a(35),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Navbar"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(u.b,{to:"/feed"},n.a.createElement("img",{className:"Navbar__brand-logo",src:h.a,alt:"Logo"}),n.a.createElement("span",{className:"font-weight-light"},"Deica"),n.a.createElement("span",{className:"font-weight-bold"},"ServiceManagment"))))}}]),a}(n.a.Component));var v=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),e.children)},f=a(5),g=a(7),E=a.n(g),b=a(10),N=a(13),y=a(12),j=(a(42),a(27)),O=a.n(j),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.props.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.email,className:"form-control",name:"email",placeholder:"email",type:"email"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.email),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.password,className:"form-control",name:"password",placeholder:"Password",type:"password"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.password),n.a.createElement("button",{className:"btn btn-primary"},"Iniciar sesi\xf3n"),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.message),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.non_field_errors)))}}]),a}(n.a.Component),S="https://servicemante.ga";function x(e){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(E.a.mark((function e(t){var a,r,n,s,c,l=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},r=localStorage.getItem("access_token"),a.headers=r?{"Content-Type":"application/json",Authorization:"Token "+r,Accept:"application/json"}:{"Content-Type":"application/json",Accept:"application/json"},n=S+t,e.next=6,fetch(n,a);case 6:return s=e.sent,e.next=9,s.json();case 9:return c=e.sent,e.abrupt("return",{status:s.ok,body:c});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C={badges:{list:function(){return x("/machines/")},create:function(e){return x("/badges",{method:"POST",body:JSON.stringify(e)})},login:function(e){return x("/users/login/",{method:"POST",body:JSON.stringify(e)})},signup:function(e){return x("/users/signup/",{method:"POST",body:JSON.stringify(e)})},read:function(e){return x("/machines/".concat(e,"/"))},readservice:function(e){return x("/machines/".concat(e,"/services/"))},update:function(e,t){return x("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return x("/badges/".concat(e),{method:"DELETE"})}}},k=(a(24),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"lds-grid"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))}}]),a}(r.Component)),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!1,form:{email:"",password:""},error:null,access_token:""},e.handleChange=function(t){e.setState({form:Object(y.a)(Object(y.a)({},e.state.form),{},Object(N.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(b.a)(E.a.mark((function t(a){var r,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loading:!0,error:!0}),t.prev=2,t.next=5,C.badges.login(e.state.form);case 5:r=t.sent,e.setState({loading:!1,access_token:""}),r.status?(e.setState({access_token:r.body.acces_token}),localStorage.setItem("access_token",r.body.acces_token),e.props.history.push("/feed")):(n=r.body,e.setState({error:n}),console.log(n)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e.setState({loading:!1,error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Home"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"Home__col col-12 col-md-4"},n.a.createElement("img",{src:h.a,alt:"Deica Logo",className:"img-fluid mb-2"}),n.a.createElement("h1",null,"Sistema De Servicios de Mantenimiento"),n.a.createElement(_,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error}),this.state.loading&&n.a.createElement(k,null)),n.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},n.a.createElement("img",{src:O.a,alt:"Astronauts",className:"img-fluid p-10",height:"50%",width:"50%"}))))))}}]),a}(n.a.Component),M=(a(43),a(44),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"lds-grid"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))}}]),a}(r.Component));var A=function(){return n.a.createElement("div",{className:"PageLoading"},n.a.createElement(M,null))},T=(a(45),a(18)),V=a.n(T),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return this.props.machine.picture?n.a.createElement("div",{className:"MachinesListItem"},n.a.createElement("div",null,n.a.createElement("img",{className:"MachineImg",src:this.props.machine.picture,alt:"machineimage"})),n.a.createElement("div",null,n.a.createElement("strong",null,"Nombre De M\xe1quina: ",this.props.machine.name,n.a.createElement("br",null),"N\xfamero De Serie: ",this.props.machine.serial_number),n.a.createElement("br",null),"Modelo: ",this.props.machine.model,n.a.createElement("br",null),"Acerca de :",this.props.machine.about,n.a.createElement("br",null),"Proximo Servicio :",this.props.machine.next_service)):n.a.createElement("div",{className:"MachinesListItem"},n.a.createElement("img",{className:"MachineImg",src:V.a,alt:"imagen"}),n.a.createElement("div",null,n.a.createElement("strong",null,"Nombre De M\xe1quina: ",this.props.machine.name,n.a.createElement("br",null),"N\xfamero De Serie: ",this.props.machine.serial_number),n.a.createElement("br",null),"Modelo: ",this.props.machine.model,n.a.createElement("br",null),"Acerca de :",this.props.machine.about,n.a.createElement("br",null),"Proximo Servicio :",this.props.machine.next_service))}}]),a}(n.a.Component),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return 0===this.props.machines.length?n.a.createElement("div",null,n.a.createElement("h3",null,"M\xe1quinas no encontradas")):n.a.createElement("div",{className:"MachinesList"},n.a.createElement("ul",{className:"list-unstyled"},this.props.machines.map((function(e){return n.a.createElement("li",{key:e.serial_number},n.a.createElement(u.b,{className:"text-reset text-decoration-none",to:"/machines/".concat(e.serial_number)},n.a.createElement(L,{machine:e})))}))))}}]),a}(n.a.Component);a(46);var P=function(e){return n.a.createElement("div",{className:"PageError"},e.error.message)&&n.a.createElement("div",{className:"PageError"},e.error.detail)},B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,error:null,data:void 0},e.fetchData=Object(b.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,C.badges.list();case 4:a=t.sent,e.setState({data:a}),a.status?e.setState({loading:!1}):(e.setState({loading:!1,error:a.body}),console.log(e.state.error)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return!0===this.state.loading?n.a.createElement(A,null):this.state.error?n.a.createElement("div",null,n.a.createElement(P,{error:this.state.error})):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Machines"},n.a.createElement("div",{className:"Machines__container"}),n.a.createElement(I,{machines:this.state.data.body.results})))}}]),a}(n.a.Component),F=a(28),J=a.n(F),R=(a(47),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.model,e.about),a=(e.next_service,e.serial_number,e.email,e.name_user),r=e.picture;return n.a.createElement("div",{className:"Badge"},n.a.createElement("div",{className:"Badge__section-name"},r&&n.a.createElement("img",{src:r,alt:"image",className:"machineimage"}),!r&&n.a.createElement("img",{src:V.a,alt:"image",className:"machineimage"})),n.a.createElement("div",{className:"Badge__section-info"},n.a.createElement("h3",null,"Descripci\xf3n: ",t),n.a.createElement("div",null,"Due\xf1o: ",a)))}}]),a}(n.a.Component)),q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(e){console.log("Button was clicked")},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.props.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Name"),n.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"name",value:this.props.formValues.name})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Serial Number"),n.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"serial_number",value:this.props.formValues.serial_number})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Model"),n.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"model",value:this.props.formValues.model})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Descripci\xf3n"),n.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"about",value:this.props.formValues.about})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Proximo Sericio"),n.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"next_service",value:this.props.formValues.next_servicex})),n.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary"},"Save"),this.props.error&&n.a.createElement("p",null,this.props.error.message)))}}]),a}(n.a.Component),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!1,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.handleChange=function(t){e.setState({form:Object(y.a)(Object(y.a)({},e.state.form),{},Object(N.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(b.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loading:!0,error:null}),t.prev=2,t.next=5,C.badges.create(e.state.form);case 5:e.setState({loading:!1}),e.props.history.push("/feed"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return this.state.loading?n.a.createElement(A,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"BadgeNew__hero"},n.a.createElement("img",{className:"img-fluid",src:J.a,alt:"Logo"})),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement(R,{firstName:this.state.form.firstName||"FIRST NAME",lastName:this.state.form.lastName||"LAST NAME",twitter:this.state.form.twitter||"TWITTER",jobTitle:this.state.form.jobTitle||"JOB TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"})),n.a.createElement("div",null,n.a.createElement("h1",null,"New Attendant"),n.a.createElement(q,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})))))}}]),a}(n.a.Component),H=(a(48),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.props.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.email,name:"email",placeholder:"email",type:"email"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.email),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.username,name:"username",placeholder:"username",type:"text"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.username),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.phone_number,name:"phone_number",placeholder:"telefono",type:"text"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.phone_number),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.password,name:"password",placeholder:"contrase\xf1a",type:"password"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.password),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.password_confirmation,name:"password_confirmation",placeholder:"contrase\xf1a",type:"password"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.password_confirmation),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.first_name,name:"first_name",placeholder:"nombre",type:"text"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.first_name),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{onChange:this.props.onChange,value:this.props.formValues.last_name,name:"last_name",placeholder:"Apellidos",type:"text"})),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.last_name),n.a.createElement("button",{className:"btn btn-primary"},"Registrarte"),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.message),this.props.error&&n.a.createElement("p",{className:"text-danger"},this.props.error.non_field_errors)))}}]),a}(n.a.Component)),W=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!1,form:{email:"",username:"",phone_number:"",password:"",password_confirmation:"",first_name:"",last_name:""},error:null,access_token:""},e.handleChange=function(t){e.setState({form:Object(y.a)(Object(y.a)({},e.state.form),{},Object(N.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(b.a)(E.a.mark((function t(a){var r,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({loading:!0,error:!0}),t.prev=2,t.next=5,C.badges.signup(e.state.form);case 5:r=t.sent,e.setState({loading:!1}),r.status?e.props.history.push("/"):(n=r.body,e.setState({error:n}),console.log(n)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e.setState({loading:!1,error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Signup"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"Signup__col"},n.a.createElement("img",{src:h.a,alt:"Deica Logo",className:"Signup_img"}),n.a.createElement("h1",null,"Registro"),n.a.createElement(H,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error}),this.state.loading&&n.a.createElement(k,null)))))}}]),a}(n.a.Component),U=(a(49),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"MachinesListItem"},n.a.createElement("div",null,n.a.createElement("strong",null,this.props.service.name),n.a.createElement("br",null),this.props.service.about,n.a.createElement("br",null),this.props.service.service_date))}}]),a}(n.a.Component)),$=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return 0===this.props.services.length?(console.log(this.props.services.length),n.a.createElement("div",null,n.a.createElement("h3",null,"Sin Servicios"))):n.a.createElement("div",{className:"servicesList"},n.a.createElement("ul",{className:"list-unstyled"},this.props.services.map((function(t){return n.a.createElement("li",{key:t.id},t.is_active&&e.props.is_active&&n.a.createElement(U,{service:t}),!t.is_active&&!e.props.is_active&&n.a.createElement(U,{service:t}))}))))}}]),a}(n.a.Component);var G=function(e){var t=e.machine,a=e.services.body.results;return n.a.createElement("div",null,n.a.createElement("div",{className:"BadgeDetails__hero"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("h1",null," Nombre: ",t.machine.name)),n.a.createElement("div",{className:"col-6 BadgeDetails__hero-attendant-name"},n.a.createElement("h1",null,"Modelo: ",t.machine.model,"  ",n.a.createElement("br",null),"Serial: ",t.machine.serial_number))))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(R,{name:t.machine.name,model:t.machine.model,about:t.machine.about,next_service:t.machine.next_service,serial_number:t.machine.serial_number,email:t.user[0].email,name_user:t.user[0].first_name,picture:t.machine.picture})),n.a.createElement("div",{className:"col"},n.a.createElement("h2",null,"Servicios no realizados"),n.a.createElement($,{services:a,is_active:!0}),n.a.createElement("h2",null,"Servicios realizados"),n.a.createElement("div",null,n.a.createElement($,{services:a,is_active:!1})),n.a.createElement("div",null)))))},K=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,error:null,data:void 0,service:void 0},e.fetchData=Object(b.a)(E.a.mark((function t(){var a,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),console.log(e.props.match.params.machineserial_number),t.prev=2,t.next=5,C.badges.read(e.props.match.params.machineserial_number);case 5:return a=t.sent,t.next=8,C.badges.readservice(e.props.match.params.machineserial_number);case 8:r=t.sent,e.setState({loading:!1,data:a.body,services:r}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),e.setState({loading:!1,error:t.t0});case 15:case"end":return t.stop()}}),t,null,[[2,12]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?n.a.createElement("div",null,n.a.createElement(A,null)):this.state.error?n.a.createElement(P,{error:this.state.error}):n.a.createElement(G,{machine:this.state.data,services:this.state.services})}}]),a}(n.a.Component);var Q=function(){return n.a.createElement(u.a,null,n.a.createElement(v,null,n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",component:D}),n.a.createElement(f.a,{exact:!0,path:"/Signup",component:W}),n.a.createElement(f.a,{exact:!0,path:"/Feed",component:B}),n.a.createElement(f.a,{exact:!0,path:"/machines/new",component:z}),n.a.createElement(f.a,{exact:!0,path:"/machines/:machineserial_number",component:K}))))};a(50),a(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.bdca5c9b.chunk.js.map