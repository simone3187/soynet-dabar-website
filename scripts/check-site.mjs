import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const base=new URL(process.argv[2]||'http://localhost:3000');
if(!['localhost','127.0.0.1'].includes(base.hostname)) throw new Error('Local verification only.');
const paths=['/','/pricing','/contact?product=hybrid','/checkout','/resources','/privacy','/terms','/solutions/cloud','/solutions/hybrid','/solutions/onpremise','/solutions/broadcast'];
for(const path of paths){const r=await fetch(new URL(path,base));assert.equal(r.status,200,path);const html=await r.text();assert.match(html,/<h1[ >]/,path+' heading');assert.match(html,/SOYNET/,path+' branding');assert.doesNotMatch(html,/Internal Server Error/,path);}
for(const file of ['cloud.pdf','hybrid.pdf','onpremise.pptx','broadcast.pptx']){const response=await fetch(new URL('/brochures/'+file,base));assert.equal(response.status,200,file);const local=await readFile('public/brochures/'+file);const remote=Buffer.from(await response.arrayBuffer());const hash=b=>createHash('sha256').update(b).digest('hex');assert.equal(hash(remote),hash(local),file+' download integrity');}
const missing=await fetch(new URL('/does-not-exist',base));assert.equal(missing.status,404);
const invalid=await fetch(new URL('/api/quotes',base),{method:'POST',headers:{'Content-Type':'application/json',Origin:base.origin},body:JSON.stringify({id:'INVALID',code:'INVALID'})});assert.equal(invalid.status,410);assert.equal(invalid.headers.get('cache-control'),'no-store');
const crossOrigin=await fetch(new URL('/api/quotes',base),{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://other.example'},body:'{}'});assert.equal(crossOrigin.status,410);
const missingConsent=await fetch(new URL('/api/inquiries',base),{method:'POST',headers:{'Content-Type':'application/json',Origin:base.origin},body:'{}'});assert.equal(missingConsent.status,400);
console.log('PASS: 11 pages, 4 brochure hashes, 404, retired quote API, inquiry validation.');
