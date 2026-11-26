export const productMenu = [
  {id:'cloud',name:'DABAR AI 통역',inquiryName:'DABAR AI 통역'},
  {id:'receiver',name:'DABAR AI 리시버',inquiryName:'DABAR 리시버 (송/수신기)',description:'관광가이드의 설명을 다국어로 통역하여 단체 관광객의 휴대폰에 전달합니다. 관광객은 자신의 언어로 번역된 글과 통역 음성을 함께 확인할 수 있습니다.',image:'/images/receiver-tour.svg',imageAlt:'관광가이드의 설명이 다국어로 통역되어 관광객의 휴대폰에 글과 음성으로 전달되는 흐름',features:['관광가이드의 설명을 다국어로 통역','단체 관광객의 개인 휴대폰으로 안내 전달','번역된 글과 통역 음성으로 관광 설명 확인'],file:'/brochures/cloud.pdf',format:'PDF',brochureNote:'기존 클라우드 종합 브로셔의 Receiver 소개를 참고하세요.'},
  {id:'docent',name:'DABAR QR 도슨트',inquiryName:'DABAR QR 도슨트',description:'박물관·전시관의 작품 QR 코드를 휴대폰으로 스캔하고 원하는 언어를 선택하세요. 작품 설명을 선택한 언어의 글과 음성 오디오로 감상할 수 있습니다.',image:'/images/docent-museum.png',imageAlt:'박물관 전시물 앞에서 QR 코드를 스캔하고 휴대폰으로 작품의 음성 해설을 듣는 관람객',features:['작품 옆 QR 코드를 휴대폰으로 스캔','관람객이 원하는 안내 언어 선택','번역된 작품 설명을 글과 음성 오디오로 제공'],file:'/brochures/cloud.pdf',format:'PDF',brochureNote:'기존 클라우드 종합 브로셔의 QR Docent 소개를 참고하세요.'},
  {id:'broadcast',name:'DABAR 메시지 방송',inquiryName:'DABAR 메시지 방송'},
  {id:'hybrid',name:'AI 행사 통역',inquiryName:'AI 행사 통역'},
  {id:'onpremise',name:'보안 DABAR AI 통역서버',inquiryName:'보안 DABAR 통역서버'},
  {id:'secure-meeting',name:'보안 DABAR AI 회의시스템',inquiryName:'보안 DABAR 회의시스템',description:'기업 또는 기관의 회의 업무를 자동화하는 솔루션입니다. 조직의 회의 운영 방식과 보안 정책에 맞춰 도입 구성을 안내합니다.',features:['기업·기관의 회의 업무 자동화','회의 운영 방식과 자동화 범위 협의','내부망·서버 및 보안 요구사항 확인']},
  {id:'optimization',name:'AI M/L 최적화 솔루션',inquiryName:'AI M/L 최적화 솔루션',description:'AI 모델 경량화와 추론 가속 기술을 바탕으로 운영 환경에 맞는 최적화를 상담합니다.',features:['대상 모델과 실행 환경 확인','성능·자원 사용 요구사항 협의','적용 및 검증 범위 상담']}
];
export const inquiryProducts=[{id:'unsure',name:'아직 잘 모르겠어요'},...productMenu.map(p=>({id:p.id,name:p.inquiryName}))];
export const supportOptions={onsite:'현장지원',remote:'리모트지원',self:'자체운영'};
export const inquiryRecipients=['jungpark@soynet.io','simone3187@soynet.io'];
export const inquiryMailto='mailto:'+inquiryRecipients.join(',');
