import {inquiryProducts} from '../../lib/catalog.mjs';
import {Shell} from '../../components/Shell';
import ContactForm from '../../components/ContactForm';
export const metadata={title:'시연·도입 상담'};
export const dynamic='force-dynamic';
export default async function Page({searchParams}){const q=await searchParams;const product=inquiryProducts.some(p=>p.id===q.product)?q.product:'';return <Shell><main id="main"><section className="page-intro container"><div className="eyebrow">LET’S FIND YOUR SOLUTION</div><h1>우리 조직의 다음 소통을 시작하세요.</h1><p>제품 선택부터 시연·견적까지, 필요한 내용을 편하게 알려주세요.</p></section><ContactForm initialProduct={product} initialPurpose={q.type==='demo'?'demo':'consult'} canSubmit={Boolean(process.env.INQUIRY_WEBHOOK_URL&&process.env.INQUIRY_WEBHOOK_TOKEN)}/></main></Shell>}
