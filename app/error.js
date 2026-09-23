'use client';
export default function ErrorPage({reset}){return <main id="main" className="container legal-page"><div className="eyebrow">PLEASE TRY AGAIN</div><h1>페이지를 불러오지 못했습니다.</h1><p>잠시 후 다시 시도해 주세요. 견적·결제 처리 여부는 담당자에게 확인할 수 있습니다.</p><button className="button orange" onClick={reset}>다시 불러오기</button><p><a href="/">홈으로 이동</a></p></main>}
