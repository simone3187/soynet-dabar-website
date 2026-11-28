import test from 'node:test';
import assert from 'node:assert/strict';
import {englishProducts} from '../lib/english.js';
import {productMenu} from '../lib/catalog.mjs';
test('English product routes match the Korean catalog and each product has translated content',()=>{assert.deepEqual(englishProducts.map(p=>p.id),productMenu.map(p=>p.id));for(const product of englishProducts){assert.ok(product.name&&product.description&&product.features.length,product.id);assert.doesNotMatch(product.name+product.description,/[가-힣]/)}});
test('Secure meeting has no unrelated brochure in English',()=>{assert.equal(englishProducts.find(p=>p.id==='secure-meeting').file,undefined)});
