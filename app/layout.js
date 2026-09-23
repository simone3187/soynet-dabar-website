import './globals.css';
import './pages.css';
import './navigation.css';
export const metadata = {
  title: {default:'소이넷 SOYNET | DABAR AI 통역', template:'%s | SOYNET'},
  description:'강의와 회의, 국제행사, 보안이 필요한 내부망까지. DABAR 클라우드·하이브리드·온프레미스 AI 통역을 비교하고 우리 조직에 맞게 도입하세요.',
  robots: {index:process.env.SITE_INDEXABLE === 'true', follow:process.env.SITE_INDEXABLE === 'true'},
  icons: {icon:'/favicon.svg'}
};
export default function RootLayout({children}) {return <html lang="ko" data-scroll-behavior="smooth"><body>{children}</body></html>;}
