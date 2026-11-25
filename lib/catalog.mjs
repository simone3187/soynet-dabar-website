export const productMenu = [
  {id:'cloud',name:'DABAR AI 통역',inquiryName:'DABAR AI 통역'},
  {id:'receiver',name:'DABAR AI 리시버',inquiryName:'DABAR 리시버 (송/수신기)',description:'투어와 현장 안내에서 모바일 송·수신기로 음성과 자막을 전달합니다.',features:['모바일 송·수신 방식','현장 안내 음성·자막','이용 단말과 네트워크 사전 확인'],file:'/brochures/cloud.pdf',format:'PDF',brochureNote:'기존 클라우드 종합 브로셔의 Receiver 소개를 참고하세요.'},
  {id:'docent',name:'DABAR QR 도슨트',inquiryName:'DABAR QR 도슨트',description:'QR을 통해 캠퍼스, 박물관, 전시 공간의 다국어 안내를 제공합니다.',features:['QR 기반 공간 안내','시설·전시물 다국어 소개','안내 콘텐츠와 운영 범위 협의'],file:'/brochures/cloud.pdf',format:'PDF',brochureNote:'기존 클라우드 종합 브로셔의 QR Docent 소개를 참고하세요.'},
  {id:'broadcast',name:'DABAR 메시지 방송',inquiryName:'DABAR 메시지 방송'},
  {id:'hybrid',name:'AI 행사 통역',inquiryName:'AI 행사 통역'},
  {id:'onpremise',name:'보안 DABAR AI 통역서버',inquiryName:'보안 DABAR 통역서버'},
  {id:'secure-meeting',name:'보안 DABAR AI 회의시스템',inquiryName:'보안 DABAR 회의시스템',description:'조직의 회의 방식과 보안 정책에 맞는 다국어 회의 환경을 상담합니다.',features:['회의 참여 인원과 언어 확인','내부망·서버 및 보안 요구사항 협의','기존 회의 시스템 연동 범위 확인'],file:'/brochures/onpremise.pptx',format:'PPTX',brochureNote:'관련 자료로 기존 온프레미스 브로셔를 제공합니다. 회의시스템의 상세 구성과 제공 기능은 별도 상담합니다.'},
  {id:'optimization',name:'AI M/L 최적화 솔루션',inquiryName:'AI M/L 최적화 솔루션',description:'AI 모델 경량화와 추론 가속 기술을 바탕으로 운영 환경에 맞는 최적화를 상담합니다.',features:['대상 모델과 실행 환경 확인','성능·자원 사용 요구사항 협의','적용 및 검증 범위 상담']}
];
export const inquiryProducts=[{id:'unsure',name:'아직 잘 모르겠어요'},...productMenu.map(p=>({id:p.id,name:p.inquiryName}))];
export const supportOptions={onsite:'현장지원',remote:'리모트지원',self:'자체운영'};
export const inquiryRecipients=['jungpark@soynet.io','simone3187@soynet.io'];
export const inquiryMailto='mailto:'+inquiryRecipients.join(',');
