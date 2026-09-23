# SOYNET · DABAR 홈페이지 MVP

Next.js App Router 기반의 한국어 반응형 사이트입니다. 공개 브로셔는 public/brochures에 있습니다. 홈페이지 공개 자산에는 투자유치 자료를 포함하지 않습니다.

## 실행

Node.js 22 이상, pnpm을 사용합니다.

```sh
npx --yes pnpm@11.19.0 install --frozen-lockfile
npx --yes pnpm@11.19.0 dev
# 검증 및 운영 실행
npx --yes pnpm@11.19.0 test
npx --yes pnpm@11.19.0 build
npx --yes pnpm@11.19.0 start
```

`.env.example`을 `.env.local`로 복사하여 환경에 맞게 설정합니다. 기본값은 메일 초안 방식의 상담과 검색 인덱싱 금지입니다. 온라인 결제 기능은 제거했습니다.

## Vercel 자동 배포

1. 이 `website` 폴더를 Git 저장소로 올립니다. 상위 폴더 전체를 저장소로 삼는 경우 Root Directory를 `website`로 지정합니다. 상위 `research` 및 투자유치 PDF를 배포하지 마세요.
2. Vercel에서 Git 저장소를 Import하고 Framework Preset으로 Next.js, Node.js 22 이상을 선택합니다. 포함된 `vercel.json`이 검증한 pnpm 11.19.0을 명시적으로 실행하므로 Vercel의 기본 pnpm 버전과 무관하게 같은 lockfile로 설치합니다. 별도 Corepack 환경변수는 필요하지 않습니다.
3. Preview 환경은 `SITE_INDEXABLE=false`로 설정합니다. 실제 고객 견적이나 비밀키를 Preview에 넣지 않습니다.
4. MVP를 승인한 뒤 production branch를 `main`으로 지정하고 도메인을 연결합니다. 이후 브랜치 push는 미리보기, main merge는 운영 배포가 됩니다.
5. 공개 승인 후 Production에만 `SITE_INDEXABLE=true`, 실제 `SITE_URL`를 설정합니다.

[Vercel 공식 Git 배포 문서](https://vercel.com/docs/git)

Vercel 계정·저장소 연결은 별도로 필요합니다. 코드만으로 계정 연결이나 DNS 설정이 완료되지는 않습니다. 기존 홈페이지 도메인은 검수·승인 후 전환하세요.

## 문의 전달

기본 동작은 입력값을 바탕으로 고객이 검토할 수 있는 이메일 초안을 만들고, 고객의 메일 앱에서 직접 보내는 방식입니다. 초안 생성은 접수 완료가 아닙니다. 메일 앱이 없는 경우 내용 복사도 제공합니다.

선택적으로 `INQUIRY_WEBHOOK_URL`과 `INQUIRY_WEBHOOK_TOKEN`을 설정하면 서버가 HTTPS POST로 아래 JSON을 보냅니다. 수신 시스템은 요청을 영속 저장한 뒤 2xx를 응답해야 합니다. `Authorization: Bearer <token>`으로 인증합니다. 실패 시 접수 성공을 표시하지 않습니다.

```json
{"source":"soynet-website","requestId":"uuid","name":"...","organization":"...","email":"...","product":"cloud","purpose":"demo","languages":"한국어, 영어","scale":"100명","message":"...","consent":true,"receivedAt":"ISO datetime"}
```

문의 폼 테스트는 기본 메일 초안 모드로 수행했습니다. 실제 고객 데이터를 외부 시스템에 보내는 시험은 별도로 진행해야 합니다. 수신 시스템은 requestId를 기준으로 중복 저장을 방지하고, 운영 환경에서 Vercel Firewall 등으로 API 요청 제한을 설정하세요. 개인정보 처리 안내를 실제 수집·보관·삭제 정책에 맞게 확정한 뒤 webhook을 활성화하세요.

## 콘텐츠 운영

- 제품 정보: `lib/products.js`
- 첫 화면: `components/Home.js`
- 공통 스타일: `app/globals.css`
- 문의 담당자: `lib/products.js`, `components/Shell.js`
- 공개 브로셔: `public/brochures/`
- 다국어 방송: 별도 솔루션 상세. 클라우드 통합 예정 및 알림톡 미연동을 명시합니다.
- 인수인계 및 수정 범위: `DEVELOPER-HANDOFF.md`

출시 전 판매 조건, 개인정보 안내, 담당 연락처, 지원 언어·서비스 범위를 실제 운영 기준으로 최종 확인하세요.
