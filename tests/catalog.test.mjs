import test from 'node:test';
import assert from 'node:assert/strict';
import {productMenu,inquiryProducts,inquiryRecipients,supportOptions} from '../lib/catalog.mjs';
import {validateInquiry,inquiryDraft} from '../lib/inquiries.mjs';
const base={name:'테스트',organization:'검증 기관',email:'qa@example.test',purpose:'quote',message:'제품별 상담 요청 전달 검증입니다.',consent:true,scale:'운영자 2명, 이용자 100명, 3시간'};
test('every menu product and support mode is accepted and preserved in the draft',()=>{for(const p of productMenu)for(const [mode,label] of Object.entries(supportOptions)){const data=validateInquiry({...base,product:p.id,supportMode:mode});const draft=inquiryDraft(data);assert.ok(draft.body.includes(p.inquiryName));assert.ok(draft.body.includes(label));assert.ok(draft.body.includes(base.scale));assert.deepEqual(draft.recipients,['jungpark@soynet.io','simone3187@soynet.io']);assert.deepEqual(data.recipients,inquiryRecipients);}});
test('unsupported or missing operator modes are rejected',()=>{for(const mode of [undefined,'invalid','__proto__',[]])assert.throws(()=>validateInquiry({...base,product:'cloud',supportMode:mode}));});
test('menu and inquiry ids are unique and all eight products are available',()=>{assert.equal(productMenu.length,8);assert.equal(new Set(inquiryProducts.map(p=>p.id)).size,inquiryProducts.length);});
