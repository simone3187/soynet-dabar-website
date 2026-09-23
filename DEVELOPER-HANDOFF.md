# 개발 인수인계

현재 서비스: https://soynet-dabar-mvp.vercel.app

## 구성
- `app/`: Next.js App Router 페이지와 서버 API
- `components/Home.js`: 메인, 활용 분야, 소이넷 소개
- `components/Shell.js`: 전체 페이지의 공통 헤더·푸터
- `lib/products.js`: 제품 정보와 상담 이메일
- `components/ContactForm.js`, `app/api/inquiries/route.js`: 상담 메일 초안 및 선택적 webhook
- `public/images/`, `public/brochures/`: 공개 이미지와 원본 브로셔
- `tests/`: 상담 유효성 검사 테스트
- `scripts/check-site.mjs`: 로컬 운영 서버의 페이지·다운로드 확인

## 2026-09-23 반영
첨부 수정요청사항의 스마트폰 사진 적용, 견적 확인 안내 제거, 헤더·모바일 메뉴·푸터 및 도입 페이지의 온라인 결제 진입점 제거, 회사 소개 교체.
이전 `/checkout` 주소는 `/contact`로 이동하며 `/api/quotes`는 410을 반환합니다. 결제 UI 및 처리 로직은 삭제했습니다.
회사 소개 내용은 사용자가 제공한 수정 요청을 반영했습니다. 원본 브로셔에는 과거 연락처가 남아 있을 수 있습니다.

## 인계 범위
실제 통역 서비스 서버, PG, 사용자 계정 서비스는 이 저장소에 포함되지 않습니다. 상담은 기본적으로 사용자의 메일 앱에서 전송하며, 초안 생성만으로 접수되지 않습니다.
환경변수와 인증정보, Vercel 연결 정보는 Git에 포함하지 않습니다. 개발자에게 GitHub 저장소 접근 권한과 필요한 Vercel 권한을 별도로 부여하세요.
