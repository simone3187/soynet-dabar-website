import Link from 'next/link';
import {Shell} from '../components/Shell';
export default function NotFound(){return <Shell><main id="main" className="container legal-page"><div className="eyebrow">404 · PAGE NOT FOUND</div><h1>페이지를 찾을 수 없습니다.</h1><p>주소를 확인하거나 솔루션 안내에서 필요한 정보를 찾아보세요.</p><Link href="/" className="button orange">홈으로 돌아가기</Link></main></Shell>}
