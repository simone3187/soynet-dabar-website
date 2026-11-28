import EnglishSite from '../../../components/EnglishSite';
import {notFound} from 'next/navigation';
import {englishProducts} from '../../../lib/english';
export const metadata={title:'SOYNET | DABAR AI Interpretation',description:'Explore DABAR AI interpretation products, compare deployment options, and contact SOYNET.'};
export default async function Page({params,searchParams}){const {slug=[]}=await params;const path=slug.join('/');const valid=['','pricing','resources','contact','privacy','terms','checkout',...englishProducts.map(p=>'solutions/'+p.id)];if(!valid.includes(path))notFound();const query=await searchParams;return <EnglishSite path={path} query={query}/>}
