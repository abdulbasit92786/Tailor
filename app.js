import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

const firebaseConfig={apiKey:'AIzaSyDsoWnSGzzt3BRuL5fIhq7dfg2fqyibM1U',authDomain:'tailor-web-f1f1c.firebaseapp.com',projectId:'tailor-web-f1f1c',storageBucket:'tailor-web-f1f1c.firebasestorage.app',messagingSenderId:'129811668871',appId:'1:129811668871:web:586357e9e696a9652ffd22'};
const firebaseApp=initializeApp(firebaseConfig); export const auth=getAuth(firebaseApp); export const db=getFirestore(firebaseApp);
try{ enableIndexedDbPersistence(db).catch(()=>{}); }catch(e){}
export {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,serverTimestamp,onAuthStateChanged,signOut,signInWithEmailAndPassword};
export const fields=[['length','لمبائی','Length'],['tera','تیرا','Tera'],['sleeve','آستین','Sleeve'],['neck','گلہ','Neck'],['chest','چھاتی','Chest'],['waist','کمر','Waist'],['daman','دامن','Daman'],['shalwarLength','شلوار لمبائی مکمل','Complete Shalwar Length'],['pancha','پانچہ','Pancha']];
export const designs=[['twoPiece','ٹو پیس','Two Piece'],['band','بین','Band'],['roundDaman','گول دامن','Round Daman'],['squareDaman','چورس دامن','Square Daman'],['bothSides','دوبغل','Both Sides'],['front','سامنے','Front'],['shalwarPocket','شلوار جیب','Shalwar Pocket'],['tilaGoot','تیلا گوٹ','Tila Goot'],['fitCuff','فٹ کف','Fit Cuff'],['simpleSleeve','سادہ آستین','Simple Sleeve'],['cuffed','کف دار','Cuffed']];
export const $=id=>document.getElementById(id);
export const esc=v=>String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
export const lang=()=>localStorage.getItem('lang')==='en'?'en':'ur';
export const tr=(ur,en)=>lang()==='en'?en:ur;
export const value=id=>{const el=$(id);return el?String(el.value??'').trim():''};
export const checked=id=>!!$(id)?.checked;
export const setValue=(id,v)=>{const el=$(id);if(el)el.value=v??''};
export const setChecked=(id,v)=>{const el=$(id);if(el)el.checked=!!v};
export function nav(active){const en=lang()==='en';document.documentElement.lang=en?'en':'ur';document.documentElement.dir=en?'ltr':'rtl';return `<header class="top"><a class="brand" href="index.html">✂️ <span>${en?'Tailor Manager':'درزی مینیجر'}</span></a><div class="top-actions"><a class="icon-btn" href="search.html" title="${en?'Search':'تلاش'}" aria-label="${en?'Search':'تلاش'}">🔎</a><button class="icon-btn" id="langBtn" title="${en?'Switch to Urdu':'Switch to English'}">${en?'اردو':'EN'}</button><button class="icon-btn" id="logoutBtn" title="${en?'Logout':'لاگ آؤٹ'}">↪</button></div></header><nav class="nav"><a class="${active==='home'?'active':''}" href="index.html">⌂ <span>${en?'Home':'ہوم'}</span></a><a class="${active==='customers'?'active':''}" href="customers.html">👤 <span>${en?'Saved Customers':'محفوظ کسٹمرز'}</span></a><a class="${active==='new'?'active':''}" href="new-user.html">＋ <span>${en?'New Order':'نیا آرڈر'}</span></a><a class="${active==='pending'?'active':''}" href="pending.html">🧵 <span>${en?'Pending':'پینڈنگ'}</span></a><a class="${active==='complete'?'active':''}" href="completed.html">✓ <span>${en?'Completed':'مکمل'}</span></a></nav>`}
export function bindNav(){ $('langBtn')?.addEventListener('click',()=>{localStorage.setItem('lang',lang()==='en'?'ur':'en');location.reload()}); $('logoutBtn')?.addEventListener('click',()=>signOut(auth).then(()=>location.href='login.html')); }
export function requireAuth(cb){onAuthStateChanged(auth,u=>{if(!u)location.replace('login.html');else cb(u)});}
export function safeObject(obj){return obj&&typeof obj==='object'&&!Array.isArray(obj)?obj:{};}
export function normalizeMeasurements(src={}){const o={};fields.forEach(([k])=>o[k]=String(src?.[k]??'').trim());return o;}
export function normalizeDesigns(src={}){const o={};designs.forEach(([k])=>o[k]=!!src?.[k]);return o;}
export function dateText(v){try{if(v?.toDate)return v.toDate().toLocaleDateString(lang()==='en'?'en-PK':'ur-PK'); if(v)return new Date(v).toLocaleDateString(lang()==='en'?'en-PK':'ur-PK')}catch(e){}return '-'}
