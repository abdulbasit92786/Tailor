import{initializeApp}from'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import{getAuth,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import{getFirestore,collection,doc,getDocs,getDoc,addDoc,setDoc,updateDoc,deleteDoc,query,orderBy,serverTimestamp}from'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
const cfg={apiKey:'AIzaSyDsoWnSGzzt3BRuL5fIhq7dfg2fqyibM1U',authDomain:'tailor-web-f1f1c.firebaseapp.com',projectId:'tailor-web-f1f1c',storageBucket:'tailor-web-f1f1c.firebasestorage.app',messagingSenderId:'129811668871',appId:'1:129811668871:web:586357e9e696a9652ffd22'};
export const app=initializeApp(cfg),auth=getAuth(app),db=getFirestore(app);export const $=id=>document.getElementById(id);export const val=id=>($(id)?.value||'').trim();export const n=v=>Math.max(0,Number(v)||0);
export const MEAS=[['length','لمبائی'],['tera','تیرا'],['sleeve','آستین'],['neck','گلہ'],['chest','چھاتی'],['waist','کمر'],['daman','دامن'],['shalwarLength','شلوار لمبائی'],['pancha','پانچہ']];
export const DES=[['twoPiece','ٹو پیس'],['band','بین'],['roundDaman','گول دامن'],['squareDaman','چورس دامن'],['bothSides','دوبغل'],['front','سامنے جیب'],['shalwarPocket','شلوار جیب'],['tilaGoot','تیلا گوٹ'],['fitCuff','فٹ کف'],['simpleSleeve','سادہ آستین'],['cuffed','کف دار']];
export function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
export function money(v){return n(v).toLocaleString('en-PK')+' روپے'}export function dt(v){if(!v)return '—';let d=v?.toDate?v.toDate():new Date(v);return isNaN(d)?'—':d.toLocaleString('ur-PK',{dateStyle:'medium',timeStyle:'short'})}
export function stamp(){return new Date().toISOString()}
export function nav(active){return `<nav><a href="index.html" class="${active==='index'?'on':''}">🏠<span>ہوم</span></a><a href="add-order.html" class="${active==='add'?'on':''}">➕<span>نیا آرڈر</span></a><a href="customers.html" class="${active==='customers'?'on':''}">👥<span>کسٹمرز</span></a><a href="new-users.html" class="${active==='new'?'on':''}">🆕<span>نیو یوزرز</span></a><a href="menu.html" class="${active==='menu'?'on':''}">☰<span>مینو</span></a></nav>`}
export async function requireUser(){return new Promise(r=>onAuthStateChanged(auth,u=>u?r(u):location.replace('login.html')))}
export async function allOrders(u){const s=await getDocs(collection(db,'users',u.uid,'orders'));return s.docs.map(d=>({id:d.id,...d.data()}))}
export async function allCustomers(u){const s=await getDocs(collection(db,'users',u.uid,'customers'));return s.docs.map(d=>({id:d.id,...d.data()}))}
export function orderPieces(o){return Array.isArray(o.pieces)?o.pieces:[{pieceNo:1,color:o.color||{name:'',hex:'#000'},measurements:o.measurements||{},designs:o.designs||{},totalAmount:n(o.totalAmount)}]}
export function statusLabel(s){return {pending:'Pending / زیرِ کام',ready:'Ready in Shop / تیار',delivered:'Delivered / ڈیلیور',cancelled:'Cancelled / منسوخ'}[s]||s}
