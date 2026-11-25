# 개발 인수인계

## 2026-11-25 제품 및 상담 개편
- `lib/catalog.mjs`에서 8개 제품 메뉴, 상담 선택값, 운영자 지원 방식과 두 수신자를 관리합니다.
- 기존 cloud/hybrid/onpremise 주소는 유지하고 제품 표시명만 변경했습니다. 추가 제품은 동일한 상세 경로 체계를 사용합니다.
- 상담의 `supportMode`는 onsite/remote/self 중 하나가 필수입니다. 메일 초안과 선택적 webhook 데이터 모두 지원 방식과 두 수신자 정보를 포함합니다.
- 기본 수신자는 jungpark@soynet.io, simone3187@soynet.io입니다. 기본 모드에서는 고객이 메일 앱에서 실제 전송해야 합니다. 자동 발송 시스템은 별도 연결이 필요합니다.
- `components/Portfolio.js`는 제공된 포트폴리오와 YouTube 2개 링크를 표시합니다.
- 행사 통역 브로셔는 새 hybrid.pdf를 사용합니다. 나머지 자료는 기존 원본을 유지하며, 관련 종합 브로셔를 공유하는 제품에는 안내 문구를 표시합니다.

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
