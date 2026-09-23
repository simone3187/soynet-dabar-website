import test from 'node:test';
import assert from 'node:assert/strict';
import {validateInquiry,inquiryDraft} from '../lib/inquiries.mjs';
import {isSameOrigin} from '../lib/http.mjs';
test('browser origin uses destination host behind internal bind addresses',()=>{
  assert.equal(isSameOrigin(new Request('http://0.0.0.0:3000/api/inquiries',{headers:{origin:'http://localhost:3000',host:'localhost:3000'}})),true);
  assert.equal(isSameOrigin(new Request('https://internal.test/api/inquiries',{headers:{origin:'https://soynet.io',host:'soynet.io'}})),true);
  assert.equal(isSameOrigin(new Request('https://soynet.io/api/inquiries',{headers:{origin:'https://evil.test',host:'soynet.io','x-forwarded-host':'evil.test'}})),false);
  assert.equal(isSameOrigin(new Request('https://soynet.io/api/inquiries',{headers:{origin:'null',host:'soynet.io'}})),false);
});
const inquiry={name:'테스트',organization:'검증용 기관',email:'qa@example.test',product:'cloud',purpose:'demo',languages:'한국어, 영어',scale:'10명',message:'상담 메일 초안 검증을 위한 테스트입니다.',consent:true};
test('valid inquiry becomes a draft, never a delivery receipt',()=>{const normalized=validateInquiry(inquiry),draft=inquiryDraft(normalized);assert.equal(draft.mode,'draft');assert.match(draft.subject,/DABAR Cloud/);assert.match(draft.body,/qa@example.test/);assert.equal(draft.received,undefined);});
test('missing consent, invalid email, short message, unknown product and bot trap rejected',()=>{for(const patch of [{consent:false},{email:'invalid'},{message:'short'},{product:'__proto__'},{purpose:'toString'},{website:'spam'},{name:[]},{message:'x'.repeat(3001)}])assert.throws(()=>validateInquiry({...inquiry,...patch}));});
