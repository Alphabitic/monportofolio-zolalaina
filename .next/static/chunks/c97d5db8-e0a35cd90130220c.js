"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{3069:function(a,b,c){c.d(b,{EK:function(){return ah},ET:function(){return ci},ad:function(){return bD},hJ:function(){return bH}});var d,e,f,g=c(5816),h=c(8463),i=c(3333),j=c(4444);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class k{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}k.UNAUTHENTICATED=new k(null),k.GOOGLE_CREDENTIALS=new k("google-credentials-uid"),k.FIRST_PARTY=new k("first-party-uid"),k.MOCK_USER=new k("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let l="9.9.4",m=new i.Yd("@firebase/firestore");function n(a,...b){if(m.logLevel<=i.in.DEBUG){let c=b.map(q);m.debug(`Firestore (${l}): ${a}`,...c)}}function o(a,...b){if(m.logLevel<=i.in.ERROR){let c=b.map(q);m.error(`Firestore (${l}): ${a}`,...c)}}function p(a,...b){if(m.logLevel<=i.in.WARN){let c=b.map(q);m.warn(`Firestore (${l}): ${a}`,...c)}}function q(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function r(a="Unexpected state"){let b=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+a;throw o(b),Error(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s="cancelled",t="unknown",u="invalid-argument",v="deadline-exceeded",w="not-found",x="permission-denied",y="unauthenticated",z="resource-exhausted",A="failed-precondition",B="aborted",C="out-of-range",D="unimplemented",E="internal",F="unavailable";class G extends j.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class J{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(k.UNAUTHENTICATED))}shutdown(){}}class K{constructor(a){this.auth=null,a.onInit(a=>{this.auth=a})}getToken(){return this.auth?this.auth.getToken().then(a=>{var b;return a?("string"==typeof a.accessToken||r(),new I(a.accessToken,new k(this.auth.getUid()))):null}):Promise.resolve(null)}invalidateToken(){}start(a,b){}shutdown(){}}class L{constructor(a,b,c,d){this.t=a,this.i=b,this.o=c,this.u=d,this.type="FirstParty",this.user=k.FIRST_PARTY,this.h=new Map}l(){var a;return this.u?this.u():(("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)&&r(),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);let a=this.l();return a&&this.h.set("Authorization",a),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class M{constructor(a,b,c,d){this.t=a,this.i=b,this.o=c,this.u=d}getToken(){return Promise.resolve(new L(this.t,this.i,this.o,this.u))}start(a,b){a.enqueueRetryable(()=>b(k.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(a){this.m=a,this.appCheck=null,a.onInit(a=>{this.appCheck=a})}getToken(){return this.appCheck?this.appCheck.getToken().then(a=>{var b;return a?("string"==typeof a.token||r(),new N(a.token)):null}):Promise.resolve(null)}invalidateToken(){}start(a,b){}shutdown(){}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class Q{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new Q("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof Q&&a.projectId===this.projectId&&a.database===this.database}}class R{constructor(a,b,c){void 0===b?b=0:b>a.length&&r(),void 0===c?c=a.length-b:c>a.length-b&&r(),this.segments=a,this.offset=b,this.len=c}get length(){return this.len}isEqual(a){return 0===R.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof R?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(a){if(a.length<this.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}isImmediateParentOf(a){if(this.length+1!==a.length)return!1;for(let b=0;b<this.length;b++)if(this.get(b)!==a.get(b))return!1;return!0}forEach(a){for(let b=this.offset,c=this.limit();b<c;b++)a(this.segments[b])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let c=Math.min(a.length,b.length);for(let d=0;d<c;d++){let e=a.get(d),f=b.get(d);if(e<f)return -1;if(e>f)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class S extends R{construct(a,b,c){return new S(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...a){let b=[];for(let c of a){if(c.indexOf("//")>=0)throw new G(u,`Invalid segment (${c}). Paths must not contain // in them.`);b.push(...c.split("/").filter(a=>a.length>0))}return new S(b)}static emptyPath(){return new S([])}}let T=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends R{construct(a,b,c){return new U(a,b,c)}static isValidIdentifier(a){return T.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(a){let b=[],c="",d=0,e=()=>{if(0===c.length)throw new G(u,`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);b.push(c),c=""},f=!1;for(;d<a.length;){let g=a[d];if("\\"===g){if(d+1===a.length)throw new G(u,"Path has trailing escape character: "+a);let h=a[d+1];if("\\"!==h&&"."!==h&&"`"!==h)throw new G(u,"Path has invalid escape sequence: "+a);c+=h,d+=2}else"`"===g?(f=!f,d++):"."!==g||f?(c+=g,d++):(e(),d++)}if(e(),f)throw new G(u,"Unterminated ` in path: "+a);return new U(b)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class V{constructor(a){this.path=a}static fromPath(a){return new V(S.fromString(a))}static fromName(a){return new V(S.fromString(a).popFirst(5))}static empty(){return new V(S.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===S.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return S.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new V(new S(a.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function W(a,b,c){if(!c)throw new G(u,`Function ${a}() cannot be called with an empty ${b}.`)}function X(a){if(!V.isDocumentKey(a))throw new G(u,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function Y(a){if(V.isDocumentKey(a))throw new G(u,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function Z(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":r()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns whether a variable is either undefined or null.
 */ function $(a){return null==a}function _(a){return 0===a&&1/a== -1/0}/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let aa={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};function ab(a){if(void 0===a)return o("RPC_ERROR","HTTP error has no status"),t;switch(a){case 200:return"ok";case 400:return A;case 401:return y;case 403:return x;case 404:return w;case 409:return B;case 416:return C;case 429:return z;case 499:return s;case 500:return t;case 501:return D;case 503:return F;case 504:return v;default:return a>=200&&a<300?"ok":a>=400&&a<500?A:a>=500&&a<600?E:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A Rest-based connection that relies on the native HTTP stack
 * (e.g. `fetch` or a polyfill).
 */ (f=e||(e={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";class ac extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.p=b+"://"+a.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}v(a,b,c,d,e){let f=this.T(a,b);n("RestConnection","Sending: ",f,c);let g={};return this.I(g,d,e),this.A(a,f,g,c).then(a=>(n("RestConnection","Received: ",a),a),b=>{throw p("RestConnection",`${a} failed with error: `,b,"url: ",f,"request:",c),b})}R(a,b,c,d,e,f){return this.v(a,b,c,d,e)}I(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+l,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}T(a,b){let c=aa[a];return`${this.p}/v1/${b}:${c}`}}{constructor(a,b){super(a),this.P=b}V(a,b){throw Error("Not supported by FetchConnection")}async A(a,b,c,d){let e=JSON.stringify(d),f;try{f=await this.P(b,{method:"POST",headers:c,body:e})}catch(g){throw new G(ab(g.status),"Request failed with error: "+g.statusText)}if(!f.ok)throw new G(ab(f.status),"Request failed with error: "+f.statusText);return f.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the HTTP connection for the REST API. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function ad(a){let b="undefined"!=typeof self&&(self.crypto||self.msCrypto),c=new Uint8Array(a);if(b&&"function"==typeof b.getRandomValues)b.getRandomValues(c);else for(let d=0;d<a;d++)c[d]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ae{static N(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",b=Math.floor(256/a.length)*a.length,c="";for(;c.length<20;){let d=ad(40);for(let e=0;e<d.length;++e)c.length<20&&d[e]<b&&(c+=a.charAt(d[e]%a.length))}return c}}function af(a,b){return a<b?-1:a>b?1:0}function ag(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class ah{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new G(u,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new G(u,"Timestamp seconds out of range: "+a)}static now(){return ah.fromMillis(Date.now())}static fromDate(a){return ah.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new ah(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?af(this.nanoseconds,a.nanoseconds):af(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class ai{constructor(a){this.timestamp=a}static fromTimestamp(a){return new ai(a)}static min(){return new ai(new ah(0,0))}static max(){return new ai(new ah(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aj(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function ak(a,b){for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class al{constructor(a,b){this.comparator=a,this.root=b||an.EMPTY}insert(a,b){return new al(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,an.BLACK,null,null))}remove(a){return new al(this.comparator,this.root.remove(a,this.comparator).copy(null,null,an.BLACK,null,null))}get(a){let b=this.root;for(;!b.isEmpty();){let c=this.comparator(a,b.key);if(0===c)return b.value;c<0?b=b.left:c>0&&(b=b.right)}return null}indexOf(a){let b=0,c=this.root;for(;!c.isEmpty();){let d=this.comparator(a,c.key);if(0===d)return b+c.left.size;d<0?c=c.left:(b+=c.left.size+1,c=c.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new am(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new am(this.root,a,this.comparator,!1)}getReverseIterator(){return new am(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new am(this.root,a,this.comparator,!0)}}class am{constructor(a,b,c,d){this.isReverse=d,this.nodeStack=[];let e=1;for(;!a.isEmpty();)if(e=b?c(a.key,b):1,b&&d&&(e*=-1),e<0)a=this.isReverse?a.left:a.right;else{if(0===e){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class an{constructor(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:an.RED,this.left=null!=d?d:an.EMPTY,this.right=null!=e?e:an.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new an(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(a,b,c){let d=this,e=c(a,d.key);return(d=e<0?d.copy(null,null,null,d.left.insert(a,b,c),null):0===e?d.copy(null,b,null,null,null):d.copy(null,null,null,null,d.right.insert(a,b,c))).fixUp()}removeMin(){if(this.left.isEmpty())return an.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(a,b){let c,d=this;if(0>b(a,d.key))d.left.isEmpty()||d.left.isRed()||d.left.left.isRed()||(d=d.moveRedLeft()),d=d.copy(null,null,null,d.left.remove(a,b),null);else{if(d.left.isRed()&&(d=d.rotateRight()),d.right.isEmpty()||d.right.isRed()||d.right.left.isRed()||(d=d.moveRedRight()),0===b(a,d.key)){if(d.right.isEmpty())return an.EMPTY;c=d.right.min(),d=d.copy(c.key,c.value,null,null,d.right.removeMin())}d=d.copy(null,null,null,null,d.right.remove(a,b))}return d.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,an.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,an.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw r();let a=this.left.check();if(a!==this.right.check())throw r();return a+(this.isRed()?0:1)}}an.EMPTY=null,an.RED=!0,an.BLACK=!1,an.EMPTY=new class{constructor(){this.size=0}get key(){throw r()}get value(){throw r()}get color(){throw r()}get left(){throw r()}get right(){throw r()}copy(a,b,c,d,e){return this}insert(a,b,c){return new an(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class ao{constructor(a){this.comparator=a,this.data=new al(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,b){let c=this.data.getIteratorFrom(a[0]);for(;c.hasNext();){let d=c.getNext();if(this.comparator(d.key,a[1])>=0)return;b(d.key)}}forEachWhile(a,b){let c;for(c=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();c.hasNext();)if(!a(c.getNext().key))return}firstAfterOrEqual(a){let b=this.data.getIteratorFrom(a);return b.hasNext()?b.getNext().key:null}getIterator(){return new ap(this.data.getIterator())}getIteratorFrom(a){return new ap(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof ao)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(a){let b=new ao(this.comparator);return b.data=a,b}}class ap{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class aq{constructor(a){this.fields=a,a.sort(U.comparator)}static empty(){return new aq([])}unionWith(a){let b=new ao(U.comparator);for(let c of this.fields)b=b.add(c);for(let d of a)b=b.add(d);return new aq(b.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return ag(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Converts a Base64 encoded string to a binary string. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class ar{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new ar(b)}static fromUint8Array(a){let b=function(a){let b="";for(let c=0;c<a.length;++c)b+=String.fromCharCode(a[c]);return b}(a);return new ar(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(a){let b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return af(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}ar.EMPTY_BYTE_STRING=new ar("");let as=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function at(a){var b,c;if(!a&&r(),"string"==typeof a){let d=0,e=as.exec(a);if(!e&&r(),e[1]){let f=e[1];d=Number(f=(f+"000000000").substr(0,9))}let g=new Date(a);return{seconds:Math.floor(g.getTime()/1e3),nanos:d}}return{seconds:au(a.seconds),nanos:au(a.nanos)}}function au(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function av(a){return"string"==typeof a?ar.fromBase64String(a):ar.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function aw(a){var b,c;return"server_timestamp"===(null===(c=((null===(b=null==a?void 0:a.mapValue)|| void 0===b?void 0:b.fields)||{}).__type__)|| void 0===c?void 0:c.stringValue)}function ax(a){let b=at(a.mapValue.fields.__local_write_time__.timestampValue);return new ah(b.seconds,b.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ay={fields:{__type__:{stringValue:"__max__"}}};function az(a){var b;return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?aw(a)?4:"__max__"===((((b=a).mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:r()}function aA(a,b){var c,d,e,f;if(a===b)return!0;let g=az(a);if(g!==az(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return ax(a).isEqual(ax(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=at(a.timestampValue),d=at(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return c=a,d=b,av(c.bytesValue).isEqual(av(d.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return e=a,f=b,au(e.geoPointValue.latitude)===au(f.geoPointValue.latitude)&&au(e.geoPointValue.longitude)===au(f.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return au(a.integerValue)===au(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=au(a.doubleValue),d=au(b.doubleValue);return c===d?_(c)===_(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return ag(a.arrayValue.values||[],b.arrayValue.values||[],aA);case 10:return function(a,b){let c=a.mapValue.fields||{},d=b.mapValue.fields||{};if(aj(c)!==aj(d))return!1;for(let e in c)if(c.hasOwnProperty(e)&&(void 0===d[e]||!aA(c[e],d[e])))return!1;return!0}(a,b);default:return r()}}function aB(a,b){return void 0!==(a.values||[]).find(a=>aA(a,b))}function aC(a,b){if(a===b)return 0;let c=az(a),d=az(b);if(c!==d)return af(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return af(a.booleanValue,b.booleanValue);case 2:return function(a,b){let c=au(a.integerValue||a.doubleValue),d=au(b.integerValue||b.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(a,b);case 3:return aD(a.timestampValue,b.timestampValue);case 4:return aD(ax(a),ax(b));case 5:return af(a.stringValue,b.stringValue);case 6:return function(a,b){let c=av(a),d=av(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(a,b){let c=a.split("/"),d=b.split("/");for(let e=0;e<c.length&&e<d.length;e++){let f=af(c[e],d[e]);if(0!==f)return f}return af(c.length,d.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=af(au(a.latitude),au(b.latitude));return 0!==c?c:af(au(a.longitude),au(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(a,b){let c=a.values||[],d=b.values||[];for(let e=0;e<c.length&&e<d.length;++e){let f=aC(c[e],d[e]);if(f)return f}return af(c.length,d.length)}(a.arrayValue,b.arrayValue);case 10:return function(a,b){if(a===ay&&b===ay)return 0;if(a===ay)return 1;if(b===ay)return -1;let c=a.fields||{},d=Object.keys(c),e=b.fields||{},f=Object.keys(e);d.sort(),f.sort();for(let g=0;g<d.length&&g<f.length;++g){let h=af(d[g],f[g]);if(0!==h)return h;let i=aC(c[d[g]],e[f[g]]);if(0!==i)return i}return af(d.length,f.length)}(a.mapValue,b.mapValue);default:throw r()}}function aD(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return af(a,b);let c=at(a),d=at(b),e=af(c.seconds,d.seconds);return 0!==e?e:af(c.nanos,d.nanos)}function aE(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function aF(a){return!!a&&"arrayValue"in a}function aG(a){return!!a&&"nullValue"in a}function aH(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function aI(a){return!!a&&"mapValue"in a}function aJ(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let b={mapValue:{fields:{}}};return ak(a.mapValue.fields,(a,c)=>b.mapValue.fields[a]=aJ(c)),b}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let d=0;d<(a.arrayValue.values||[]).length;++d)c.arrayValue.values[d]=aJ(a.arrayValue.values[d]);return c}return Object.assign({},a)}class aK{constructor(a){this.value=a}static empty(){return new aK({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!aI(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=aJ(b)}setAll(a){let b=U.emptyPath(),c={},d=[];a.forEach((a,e)=>{if(!b.isImmediateParentOf(e)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=e.popLast()}a?c[e.lastSegment()]=aJ(a):d.push(e.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(a){let b=this.field(a.popLast());aI(b)&&b.mapValue.fields&&delete b.mapValue.fields[a.lastSegment()]}isEqual(a){return aA(this.value,a.value)}getFieldsMap(a){let b=this.value;b.mapValue.fields||(b.mapValue={fields:{}});for(let c=0;c<a.length;++c){let d=b.mapValue.fields[a.get(c)];aI(d)&&d.mapValue.fields||(d={mapValue:{fields:{}}},b.mapValue.fields[a.get(c)]=d),b=d}return b.mapValue.fields}applyChanges(a,b,c){for(let d of(ak(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new aK(aJ(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class aL{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new aL(a,0,ai.min(),ai.min(),aK.empty(),0)}static newFoundDocument(a,b,c){return new aL(a,1,b,ai.min(),c,0)}static newNoDocument(a,b){return new aL(a,2,b,ai.min(),aK.empty(),0)}static newUnknownDocument(a,b){return new aL(a,3,b,ai.min(),aK.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=aK.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=aK.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ai.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof aL&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new aL(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class aM{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.D=null}}function aN(a,b=null,c=[],d=[],e=null,f=null,g=null){return new aM(a,b,c,d,e,f,g)}class aO extends null{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(a,b,c){return a.isKeyField()?"in"===b||"not-in"===b?this.$(a,b,c):new aP(a,b,c):"array-contains"===b?new aT(a,c):"in"===b?new aU(a,c):"not-in"===b?new aV(a,c):"array-contains-any"===b?new aW(a,c):new aO(a,b,c)}static $(a,b,c){return"in"===b?new aQ(a,c):new aR(a,c)}matches(a){let b=a.data.field(this.field);return"!="===this.op?null!==b&&this.F(aC(b,this.value)):null!==b&&az(this.value)===az(b)&&this.F(aC(b,this.value))}F(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return r()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class aP extends null{constructor(a,b,c){super(a,b,c),this.key=V.fromName(c.referenceValue)}matches(a){let b=V.comparator(a.key,this.key);return this.F(b)}}class aQ extends null{constructor(a,b){super(a,"in",b),this.keys=aS("in",b)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class aR extends null{constructor(a,b){super(a,"not-in",b),this.keys=aS("not-in",b)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function aS(a,b){var c;return((null===(c=b.arrayValue)|| void 0===c?void 0:c.values)||[]).map(a=>V.fromName(a.referenceValue))}class aT extends null{constructor(a,b){super(a,"array-contains",b)}matches(a){let b=a.data.field(this.field);return aF(b)&&aB(b.arrayValue,this.value)}}class aU extends null{constructor(a,b){super(a,"in",b)}matches(a){let b=a.data.field(this.field);return null!==b&&aB(this.value.arrayValue,b)}}class aV extends null{constructor(a,b){super(a,"not-in",b)}matches(a){if(aB(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let b=a.data.field(this.field);return null!==b&&!aB(this.value.arrayValue,b)}}class aW extends null{constructor(a,b){super(a,"array-contains-any",b)}matches(a){let b=a.data.field(this.field);return!(!aF(b)||!b.arrayValue.values)&&b.arrayValue.values.some(a=>aB(this.value.arrayValue,a))}}class aX{constructor(a,b){this.position=a,this.inclusive=b}}class aY{constructor(a,b="asc"){this.field=a,this.dir=b}}function aZ(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function a$(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!aA(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class a_{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this.q=null,this.O=null,this.startAt,this.endAt}}function a0(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function a1(a){for(let b of a.filters)if(b.S())return b.field;return null}function a2(a){return null!==a.collectionGroup}function a3(a){var b;let c=b=a;if(null===c.q){c.q=[];let d=a1(c),e=a0(c);if(null!==d&&null===e)d.isKeyField()||c.q.push(new aY(d)),c.q.push(new aY(U.keyField(),"asc"));else{let f=!1;for(let g of c.explicitOrderBy)c.q.push(g),g.field.isKeyField()&&(f=!0);if(!f){let h=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c.q.push(new aY(U.keyField(),h))}}}return c.q}function a4(a){var b;let c=b=a;if(!c.O){if("F"===c.limitType)c.O=aN(c.path,c.collectionGroup,a3(c),c.filters,c.limit,c.startAt,c.endAt);else{let d=[];for(let e of a3(c)){let f="desc"===e.dir?"asc":"desc";d.push(new aY(e.field,f))}let g=c.endAt?new aX(c.endAt.position,c.endAt.inclusive):null,h=c.startAt?new aX(c.startAt.position,c.startAt.inclusive):null;c.O=aN(c.path,c.collectionGroup,d,c.filters,c.limit,g,h)}}return c.O}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ /**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function a5(a,b){var c,d;return"number"==typeof(c=b)&&Number.isInteger(c)&&!_(c)&&c<=Number.MAX_SAFE_INTEGER&&c>=Number.MIN_SAFE_INTEGER?{integerValue:""+(d=b)}:function(a,b){if(a.k){if(isNaN(b))return{doubleValue:"NaN"};if(b===1/0)return{doubleValue:"Infinity"};if(b=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_(b)?"-0":b}}(a,b)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class a6{constructor(){this._=void 0}}class a7 extends a6{}class a8 extends a6{constructor(a){super(),this.elements=a}}class a9 extends a6{constructor(a){super(),this.elements=a}}class ba extends a6{constructor(a,b){super(),this.C=a,this.L=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class bb{constructor(a,b){this.field=a,this.transform=b}}class bc{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new bc}static exists(a){return new bc(void 0,a)}static updateTime(a){return new bc(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}class bd{}class be extends bd{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class bf extends bd{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}class bg extends bd{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bh extends bd{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bi={asc:"ASCENDING",desc:"DESCENDING"},bj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class bk{constructor(a,b){this.databaseId=a,this.k=b}}function bl(a,b){return a.k?`${new Date(1e3*b.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+b.nanoseconds).slice(-9)}Z`:{seconds:""+b.seconds,nanos:b.nanoseconds}}function bm(a){var b;return!a&&r(),ai.fromTimestamp(function(a){let b=at(a);return new ah(b.seconds,b.nanos)}(a))}function bn(a,b){var c;return(c=a,new S(["projects",c.projectId,"databases",c.database])).child("documents").child(b).canonicalString()}function bo(a,b){return bn(a.databaseId,b.path)}function bp(a,b){var c,d;let e=function(a){var b;let c=S.fromString(a);return bu(c)||r(),c}(b);if(e.get(1)!==a.databaseId.projectId)throw new G(u,"Tried to deserialize key from different project: "+e.get(1)+" vs "+a.databaseId.projectId);if(e.get(3)!==a.databaseId.database)throw new G(u,"Tried to deserialize key from different database: "+e.get(3)+" vs "+a.databaseId.database);return new V(((c=e).length>4&&"documents"===c.get(4)||r(),c.popFirst(5)))}function bq(a,b){return bn(a.databaseId,b)}function br(a){return new S(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function bs(a,b,c){return{name:bo(a,b),fields:c.value.mapValue.fields}}function bt(a){return{fieldPath:a.canonicalString()}}function bu(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bv(a){return new bk(a,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ class bw{constructor(a,b,c=1e3,d=1.5,e=6e4){this.M=a,this.timerId=b,this.U=c,this.j=d,this.B=e,this.G=0,this.W=null,this.K=Date.now(),this.reset()}reset(){this.G=0}Y(){this.G=this.B}H(a){this.cancel();let b=Math.floor(this.G+this.J()),c=Math.max(0,Date.now()-this.K),d=Math.max(0,b-c);d>0&&n("ExponentialBackoff",`Backing off for ${d} ms (base delay: ${this.G} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.W=this.M.enqueueAfterDelay(this.timerId,d,()=>(this.K=Date.now(),a())),this.G*=this.j,this.G<this.U&&(this.G=this.U),this.G>this.B&&(this.G=this.B)}X(){null!==this.W&&(this.W.skipDelay(),this.W=null)}cancel(){null!==this.W&&(this.W.cancel(),this.W=null)}J(){return(Math.random()-.5)*this.G}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class bx extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.Z=c,this.C=d,this.tt=!1}et(){if(this.tt)throw new G(A,"The client has already been terminated.")}v(a,b,c){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.Z.v(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(t,a.toString())})}R(a,b,c,d){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.Z.R(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===y&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(t,a.toString())})}terminate(){this.tt=!0}}async function by(a,b){var c;let d=c=a,e=br(d.C)+"/documents",f={writes:b.map(a=>(function(a,b){var c,d,e,f;let g;if(b instanceof be)g={update:bs(a,b.key,b.value)};else if(b instanceof bg)g={delete:bo(a,b.key)};else if(b instanceof bf)g={update:bs(a,b.key,b.data),updateMask:function a(b){let c=[];return b.fields.forEach(a=>c.push(a.canonicalString())),{fieldPaths:c}}(b.fieldMask)};else{if(!(b instanceof bh))return r();g={verify:bo(a,b.key)}}return b.fieldTransforms.length>0&&(g.updateTransforms=b.fieldTransforms.map(a=>(function(a,b){let c=b.transform;if(c instanceof a7)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof a8)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof a9)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ba)return{fieldPath:b.field.canonicalString(),increment:c.L};throw r()})(0,a))),b.precondition.isNone||(g.currentDocument=(c=a,void 0!==(d=b.precondition).updateTime?{updateTime:(e=c,bl(e,(f=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:r())),g})(d.C,a))};await d.v("Commit",e,f)}async function bz(a,b){var c;let d=c=a,e=br(d.C)+"/documents",f={documents:b.map(a=>bo(d.C,a))},g=await d.R("BatchGetDocuments",e,f,b.length),h=new Map;g.forEach(a=>{var b,c;let e=(b=d.C,"found"in(c=a)?function(a,b){var c;b.found||r(),b.found.name,b.found.updateTime;let d=bp(a,b.found.name),e=bm(b.found.updateTime),f=new aK({mapValue:{fields:b.found.fields}});return aL.newFoundDocument(d,e,f)}(b,c):"missing"in c?function(a,b){var c,d;b.missing||r(),!b.readTime&&r();let e=bp(a,b.missing),f=bm(b.readTime);return aL.newNoDocument(e,f)}(b,c):r());h.set(e.key.toString(),e)});let i=[];return b.forEach(a=>{var b;let c=h.get(a.toString());c||r(),i.push(c)}),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bA=new Map;class bB{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new G(u,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new G(u,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new G(u,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class bC{constructor(a,b,c,d){this._authCredentials=a,this._appCheckCredentials=b,this._databaseId=c,this._app=d,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bB({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(A,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new G(A,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bB(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new J;switch(a.type){case"gapi":let b=a.client;return new M(b,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new G(u,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=bA.get(a);b&&(n("ComponentProvider","Removing Datastore"),bA.delete(a),b.terminate())}(this),Promise.resolve()}}function bD(a,b){let c="object"==typeof a?a:(0,g.Mq)();return(0,g.qX)(c,"firestore/lite").getImmediate({identifier:"string"==typeof a?a:b||"(default)"})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class bE{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bG(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new bE(this.firestore,a,this._key)}}class bF{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new bF(this.firestore,a,this._query)}}class bG extends bF{constructor(a,b,c){super(a,b,new a_(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new bE(this.firestore,null,new V(a))}withConverter(a){return new bG(this.firestore,a,this._path)}}function bH(a,b,...c){if(a=(0,j.m9)(a),W("collection","path",b),a instanceof bC){let d=S.fromString(b,...c);return Y(d),new bG(a,null,d)}{if(!(a instanceof bE||a instanceof bG))throw new G(u,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(S.fromString(b,...c));return Y(e),new bG(a.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class bI{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new G(u,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class bJ{constructor(a){this._byteString=a}static fromBase64String(a){try{return new bJ(ar.fromBase64String(a))}catch(b){throw new G(u,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new bJ(ar.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class bK{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class bL{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new G(u,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new G(u,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return af(this._lat,a._lat)||af(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bM=/^__.*__$/;class bN{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new bf(a,this.data,this.fieldMask,b,this.fieldTransforms):new be(a,this.data,b,this.fieldTransforms)}}class bO{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new bf(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function bP(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw r()}}class bQ{constructor(a,b,c,d,e,f){this.settings=a,this.databaseId=b,this.C=c,this.ignoreUndefinedProperties=d,void 0===e&&this.nt(),this.fieldTransforms=e||[],this.fieldMask=f||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(a){return new bQ(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.st({path:c,ot:!1});return d.ut(a),d}ct(a){var b;let c=null===(b=this.path)|| void 0===b?void 0:b.child(a),d=this.st({path:c,ot:!1});return d.nt(),d}at(a){return this.st({path:void 0,ot:!0})}ht(a){return b5(a,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}nt(){if(this.path)for(let a=0;a<this.path.length;a++)this.ut(this.path.get(a))}ut(a){if(0===a.length)throw this.ht("Document fields must not be empty");if(bP(this.rt)&&bM.test(a))throw this.ht('Document fields cannot begin and end with "__"')}}class bR{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.C=c||bv(a)}dt(a,b,c,d=!1){return new bQ({rt:a,methodName:b,ft:c,path:U.emptyPath(),ot:!1,lt:d},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function bS(a){let b=a._freezeSettings(),c=bv(a._databaseId);return new bR(a._databaseId,!!b.ignoreUndefinedProperties,c)}function bT(a,b,c,d,e,f={}){let g=a.dt(f.merge||f.mergeFields?2:0,b,c,e);b1("Data must be an object, but it was:",g,d);let h=b_(d,g),i,j;if(f.merge)i=new aq(g.fieldMask),j=g.fieldTransforms;else if(f.mergeFields){let k=[];for(let l of f.mergeFields){let m=b2(b,l,c);if(!g.contains(m))throw new G(u,`Field '${m}' is specified in your field mask but missing from your input data.`);b6(k,m)||k.push(m)}i=new aq(k),j=g.fieldTransforms.filter(a=>i.covers(a.field))}else i=null,j=g.fieldTransforms;return new bN(new aK(h),i,j)}class bU extends null{_toFieldTransform(a){if(2!==a.rt)throw 1===a.rt?a.ht(`${this._methodName}() can only appear at the top level of your update data`):a.ht(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof bU}}function bV(a,b,c){return new bQ({rt:3,ft:b.settings.ft,methodName:a._methodName,ot:c},b.databaseId,b.C,b.ignoreUndefinedProperties)}class bW extends null{_toFieldTransform(a){return new bb(a.path,new a7)}isEqual(a){return a instanceof bW}}function bX(a,b,c,d){let e=a.dt(1,b,c);b1("Data must be an object, but it was:",e,d);let f=[],g=aK.empty();ak(d,(a,d)=>{let h=b4(b,a,c);d=getModularInstance(d);let i=e.ct(h);if(d instanceof bU)f.push(h);else{let j=b$(d,i);null!=j&&(f.push(h),g.set(h,j))}});let h=new aq(f);return new bO(g,h,e.fieldTransforms)}function bY(a,b,c,d,e,f){let g=a.dt(1,b,c),h=[b2(b,d,c)],i=[e];if(f.length%2!=0)throw new G(u,`Function ${b}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let j=0;j<f.length;j+=2)h.push(b2(b,f[j])),i.push(f[j+1]);let k=[],l=aK.empty();for(let m=h.length-1;m>=0;--m)if(!b6(k,h[m])){let n=h[m],o=i[m];o=getModularInstance(o);let p=g.ct(n);if(o instanceof bU)k.push(n);else{let q=b$(o,p);null!=q&&(k.push(n),l.set(n,q))}}let r=new aq(k);return new bO(l,r,g.fieldTransforms)}function bZ(a,b,c,d=!1){return b$(c,a.dt(d?4:3,b))}function b$(a,b){if(b0(a=(0,j.m9)(a)))return b1("Unsupported field value:",b,a),b_(a,b);if(a instanceof bK)return function(a,b){if(!bP(b.rt))throw b.ht(`${a._methodName}() can only be used with update() and set()`);if(!b.path)throw b.ht(`${a._methodName}() is not currently supported inside arrays`);let c=a._toFieldTransform(b);c&&b.fieldTransforms.push(c)}(a,b),null;if(void 0===a&&b.ignoreUndefinedProperties)return null;if(b.path&&b.fieldMask.push(b.path),a instanceof Array){if(b.settings.ot&&4!==b.rt)throw b.ht("Nested arrays are not supported");return function(a,b){let c=[],d=0;for(let e of a){let f=b$(e,b.at(d));null==f&&(f={nullValue:"NULL_VALUE"}),c.push(f),d++}return{arrayValue:{values:c}}}(a,b)}return function(a,b){if(null===(a=(0,j.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return a5(b.C,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let c=ah.fromDate(a);return{timestampValue:bl(b.C,c)}}if(a instanceof ah){let d=new ah(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:bl(b.C,d)}}if(a instanceof bL)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof bJ){var e,f;return{bytesValue:(e=b.C,f=a._byteString,e.k?f.toBase64():f.toUint8Array())}}if(a instanceof bE){let g=b.databaseId,h=a.firestore._databaseId;if(!h.isEqual(g))throw b.ht(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${g.projectId}/${g.database}`);return{referenceValue:bn(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.ht(`Unsupported field value: ${Z(a)}`)}(a,b)}function b_(a,b){let c={};return!function(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}(a)?ak(a,(a,d)=>{let e=b$(d,b.it(a));null!=e&&(c[a]=e)}):b.path&&b.path.length>0&&b.fieldMask.push(b.path),{mapValue:{fields:c}}}function b0(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof ah||a instanceof bL||a instanceof bJ||a instanceof bE||a instanceof bK)}function b1(a,b,c){var d;if(!b0(c)||"object"!=typeof(d=c)||null===d||Object.getPrototypeOf(d)!==Object.prototype&&null!==Object.getPrototypeOf(d)){let e=Z(c);throw"an object"===e?b.ht(a+" a custom object"):b.ht(a+" "+e)}}function b2(a,b,c){if((b=(0,j.m9)(b))instanceof bI)return b._internalPath;if("string"==typeof b)return b4(a,b);throw b5("Field path arguments must be of type string or ",a,!1,void 0,c)}let b3=RegExp("[~\\*/\\[\\]]");function b4(a,b,c){if(b.search(b3)>=0)throw b5(`Invalid field path (${b}). Paths must not contain '~', '*', '/', '[', or ']'`,a,!1,void 0,c);try{return new bI(...b.split("."))._internalPath}catch(d){throw b5(`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,a,!1,void 0,c)}}function b5(a,b,c,d,e){let f=d&&!d.isEmpty(),g=void 0!==e,h=`Function ${b}() called with invalid data`;c&&(h+=" (via `toFirestore()`)"),h+=". ";let i="";return(f||g)&&(i+=" (found",f&&(i+=` in field ${d}`),g&&(i+=` in document ${e}`),i+=")"),new G(u,h+a+i)}function b6(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class b7{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new bE(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new b8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(a){if(this._document){let b=this._document.data.field(cb("DocumentSnapshot.get",a));if(null!==b)return this._userDataWriter.convertValue(b)}}}class b8 extends null{data(){return super.data()}}class b9{constructor(a,b){this._docs=b,this.query=a}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(a,b){this._docs.forEach(a,b)}}function ca(a,b){var c,d,e,f;return a=getModularInstance(a),b=getModularInstance(b),a instanceof b7&&b instanceof b7?a._firestore===b._firestore&&a._key.isEqual(b._key)&&(null===a._document?null===b._document:a._document.isEqual(b._document))&&a._converter===b._converter:a instanceof b9&&b instanceof b9&&(c=a.query,d=b.query,c=getModularInstance(c),d=getModularInstance(d),c instanceof bF&&d instanceof bF&&c.firestore===d.firestore&&(e=c._query,f=d._query,function(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!aZ(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!aA(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!a$(a.startAt,b.startAt)&&a$(a.endAt,b.endAt)}(a4(e),a4(f))&&e.limitType===f.limitType)&&c.converter===d.converter)&&ag(a.docs,b.docs,ca)}function cb(a,b){return"string"==typeof b?b4(a,b):b instanceof bI?b._internalPath:b._delegate._internalPath}function cc(a,b,c,d){if(c[0]=getModularInstance(c[0]),c[0]instanceof b7)return function(a,b,c,d,e){if(!d)throw new G(w,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);let f=[];for(let g of a3(a))if(g.field.isKeyField())f.push(aE(b,d.key));else{let h=d.data.field(g.field);if(aw(h))throw new G(u,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===h){let i=g.field.canonicalString();throw new G(u,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}f.push(h)}return new aX(f,e)}(a._query,a.firestore._databaseId,b,c[0]._document,d);{let e=bS(a.firestore);return function(a,b,c,d,e,f){let g=a.explicitOrderBy;if(e.length>g.length)throw new G(u,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let h=[];for(let i=0;i<e.length;i++){let j=e[i];if(g[i].field.isKeyField()){if("string"!=typeof j)throw new G(u,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof j}`);if(!a2(a)&& -1!==j.indexOf("/"))throw new G(u,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${j}' contains a slash.`);let k=a.path.child(S.fromString(j));if(!V.isDocumentKey(k))throw new G(u,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);let l=new V(k);h.push(aE(b,l))}else{let m=bZ(c,d,j);h.push(m)}}return new aX(h,f)}(a._query,a.firestore._databaseId,e,b,c,d)}}function cd(a,b,c){if("string"==typeof(c=getModularInstance(c))){if(""===c)throw new G(u,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!a2(b)&& -1!==c.indexOf("/"))throw new G(u,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);let d=b.path.child(S.fromString(c));if(!V.isDocumentKey(d))throw new G(u,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${d}' is not because it has an odd number of segments (${d.length}).`);return aE(a,new V(d))}if(c instanceof bE)return aE(a,c._key);throw new G(u,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Z(c)}.`)}function ce(a,b){if(!Array.isArray(a)||0===a.length)throw new G(u,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new G(u,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function cf(a,b,c){if(!c.isEqual(b))throw new G(u,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${b.toString()}' and so you must also use '${b.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function cg(a,b,c){return a?c&&(c.merge||c.mergeFields)?a.toFirestore(b,c):a.toFirestore(b):b}class ch extends null{constructor(a){super(),this.firestore=a}convertBytes(a){return new bJ(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new bE(this.firestore,null,b)}}function ci(a,b){let c=function(a,b,...c){if(a=(0,j.m9)(a),1===arguments.length&&(b=ae.N()),W("doc","path",b),a instanceof bC){let d=S.fromString(b,...c);return X(d),new bE(a,null,new V(d))}{if(!(a instanceof bE||a instanceof bG))throw new G(u,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(S.fromString(b,...c));return X(e),new bE(a.firestore,a instanceof bG?a.converter:null,new V(e))}}(a=function a(b,c){if("_delegate"in b&&(b=b._delegate),!(b instanceof c)){if(c.name===b.constructor.name)throw new G(u,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let d=Z(b);throw new G(u,`Expected type '${c.name}', but it was: ${d}`)}}return b}(a,bG)),d=cg(a.converter,b),e=bT(bS(a.firestore),"addDoc",c._key,d,null!==c.converter,{});return by(function a(b){var c,d,e,f,g,h,i,j,k;if(b._terminated)throw new G(A,"The client has already been terminated.");if(!bA.has(b)){n("ComponentProvider","Initializing Datastore");let l=(g=(c=b._databaseId,d=b.app.options.appId||"",e=b._persistenceKey,f=b._freezeSettings(),new P(c,d,e,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f.useFetchStreams)),new ac(g,fetch.bind(null))),m=bv(b._databaseId),o=(h=b._authCredentials,i=b._appCheckCredentials,j=l,k=m,new bx(h,i,j,k));bA.set(b,o)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ return bA.get(b)}(a.firestore),[e.toMutation(c._key,bc.exists(!1))]).then(()=>c)}function cj(a,b){if((a=getModularInstance(a)).firestore!==b)throw new G(u,"Provided document reference is from a different Firestore instance.");return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class ck{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(a){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new G(u,"Firestore transactions require all reads to be executed before all writes.");let b=await bz(this.datastore,a);return b.forEach(a=>this.recordVersion(a)),b}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new bg(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((a,b)=>{let c=V.fromPath(b);this.mutations.push(new bh(c,this.precondition(c)))}),await by(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw r();b=ai.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new G(B,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?b.isEqual(ai.min())?bc.exists(!1):bc.updateTime(b):bc.none()}preconditionForUpdate(a){let b=this.readVersions.get(a.toString());if(!this.writtenDocs.has(a.toString())&&b){if(b.isEqual(ai.min()))throw new G(u,"Can't update a document that doesn't exist.");return bc.updateTime(b)}return bc.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'document' implementation or null if not available. */ function cl(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class cm{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new H,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(a,b,c,d,e){let f=Date.now()+c,g=new cm(a,b,f,d,e);return g.start(c),g}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new G(s,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}l=`${g.Jn}_lite`,(0,g.Xd)(new h.wA("firestore/lite",(a,{instanceIdentifier:b,options:c})=>{let d=a.getProvider("app").getImmediate(),e=new bC(new K(a.getProvider("auth-internal")),new O(a.getProvider("app-check-internal")),function(a,b){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(u,'"projectId" not provided in firebase.initializeApp.');return new Q(a.options.projectId,b)}(d,b),d);return c&&e._setSettings(c),e},"PUBLIC").setMultipleInstances(!0)),(0,g.KN)("firestore-lite","3.4.15",""),(0,g.KN)("firestore-lite","3.4.15","esm2017")}}])