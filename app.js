import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, enableIndexedDbPersistence, writeBatch, Timestamp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

const firebaseConfig={apiKey:'AIzaSyDsoWnSGzzt3BRuL5fIhq7dfg2fqyibM1U',authDomain:'tailor-web-f1f1c.firebaseapp.com',projectId:'tailor-web-f1f1c',storageBucket:'tailor-web-f1f1c.firebasestorage.app',messagingSenderId:'129811668871',appId:'1:129811668871:web:586357e9e696a9652ffd22'};
const firebaseApp=initializeApp(firebaseConfig); export const auth=getAuth(firebaseApp); export const db=getFirestore(firebaseApp);
try{ enableIndexedDbPersistence(db).catch(()=>{}); }catch(e){}
export {collection,getDocs,addDoc,updateDoc,deleteDoc,doc,serverTimestamp,writeBatch,Timestamp,onAuthStateChanged,signOut,signInWithEmailAndPassword};
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
export function nav(active){
 const en=lang()==='en';
 document.documentElement.lang=en?'en':'ur';
 document.documentElement.dir=en?'ltr':'rtl';
 const L=(ur,en)=>lang()==='en'?en:ur;
 return `<header class="top">
 <a class="brand" href="index.html">✂️ <span>${L('درزی مینیجر','Tailor Manager')}</span></a>
 <div class="top-actions">
  <a class="icon-btn search-top" href="search.html" title="${L('تلاش','Search')}" aria-label="${L('تلاش','Search')}">🔎</a>
  <button class="icon-btn" id="langBtn" title="${L('English پر جائیں','Switch to English')}">${en?'اردو':'EN'}</button>
  <button class="icon-btn" id="logoutBtn" title="${L('لاگ آؤٹ','Logout')}">↪</button>
 </div></header>
 <nav class="nav">
  <a class="${active==='home'?'active':''}" href="index.html">⌂ <span>${L('ہوم','Home')}</span></a>
  <a class="${active==='customers'?'active':''}" href="customers.html">👤 <span>${L('محفوظ کسٹمرز','Saved Customers')}</span></a>
  <a class="${active==='new'?'active':''}" href="new-user.html">＋ <span>${L('نیا آرڈر','New Order')}</span></a>
  <a class="${active==='pending'?'active':''}" href="pending.html">🧵 <span>${L('پینڈنگ','Pending')}</span></a>
  <a class="${active==='complete'?'active':''}" href="completed.html">✓ <span>${L('مکمل','Completed')}</span></a>
  <a class="${active==='menu'?'active':''}" href="menu.html">☰ <span>${L('مینیو','Menu')}</span></a>
 </nav>`;
}
export function bindNav(){ $('langBtn')?.addEventListener('click',()=>{localStorage.setItem('lang',lang()==='en'?'ur':'en');location.reload()}); $('logoutBtn')?.addEventListener('click',()=>signOut(auth).then(()=>location.href='login.html')); }
export function requireAuth(cb){onAuthStateChanged(auth,u=>{if(!u)location.replace('login.html');else cb(u)});}
export function safeObject(obj){return obj&&typeof obj==='object'&&!Array.isArray(obj)?obj:{};}
export function normalizeMeasurements(src={}){const o={};fields.forEach(([k])=>o[k]=String(src?.[k]??'').trim());return o;}
export function normalizeDesigns(src={}){const o={};designs.forEach(([k])=>o[k]=!!src?.[k]);return o;}
export function dateText(v){try{if(v?.toDate)return v.toDate().toLocaleDateString(lang()==='en'?'en-PK':'ur-PK'); if(v)return new Date(v).toLocaleDateString(lang()==='en'?'en-PK':'ur-PK')}catch(e){}return '-'}
