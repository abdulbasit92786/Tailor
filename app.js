import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const firebaseConfig={apiKey:'AIzaSyDsoWnSGzzt3BRuL5fIhq7dfg2fqyibM1U',authDomain:'tailor-web-f1f1c.firebaseapp.com',projectId:'tailor-web-f1f1c',storageBucket:'tailor-web-f1f1c.firebasestorage.app',messagingSenderId:'129811668871',appId:'1:129811668871:web:586357e9e696a9652ffd22'};
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
export {onAuthStateChanged,signInWithEmailAndPassword,signOut,collection,getDocs,addDoc,updateDoc,deleteDoc,doc,serverTimestamp,query,orderBy};
export const $=id=>document.getElementById(id); export const esc=v=>String(v??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
export const num=v=>Math.max(0,Number(String(v??'').replace(/,/g,''))||0);
export const fields=[['length','لمبائی'],['tera','تیرا'],['sleeve','آستین'],['neck','گلہ'],['chest','چھاتی'],['waist','کمر'],['daman','دامن'],['shalwarLength','شلوار لمبائی مکمل'],['pancha','پانچہ']];
export const designs=[['twoPiece','ٹو پیس'],['band','بین'],['roundDaman','گول دامن'],['squareDaman','چورس دامن'],['bothSides','دوبغل'],['front','سامنے'],['shalwarPocket','شلوار جیب'],['tilaGoot','تیلا گوٹ'],['fitCuff','فِٹ کف'],['simpleSleeve','سادہ آستین'],['cuffed','کف دار']];
export function requireAuth(cb){onAuthStateChanged(auth,u=>u?cb(u):location.replace('login.html'));}
export function nav(active){return `<header><div class="brand"><span class="brandmark">✂</span><div><b>Tailor</b><small>سادہ حساب</small></div></div><nav><a class="${active==='home'?'on':''}" href="index.html">ہوم</a><a class="${active==='customers'?'on':''}" href="customers.html">محفوظ کسٹمر</a><a class="${active==='new'?'on':''}" href="new-user.html">نیا آرڈر</a><a class="${active==='pending'?'on':''}" href="pending.html">پینڈنگ</a></nav><button id="logout" class="iconbtn" title="Logout">↪</button></header>`}
