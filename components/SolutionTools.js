'use client';
import {useEffect} from 'react';
import {products} from '../lib/products';
export default function SolutionTools() {
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    try {
      Promise.resolve(context.registerTool({
        name:'get_dabar_solution',
        title:'DABAR 솔루션 정보 확인',
        description:'홈페이지와 동일한 DABAR 제품 기능, 도입 방식, 상담 전 확인사항을 읽습니다. 견적을 생성하거나 문의를 전송하지 않습니다.',
        inputSchema:{type:'object',properties:{product:{type:'string',enum:['cloud','hybrid','onpremise']}},required:['product'],additionalProperties:false},
        annotations:{readOnlyHint:true,untrustedContentHint:false},
        execute(input) {
          if(!input || Object.keys(input).length!==1) throw new Error('제품을 선택해 주세요.');
          const product=products.find(p=>p.id===input.product);
          if(!product) throw new Error('지원하지 않는 제품입니다.');
          return {name:product.name,description:product.description,mode:product.mode,features:product.features,requirements:product.requirements,price:product.note,path:'/solutions/'+product.id};
        }
      },{signal:lifecycle.signal})).catch(()=>{});
    } catch {}
    return ()=>lifecycle.abort();
  },[]);
  return null;
}
