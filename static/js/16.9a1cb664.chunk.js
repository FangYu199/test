(this.webpackJsonpnsure=this.webpackJsonpnsure||[]).push([[16],{1424:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(173),o=n(126);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){this.emit(o.a.Update,e)},i.emitError=function(e){this.emit(o.a.Error,e)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},r}(r.EventEmitter)},2120:function(e,t,n){"use strict";n.r(t),n.d(t,"URI_AVAILABLE",(function(){return d})),n.d(t,"UserRejectedRequestError",(function(){return f})),n.d(t,"WalletConnectConnector",(function(){return p}));var r=n(1424),o=n(41);function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return(s=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function l(e){var t="function"===typeof Map?new Map:void 0;return(l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d="URI_AVAILABLE",f=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return i(t,e),t}(l(Error)),p=function(e){function t(t){var n,r=t.rpc,i=t.bridge,c=t.qrcode,a=t.pollingInterval;return 1!==Object.keys(r).length&&Object(o.a)(!1),(n=e.call(this,{supportedChainIds:Object.keys(r).map((function(e){return Number(e)}))})||this).rpc=r,n.bridge=i,n.qrcode=c,n.pollingInterval=a,n.handleChainChanged=n.handleChainChanged.bind(h(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(h(n)),n.handleDisconnect=n.handleDisconnect.bind(h(n)),n}i(t,e);var r=t.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate(),this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider=void 0),this.emitDeactivate()},r.activate=function(){try{var e=this,t=function(){function t(){return Promise.resolve(e.walletConnectProvider.enable().then((function(e){return e[0]})).catch((function(e){if("User closed modal"===e.message)throw new f;throw e}))).then((function(t){return e.walletConnectProvider.on("disconnect",e.handleDisconnect),e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),{provider:e.walletConnectProvider,account:t}}))}var n=function(){if(!e.walletConnectProvider.wc.connected)return Promise.resolve(e.walletConnectProvider.wc.createSession({chainId:Number(Object.keys(e.rpc)[0])})).then((function(){e.emit(d,e.walletConnectProvider.wc.uri)}))}();return n&&n.then?n.then(t):t()},r=function(){if(!e.walletConnectProvider)return Promise.resolve(Promise.all([n.e(0),n.e(5),n.e(10)]).then(n.t.bind(null,1954,7)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(t){e.walletConnectProvider=new t({bridge:e.bridge,rpc:e.rpc,qrcode:e.qrcode,pollingInterval:e.pollingInterval})}))}();return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},r.getProvider=function(){try{return Promise.resolve(this.walletConnectProvider)}catch(e){return Promise.reject(e)}},r.getChainId=function(){try{return Promise.resolve(this.walletConnectProvider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},r.getAccount=function(){try{return Promise.resolve(this.walletConnectProvider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged))},r.close=function(){try{var e;return Promise.resolve(null==(e=this.walletConnectProvider)?void 0:e.close()).then((function(){}))}catch(t){return Promise.reject(t)}},t}(r.a)}}]);
//# sourceMappingURL=16.9a1cb664.chunk.js.map