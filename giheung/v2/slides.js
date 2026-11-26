/* 2026.11.26 AI 앱 활용법: 기능별 강의안 장표 (무엇·장점·언제·순서·결과물·지시문) — 그림·이모티콘 없이 */
(function(){
var D={
/* ---------------- ChatGPT ---------------- */
'ChatGPT|이미지 편집 화면':{t:'그림 전체를 다시 만들지 않고, 고칠 부분만 골라서 바꾸는 편집 화면',where:'만든 그림 누르기 → 오른쪽 위 [편집] → 붓으로 칠하기',
 what:'AI가 만든 그림이나 내가 올린 그림에서 바꾸고 싶은 곳만 붓으로 칠하고, 무엇으로 바꿀지 글로 적으면 그 부분만 다시 그려 주는 기능이에요.',
 pros:['잘 나온 그림을 버리지 않고 살릴 수 있어요','날짜·오타처럼 작은 실수만 고쳐요','배경·옷·소품을 원하는 대로 바꿔요'],
 when:['포스터 날짜가 바뀌었을 때','카드뉴스 글자에 오타가 났을 때','여름 행사 그림을 겨울용으로 다시 쓸 때'],
 how:['고칠 그림을 열어요','[편집]을 눌러 바꿀 부분만 붓으로 칠해요','"이 부분을 ○○로 바꿔 줘"라고 적어요','결과를 확인하고 마음에 들면 저장해요'],
 out:['날짜만 바뀐 행사 포스터','오타를 고친 카드뉴스 한 장','배경만 바뀐 같은 캐릭터 그림'],
 say:'칠한 부분의 날짜만 12월 18일로 바꿔 줘. 나머지 글자·인물·색·배치는 그대로 유지해 줘.',warn:'칠한 곳 밖도 조금 달라질 수 있어요. 저장 전에 글자와 전체 그림을 꼭 다시 확인하세요.'},
'ChatGPT|움짤 GIF':{t:'사진 한 장을 넣고 말하면, 몇 초짜리 움직이는 그림(GIF)으로 바꿔 주는 방법',where:'따로 메뉴 없음 → 새 채팅 → [+] → 사진 첨부 → "GIF로 만들어 줘"',
 what:'정지된 그림이나 캐릭터를 손 흔들기·박수·인사처럼 짧게 움직이는 GIF로 만드는 활용법이에요. 문자·단톡방·SNS에 붙이면 눈에 확 띄어요.',
 pros:['영상 편집 프로그램 없이 말로 만들어요','문자·카톡에 바로 붙일 수 있어요','같은 캐릭터로 여러 동작을 만들 수 있어요'],
 when:['아침 인사·행사 응원 문자 보낼 때','캠페인 참여를 부탁할 때','후원자에게 감사 인사 보낼 때'],
 how:['새 채팅을 열고 [+]로 그림을 넣어요','움직임을 고르고 "3초 GIF로"라고 말해요','처음과 끝이 이어지는지 재생해 봐요','GIF 파일로 내려받아요'],
 out:['손 흔들며 인사하는 캐릭터 GIF','박수 치며 응원하는 GIF','고개 숙여 감사하는 GIF'],
 say:'첨부한 캐릭터가 손 흔들며 인사하는 3초 GIF로 만들어 줘. 배경은 그대로, 처음과 끝이 자연스럽게 이어지게.',warn:'촬영·게시 동의를 받은 사진만 쓰고, 이용자 얼굴은 일러스트 느낌으로 바꾸세요.'},
'ChatGPT|라이브러리':{t:'내가 만든 그림이 모두 모여 있는 보관함 — 같은 캐릭터로 이어 만들기',where:'왼쪽 메뉴 → [이미지] 또는 [라이브러리]',
 what:'ChatGPT에서 만든 그림이 날짜별로 자동 저장되는 곳이에요. 예전 그림을 골라 "이 그림체로 이어서"라고 하면 같은 캐릭터·색으로 시리즈를 만들 수 있어요.',
 pros:['그림을 다시 찾느라 대화를 뒤지지 않아요','같은 캐릭터로 여러 장을 통일해요','지난달 그림을 이번 달 홍보에 다시 써요'],
 when:['카드뉴스 4~6장을 같은 그림체로 만들 때','매달 소식지에 같은 마스코트를 쓸 때','지난 행사 그림을 수정해 다시 쓸 때'],
 how:['왼쪽 메뉴에서 이미지(라이브러리)를 열어요','이어 쓸 그림을 골라요','"같은 캐릭터·그림체로 다음 장"이라고 요청해요','장마다 캐릭터·색이 같은지 확인해요'],
 out:['표지부터 마지막 장까지 같은 캐릭터 카드뉴스','매달 같은 마스코트가 나오는 소식지 그림','시리즈 안내 포스터'],
 say:'이 그림과 같은 캐릭터·그림체·색으로 카드뉴스 2장을 만들어 줘. 내용은 일시·장소·대상 세 줄이야.',warn:'장마다 캐릭터 얼굴·옷 색이 달라지지 않았는지 확인하세요.'},
'ChatGPT|내 dot':{t:'한 번 묻고 끝나는 대화가 아니라, 맡긴 일을 계속 챙겨 주는 업무 비서',where:'왼쪽 메뉴 → [내 dot]',
 what:'맡을 일과 쓸 앱을 한 번 정해 두면, 그 일을 이어서 지켜보고 정리해서 알려 주는 개인 비서 기능이에요.',
 pros:['같은 설명을 매번 다시 하지 않아요','새 소식이 생기면 정리해서 알려 줘요','중요한 일은 내 승인을 받고 진행해요'],
 when:['공모사업 공고를 계속 지켜봐야 할 때','행사 준비물·일정을 챙겨야 할 때','한 주 업무를 모아 주간 보고를 쓸 때'],
 how:['[내 dot]을 열어요','맡을 일을 한 문장으로 설명해요','쓸 앱(메일·캘린더 등)을 정해요','진행 상황을 확인하고 중요한 일은 승인해요'],
 out:['새 공모 마감일·지원 조건 정리표','행사 준비 체크리스트와 빠진 것 알림','주간 업무 보고 초안'],
 say:'너는 우리 팀 공모사업 담당이야. 장애인복지 새 공모가 뜨면 마감일·지원 금액·조건을 표로 정리해서 알려 줘.',warn:'메일 보내기·신청 같은 결정은 꼭 내가 확인한 뒤에 하게 하세요.'},
'ChatGPT|스페이스':{t:'대화 결과를 페이지·슬라이드로 만들고 동료와 함께 고치는 공동 작업 공간',where:'왼쪽 메뉴 → [스페이스]',
 what:'채팅에서 나온 내용을 문서 페이지로 옮겨 두고, 팀원들이 같이 보고 댓글로 고칠 수 있는 공간이에요. 페이지 안에서 @ChatGPT를 불러 표·요약을 바로 만들어요.',
 pros:['대화가 흩어지지 않고 한 페이지에 모여요','동료와 실시간으로 같이 고쳐요','회의 결과를 바로 공유 문서로 만들어요'],
 when:['사업 진행 상황을 팀이 함께 볼 때','회의 결과를 정리해 돌려 볼 때','보고용 슬라이드를 같이 만들 때'],
 how:['[스페이스]를 열고 새 페이지나 템플릿을 골라요','회의 메모를 붙여 넣어요','@ChatGPT로 표·요약을 요청해요','동료를 초대해 댓글로 고쳐요'],
 out:['할 일·담당·기한이 한 장에 있는 사업 대시보드','회의 결과 공유 페이지','대화 내용으로 만든 보고 슬라이드'],
 say:'@ChatGPT 이번 회의 메모를 할 일 표로 정리해 줘. 담당자·기한·진행 상태 칸을 넣어서.',warn:'유료 요금제 기능이에요. 공유 전에 받는 사람과 개인정보를 확인하세요.'},
'ChatGPT|예약':{t:'정한 시간에 ChatGPT가 알아서 일을 해 두는 자동 예약',where:'왼쪽 메뉴 또는 프로필 → [예약(작업)]',
 what:'"매주 월요일 8시"처럼 시간과 할 일을 정해 두면, 그 시간에 찾아보고 정리한 결과를 알림으로 보내 주는 기능이에요.',
 pros:['매번 같은 요청을 다시 쓰지 않아요','출근하면 정리된 결과가 와 있어요','한 번·매일·매주·매달 반복을 고를 수 있어요'],
 when:['매주 새 공모사업 소식을 확인할 때','매달 1일 홍보 문구 초안이 필요할 때','보고서 마감 전날 알림이 필요할 때'],
 how:['[예약]을 열고 새 예약을 만들어요','할 일을 한 문장으로 써요','요일·시간·반복을 정해요','알림이 오면 결과를 열어 확인해요'],
 out:['월요일 아침 공모 소식 정리표','매달 1일 이달의 행사 홍보 문구','마감 하루 전 확인 목록'],
 say:'매주 월요일 오전 8시에 장애인복지 분야 새 공모사업을 찾아 공모명·금액·마감일 표로 정리해 줘.',warn:'유료 요금제 기능이에요. 예약 화면에서 언제든 멈춤·수정·삭제할 수 있어요.'},
'ChatGPT|플러그인':{t:'내가 쓰는 앱을 연결해 그 안의 메일·문서·일정으로 바로 일하는 연결 기능',where:'[+] 또는 설정 → [플러그인(앱)] → 앱 찾기 → 연결',
 what:'Gmail·구글 드라이브·캘린더·Canva 같은 앱을 연결해 두면, 채팅에서 "드라이브에서 찾아 줘", "Canva로 만들어 줘"처럼 앱 안의 자료를 바로 꺼내 쓰는 기능이에요.',
 pros:['파일을 내려받아 다시 올릴 필요가 없어요','Canva를 불러 디자인을 바로 이어서 편집해요','메일·일정 확인을 대화 한 번으로 해요'],
 when:['드라이브에 있는 사업계획서를 요약할 때','만든 문구로 Canva 디자인을 바로 만들 때','받은 메일에 답장 초안을 쓸 때'],
 how:['[플러그인]에서 쓸 앱을 찾아요','로그인해서 연결을 허용해요','채팅에서 앱 이름을 넣어 요청해요','결과를 앱에서 열어 확인·수정해요'],
 out:['드라이브 문서 예산 부분 요약','Canva에서 바로 편집할 수 있는 포스터 시안','메일 답장 초안'],
 say:'Canva로 이 문구를 넣은 송년회 포스터 시안을 만들어 줘. 초록·주황 색, 큰 글씨로.',warn:'개인정보가 담긴 기관 메일·문서는 기관 방침을 확인한 뒤 연결하세요.'},
/* ---------------- 제미나이 ---------------- */
'제미나이|음악 30초':{t:'분위기와 주제를 말하면 가사가 있는 30초 노래를 만들어 주는 기능',where:'입력창 [+] → [음악 만들기]',
 what:'"밝고 신나게", "따뜻한 발라드"처럼 분위기와 주제를 적으면 가사와 목소리가 들어간 짧은 노래를 만들어 MP3로 받을 수 있어요.',
 pros:['악기·작곡을 몰라도 노래가 나와요','우리 프로그램 이름을 가사에 넣어요','행사 분위기에 맞는 음악을 바로 써요'],
 when:['프로그램 주제가가 필요할 때','행사 입장·오프닝 음악이 필요할 때','인식개선 캠페인 노래를 만들 때'],
 how:['입력창 [+]에서 음악 만들기를 골라요','분위기·주제·꼭 넣을 말을 적어요','들어 보고 가사를 고쳐 다시 만들어요','MP3로 저장해요'],
 out:['프로그램 이름이 들어간 30초 주제가','행사 오프닝 음악','캠페인 응원 노래'],
 say:'"함께해서 즐거운 하루" 주제로 밝고 신나는 30초 노래를 만들어 줘. 후렴은 두 번 반복해 줘.',warn:'실제 가수 목소리나 기존 노래 흉내는 만들지 마세요.'},
'제미나이|영상 만들기':{t:'장면을 글로 설명하면 소리까지 들어간 짧은 영상을 만들어 주는 기능',where:'입력창 [+] → [동영상 만들기]',
 what:'"공원에서 함께 걷는 장면, 천천히 다가가는 카메라"처럼 장면을 설명하면 8초 안팎의 영상이 소리와 함께 나와요.',
 pros:['촬영 없이 홍보 영상을 만들어요','카메라 움직임·색감까지 말로 정해요','쇼츠·로비 TV에 바로 써요'],
 when:['SNS 홍보 쇼츠가 필요할 때','복지관 로비 TV 안내 화면을 만들 때','행사 시작 영상이 필요할 때'],
 how:['입력창 [+]에서 동영상 만들기를 골라요','장소·인물·움직임·분위기를 적어요','결과를 보고 장면을 고쳐 다시 요청해요','MP4로 저장해요'],
 out:['8초 홍보 쇼츠','로비 TV 안내 영상','행사 오프닝 영상'],
 say:'공원에서 이용자들이 웃으며 함께 걷는 장면, 천천히 다가가는 카메라, 따뜻한 색감으로 8초 영상을 만들어 줘.',warn:'유료 요금제에서 쓸 수 있어요. 실제 이용자처럼 보이는 얼굴은 피하세요.'},
'제미나이|노트북':{t:'내가 넣은 자료 안에서만 답하고, 몇 쪽인지 출처까지 보여 주는 자료 공부방',where:'왼쪽 메뉴 → [새 노트북] → 자료(PDF) 넣기',
 what:'사업안내·지침 같은 PDF를 넣어 두면, 그 자료에 있는 내용으로만 답하고 근거가 된 쪽을 번호로 보여 줘요.',
 pros:['지어낸 답 없이 자료 근거로 답해요','두꺼운 지침에서 필요한 쪽을 바로 찾아요','오디오 개요로 귀로 들을 수 있어요'],
 when:['올해 지침에서 바뀐 점을 찾을 때','평가지표별 준비할 것을 정리할 때','신규 직원에게 지침을 설명할 때'],
 how:['새 노트북을 만들어요','지침·서식 PDF를 넣어요','궁금한 것을 질문해요','답 옆의 출처 번호를 눌러 원문을 확인해요'],
 out:['올해 바뀐 점 비교표(쪽수 포함)','평가 준비 목록','지침 오디오 요약'],
 say:'올해 사업안내에서 주간이용센터 부분이 작년과 달라진 점을 표로 정리해 줘. 쪽수도 함께 적어 줘.',warn:'자료에 없는 내용은 "자료에 없음"이라고 답하게 하세요.'},
'제미나이|캔버스':{t:'옆 화면에 문서·웹페이지·인포그래픽을 바로 만들어 보고 고치는 작업판',where:'입력창 [+] → [도구 더보기] → [Canvas]',
 what:'요청한 결과물이 채팅 옆 큰 화면에 열리고, 그 자리에서 글을 고치거나 버튼 하나로 웹페이지·인포그래픽·퀴즈로 바꿀 수 있어요.',
 pros:['결과를 바로 보면서 고쳐요','문서를 웹페이지·퀴즈로 한 번에 바꿔요','링크로 공유할 수 있어요'],
 when:['행사 안내를 링크로 보낼 때','지침을 한 장 인포그래픽으로 요약할 때','신규 직원 확인 퀴즈를 만들 때'],
 how:['도구 더보기에서 Canvas를 켜요','만들 것과 대상을 적어요','옆 화면에서 글·순서를 고쳐요','공유 링크나 문서로 내보내요'],
 out:['휴대폰에서 보는 행사 안내 웹페이지','지침 요약 인포그래픽','교육 확인 퀴즈'],
 say:'송년 음악회 안내 웹페이지를 휴대폰에서 잘 보이게 큰 글씨로 만들어 줘. 일시·장소·문의는 [ ]로 비워 둬.',warn:'일시·장소·연락처는 직접 확인한 뒤 공유하세요.'},
'제미나이|Deep Research':{t:'여러 사이트를 몇 분 동안 찾아 읽고, 출처가 달린 보고서로 정리하는 조사 기능',where:'입력창 [+] → [도구 더보기] → [Deep Research]',
 what:'주제를 주면 조사 계획을 먼저 보여 주고, 승인하면 수십 개 사이트를 읽고 출처 링크가 달린 긴 보고서를 만들어요.',
 pros:['검색 몇 시간 걸릴 일을 몇 분에 끝내요','출처가 달려 있어 확인할 수 있어요','구글 문서로 바로 내보내요'],
 when:['다른 기관 우수 사례를 찾을 때','공모사업 조건을 비교할 때','올해 바뀐 정책을 정리할 때'],
 how:['Deep Research를 켜요','조사할 주제와 비교 기준을 적어요','조사 계획을 확인하고 시작해요','보고서를 문서로 내보내요'],
 out:['우수 사례 5곳 비교 보고서','공모사업 조건·마감 비교표','정책 변화 요약 보고서'],
 say:'장애인복지관 디지털 재활 프로그램 우수 사례 5곳을 운영 방식·효과·출처로 비교해 줘.',warn:'출처 링크는 직접 열어 보고, 숫자는 원문과 대조하세요.'},
'제미나이|가이드 학습':{t:'답을 바로 주지 않고, 질문하며 단계별로 이해시켜 주는 공부 도우미',where:'입력창 [+] → [도구 더보기] → [가이드 학습]',
 what:'배우고 싶은 주제를 말하면 선생님처럼 질문을 던지고, 내 답을 보며 설명을 이어 가요. 마지막에 퀴즈로 이해했는지 확인해요.',
 pros:['외우지 않고 이해하게 도와줘요','내 수준에 맞춰 설명해요','퀴즈로 바로 확인해요'],
 when:['신규 직원이 사업 지침을 익힐 때','법정 의무교육을 복습할 때','새 기기·제도 사용법을 배울 때'],
 how:['가이드 학습을 켜요','배울 주제와 시간을 적어요','질문에 답하며 따라가요','마지막 퀴즈로 확인해요'],
 out:['단계별 질문·설명 대화','확인 퀴즈 5문제','핵심 요약 정리'],
 say:'신규 직원이 주간이용센터 운영 지침을 30분 안에 익힐 수 있게 질문하며 가르쳐 줘.',warn:'지침 원문과 다르게 설명한 곳이 없는지 확인하세요.'},
'제미나이|태스크':{t:'목표를 말하면 연결된 앱을 써서 여러 단계 일을 대신 처리하는 기능',where:'입력창 위 [태스크]',
 what:'"송년회 준비해 줘"처럼 목표를 말하면 계획을 세워 보여 주고, 승인하면 캘린더 등록·메일 초안처럼 여러 단계를 이어서 처리해요.',
 pros:['여러 앱을 오가며 할 일을 한 번에 맡겨요','진행 상황을 단계별로 보여 줘요','중요한 단계는 내 승인을 받아요'],
 when:['행사 준비 일정을 캘린더에 넣을 때','안내 메일 초안을 만들 때','여러 사람 회의 시간을 맞출 때'],
 how:['태스크를 열고 목표를 적어요','제미나이가 세운 계획을 확인·승인해요','진행 상황을 지켜봐요','결과를 받아 확인해요'],
 out:['캘린더에 들어간 준비 일정','참석 안내 메일 초안','진행 기록'],
 say:'다음 주 송년회 준비 할 일을 캘린더에 넣고, 참석 안내 메일 초안도 만들어 줘.',warn:'결제·전화·메일 발송은 반드시 내가 승인하고, 민감한 일은 맡기지 마세요.'},
'제미나이|예약':{t:'매일·매주 할 일을 정해 두면 그 시간에 알아서 해 주는 예약 작업',where:'왼쪽 메뉴 → [예약된 작업] → 새로 만들기',
 what:'"평일 오전 8시에 오늘 일정 요약"처럼 시간과 할 일을 정해 두면 정해진 시간마다 결과를 정리해 보내 줘요.',
 pros:['아침마다 같은 확인을 대신해요','메일·일정과 연결해 내 상황에 맞춰요','여러 개를 동시에 걸어 둘 수 있어요'],
 when:['출근 전 오늘 일정·중요 메일을 볼 때','매주 공모 소식을 받을 때','매달 홍보 문구 초안이 필요할 때'],
 how:['예약된 작업을 열어요','할 일을 적어요','시간·반복을 정해요','알림으로 결과를 확인해요'],
 out:['아침 8시 일정·메일 요약','주간 공모 소식','매달 홍보 문구 초안'],
 say:'평일 오전 8시마다 오늘 일정과 중요한 메일을 세 줄로 요약해 줘.',warn:'유료 요금제 기능이에요. 결과는 꼭 열어서 확인하세요.'},
'제미나이|개인 인텔리전스':{t:'Gmail·포토·검색 기록을 연결해 내 상황에 맞춰 답하는 기능',where:'입력창 [+] → [도구 더보기] → [개인 인텔리전스] 켜기',
 what:'내 Gmail·구글 포토·유튜브·검색 기록을 연결하면 "작년에 받은 그 메일" 같은 질문에도 내 자료를 찾아 답해 줘요.',
 pros:['흩어진 메일·사진을 말로 찾아요','내 일정·상황에 맞춘 제안을 받아요','연결할 앱을 내가 골라요'],
 when:['작년 공모 안내 메일을 찾을 때','지난 행사 사진을 찾을 때','내 일정에 맞춘 아이디어가 필요할 때'],
 how:['개인 인텔리전스를 켜요','연결할 앱을 골라요','평소처럼 질문해요','답 옆 원문 링크로 확인해요'],
 out:['찾은 메일 제목·받은 날짜·마감일','찾은 사진 모음','내 상황에 맞춘 제안'],
 say:'작년 12월에 받은 공모사업 안내 메일을 찾아서 마감일만 알려 줘.',warn:'시험 단계 기능이에요. 기관 계정은 안 될 수 있고, 연결할 앱은 직접 고르세요.'},
/* ---------------- Claude ---------------- */
'Claude|프로젝트':{t:'지침과 자료를 한 번 넣어 두면, 그 방의 모든 대화가 같은 기준으로 일하는 업무방',where:'왼쪽 메뉴 → [프로젝트] → 새 프로젝트',
 what:'사업계획서처럼 반복되는 일을 위해 "지침(규칙)"과 "파일(서식·지침·작년 자료)"을 한 번 넣어 두는 방이에요. 그 방에서 여는 대화는 매번 설명하지 않아도 같은 기준으로 답해요.',
 pros:['매번 "나는 복지관 직원이야" 설명이 필요 없어요','서식·지침을 한 번만 올려요','대화를 나눠도 기준이 같아요'],
 when:['사업계획서·결과보고서를 쓸 때','매달 같은 형식의 일지를 쓸 때','팀이 같은 기준으로 홍보물을 만들 때'],
 how:['새 프로젝트를 만들고 이름을 정해요','지침 칸에 규칙을 써요','서식·지침·작년 자료를 올려요','방 안에서 대화를 단계별로 나눠 진행해요'],
 out:['작년 대비 비교표','항목별 사업계획서 초안','평가위원 시선의 검토 의견'],
 say:'프로젝트 지침과 파일을 기준으로, 올해 서식 순서대로 사업계획서 1번 항목 초안을 써 줘. 숫자는 자료에 있는 것만.',warn:'이용자 실명·주민번호 같은 개인정보는 올리지 마세요.'},
'Claude|아티팩트':{t:'Claude가 만든 문서·표·슬라이드·웹페이지가 따로 저장되는 결과물 창',where:'요청하면 채팅 오른쪽에 열림 · 다시 보기: 왼쪽 메뉴 [아티팩트]',
 what:'긴 글·표·발표 자료·웹페이지를 요청하면 채팅 옆 별도 창에 결과물이 만들어져요. 대화가 길어져도 결과물은 따로 모여 있어 다시 열고 고칠 수 있어요.',
 pros:['결과물을 채팅에서 찾느라 뒤지지 않아요','그 자리에서 직접 고칠 수 있어요','워드·PDF·PPT로 내려받거나 링크로 공유해요'],
 when:['안내문·보고서를 문서로 받을 때','참여자 명단·통계를 표로 정리할 때','보고용 슬라이드나 안내 웹페이지가 필요할 때'],
 how:['만들 것을 구체적으로 요청해요','오른쪽 결과물 창을 확인해요','고칠 부분을 말하거나 직접 고쳐요','내려받거나 공유 링크를 만들어요'],
 out:['송년회 안내문 (문서 → 워드·PDF)','12월 참여자 명단 (표 → 엑셀)','운영위원회 보고 10장 (슬라이드 → PPT)'],
 say:'송년회 안내문을 A4 문서로 만들어 줘. 큰 글씨, 일시·장소·문의 전화는 [ ]로 비워 둬.',warn:'공유 링크는 받는 사람을 확인한 뒤 보내세요.'},
'Claude|플러그인':{t:'Canva·Gmail·드라이브 같은 앱을 켜 두면 Claude가 그 안의 자료를 바로 쓰는 연결 기능',where:'입력창 [+] → [플러그인(커넥터)] → 쓸 앱 켜기',
 what:'연결해 둔 앱의 메일·문서·일정·표를 Claude가 직접 찾아 읽고 채워요. Canva를 켜 두면 만든 문구로 Canva 디자인을 만들고 Canva에서 이어서 편집할 수 있어요.',
 pros:['파일을 내려받아 다시 올리지 않아요','Canva 디자인을 대화로 만들고 불러와요','표 계산·메일 초안을 한 번에 해요'],
 when:['구글 시트 명단으로 출석률을 계산할 때','홍보 문구로 Canva 포스터를 만들 때','드라이브 문서를 찾아 요약할 때'],
 how:['[+] → 플러그인에서 쓸 앱을 켜요','처음 한 번 로그인·허용해요','채팅에서 앱 이름을 넣어 요청해요','결과를 앱에서 열어 확인해요'],
 out:['프로그램별 출석률 표','Canva에서 열리는 포스터 시안','메일 답장 초안'],
 say:'Canva로 12월 송년회 포스터 시안 2개를 만들어 줘. 초록·주황, 큰 글씨, 일시·장소는 [ ]로.',warn:'필요한 앱만 켜고, 메일 발송·일정 등록은 내가 확인한 뒤에 하게 하세요.'},
'Claude|폴더 추가':{t:'파일을 하나씩 올리지 않고, 내 컴퓨터 폴더를 연결해 한 번에 읽고 정리하는 기능',where:'데스크톱 앱 → 입력창 [+] → [폴더 추가]',
 what:'일지·사진·영수증이 든 폴더를 연결하면 Claude가 폴더 안 파일을 모두 읽고, 표로 정리하거나 이름을 바꾸거나 새 파일을 만들어 같은 폴더에 저장해요.',
 pros:['수십 개 파일을 한 번에 처리해요','결과 파일이 내 폴더에 바로 생겨요','반복 정리 작업 시간을 크게 줄여요'],
 when:['프로그램 일지 20개를 월별 표로 모을 때','행사 사진 이름을 날짜_행사명으로 바꿀 때','영수증 금액을 항목별로 합칠 때'],
 how:['데스크톱 앱에서 [+] → 폴더 추가를 눌러요','폴더를 고르고 허용해요','할 일을 한 문장으로 써요','폴더에 생긴 결과 파일을 확인해요'],
 out:['월별 참여 현황.xlsx','날짜_행사명으로 정리된 사진들','항목별 영수증 합계표'],
 say:'이 폴더의 프로그램 일지 20개를 월별 회기·참여 인원 표로 정리해서 엑셀 파일로 만들어 줘.',warn:'데스크톱 앱 기능이에요. 개인정보 폴더는 연결하지 말고, 지우기는 확인 후에 하세요.'},
'Claude|예약됨':{t:'매일·매주 할 일을 정해 두면 그 시간에 Claude가 알아서 해 두는 예약 작업',where:'왼쪽 메뉴 → [예약됨] → 새 예약',
 what:'시간과 할 일을 정해 두면 정해진 때마다 조사·정리를 해서 결과를 남겨 둬요. 출근하면 정리된 결과를 열어 보기만 하면 돼요.',
 pros:['반복 조사를 잊지 않아요','출처 링크까지 정리해 둬요','언제든 멈추고 고칠 수 있어요'],
 when:['매주 공모 소식을 정리할 때','매달 1일 홍보 문구 초안이 필요할 때','금요일마다 주간 보고 초안을 만들 때'],
 how:['[예약됨]에서 새 예약을 만들어요','할 일을 구체적으로 써요','요일·시간을 정해요','결과를 열어 확인해요'],
 out:['공모명·금액·마감 정리표 (출처 포함)','이달의 행사 홍보 문구','주간 보고 초안'],
 say:'매주 월요일 오전 8시에 장애인복지 공모사업 새 소식을 찾아 공모명·금액·마감 표로 정리해 줘.',warn:'결과는 꼭 열어서 확인하고, 발송·결제는 맡기지 마세요.'},
'Claude|리서치':{t:'여러 사이트를 찾아 읽고 출처가 달린 조사 보고서를 만드는 기능',where:'입력창 [+] → [리서치] 켜기',
 what:'주제를 주면 Claude가 몇 분 동안 여러 자료를 찾아 읽고, 비교·정리한 뒤 문장마다 출처 링크를 붙인 보고서를 만들어요.',
 pros:['한 번 질문으로 여러 자료를 비교해요','출처가 달려 근거를 확인할 수 있어요','표·요약으로 바로 쓸 수 있게 정리해요'],
 when:['다른 복지관 우수 사례를 찾을 때','올해 지원 가능한 공모사업을 찾을 때','최신 장애인 정책 변화를 정리할 때'],
 how:['[+]에서 리서치를 켜요','주제·비교 기준·원하는 형식을 적어요','몇 분 기다려요','출처 링크를 열어 확인해요'],
 out:['우수 사례 5곳 비교표 (출처 링크)','공모사업 목록과 마감일','정책 변화 요약 보고서'],
 say:'다른 장애인복지관의 디지털 재활 우수 사례 5곳을 운영 방식·효과·출처 링크와 함께 표로 정리해 줘.',warn:'유료 기능이에요. 출처 링크는 직접 열어 확인하세요.'},
'Claude|Design':{t:'말로 요청하면 포스터·안내지·슬라이드·화면 시안을 만들어 주는 디자인 작업실',where:'왼쪽 메뉴 → [Design]',
 what:'만들 것을 말하면 옆 화면에 디자인이 열리고, 글자·색·배치를 직접 고칠 수 있어요. 시안을 여러 개 받아 비교하고 PDF·이미지·PPT로 저장하거나 Canva로 보내 이어서 편집해요.',
 pros:['디자인 프로그램 없이 시안이 나와요','시안 2개를 나란히 비교해 골라요','글자를 그 자리에서 바로 고쳐요'],
 when:['행사 포스터·A4 안내지가 필요할 때','발표 자료·썸네일·카드뉴스 표지를 만들 때','웹페이지·앱 화면 시안을 볼 때'],
 how:['[Design]을 열어요','만들 것·크기·분위기를 적어요','시안 2개를 비교해 골라요','글자·색을 고치고 저장해요'],
 out:['A4 안내지·행사 포스터','행사 순서지·초대장','유튜브 썸네일·카드뉴스 표지','발표 자료·웹페이지 화면 시안'],
 say:'송년 음악회 안내지를 A4로, 큰 글씨·고대비로 서로 다른 시안 2개 만들어 줘.',warn:'인쇄 전에 날짜·장소·문의처를 꼭 확인하세요.'},
'Claude|디자인 시스템':{t:'기관 색·로고·글꼴을 한 번 저장해 모든 디자인에 똑같이 쓰는 기관 디자인 규칙',where:'입력창 [+] → [디자인 시스템] → 만들기·고르기',
 what:'우리 기관의 대표 색, 글꼴, 로고 위치, 말투를 저장해 두면 포스터·안내지·카드뉴스를 누가 만들어도 같은 기관 느낌으로 나와요.',
 pros:['매번 색·글꼴을 설명하지 않아요','누가 만들어도 기관 느낌이 같아요','홍보물이 한 세트처럼 통일돼요'],
 when:['기관 홍보물을 통일하고 싶을 때','새 직원이 홍보물을 만들 때','행사 포스터·안내지·카드뉴스를 세트로 만들 때'],
 how:['[+] → 디자인 시스템을 열어요','기관 색·글꼴·로고를 넣어 만들어요','디자인을 요청할 때 이 시스템을 골라요','결과물이 규칙대로 나왔는지 확인해요'],
 out:['같은 색·글꼴의 포스터·안내지·카드뉴스 세트','기관 로고가 같은 자리에 들어간 홍보물'],
 say:'우리 기관 디자인 시스템으로 12월 송년회 포스터 시안 2개를 만들어 줘.',warn:'로고는 기관 공식 파일만 쓰세요.'},
'Claude|슬라이드':{t:'자료를 넣으면 발표용 장표를 만들고 PPT로 내려받는 기능',where:'채팅에서 자료 첨부 → "슬라이드로 만들어 줘"',
 what:'결과보고서·회의 자료를 넣고 장수와 대상을 말하면 제목·핵심 문장·표가 들어간 발표 장표를 만들어요. 고친 뒤 PPT 파일로 받아요.',
 pros:['보고서를 장표로 옮기는 시간을 줄여요','장마다 핵심 한 줄로 정리해 줘요','PPT로 받아 바로 수정해요'],
 when:['운영위원회 실적 보고를 할 때','연말 결과 발표를 할 때','후원자에게 후원금 사용을 보여 줄 때'],
 how:['보고서·자료를 첨부해요','장수·대상·말투를 적어요','장표를 보고 고칠 곳을 말해요','PPT로 내려받아요'],
 out:['운영위원회 보고 10장','연말 결과 발표 장표','후원자 감사 보고 장표'],
 say:'첨부한 결과보고서로 운영위원회 보고 슬라이드 10장을 만들어 줘. 숫자는 자료에 있는 것만 써 줘.',warn:'장표의 숫자는 첨부 자료와 다시 대조하세요.'},
'Claude|모션그래픽':{t:'글자·도형이 차례로 나타나는 움직이는 안내 화면을 만드는 기능',where:'채팅에서 "움직이는 안내 화면 만들어 줘" → 결과물 창에서 재생',
 what:'제목→일시→장소처럼 순서대로 나타나는 애니메이션 화면을 만들어요. 화면을 녹화하면 로비 TV·SNS용 짧은 영상이 돼요.',
 pros:['영상 편집 없이 움직이는 안내가 나와요','속도·순서·글자를 말로 고쳐요','로비 TV·SNS에 바로 써요'],
 when:['로비 TV 모집 안내가 필요할 때','행사 D-7 카운트다운을 할 때','후원 감사 화면을 띄울 때'],
 how:['나타날 순서와 길이를 적어요','재생해 보고 속도·글자를 고쳐요','전체 화면으로 띄워요','화면 녹화로 영상 파일을 만들어요'],
 out:['15초 모집 안내 화면','행사 카운트다운 화면','후원 감사 인사 화면'],
 say:'모집 안내가 제목→일시→장소→문의 순서로 하나씩 나타나는 15초 화면을 만들어 줘. 큰 글씨, 초록 배경.',warn:'녹화는 윈도우 Win + Alt + R로 할 수 있어요.'},
'Claude|한글 서식 스킬':{t:'우리 기관 한글(HWPX) 서식의 칸은 그대로 두고 빈칸만 채워 주는 기능',where:'설정 → 코드 실행 켜기 → 스킬 ZIP 올리기 → 서식 첨부',
 what:'한글 서식 파일을 넣으면 표·칸 이름·순서는 건드리지 않고 메모 내용으로 빈칸만 채워서 다시 한글 파일로 돌려줘요.',
 pros:['서식이 깨지지 않아요','복사·붙여넣기 시간이 줄어요','여러 장을 한 번에 채워요'],
 when:['사업계획서 서식을 채울 때','프로그램 일지 여러 장을 쓸 때','결과보고서 빈칸을 채울 때'],
 how:['설정에서 코드 실행을 켜요','한글 서식 스킬을 올려요','HWPX 서식과 메모를 첨부해요','채워진 한글 파일을 받아요'],
 out:['칸이 그대로인 사업계획서.hwpx','여러 회기 프로그램 일지','빈칸이 채워진 결과보고서'],
 say:'첨부한 사업계획서 서식의 칸 이름·순서는 그대로 두고, 메모 내용으로 빈칸만 채워 줘.',warn:'HWP 파일은 한글에서 HWPX로 다시 저장해서 넣으세요.'},
'Claude|Skill 녹화':{t:'내 작업 순서를 한 번 보여 주면 Skill로 저장해 다음부터 똑같이 하는 기능',where:'입력창 [+] → [Skill 녹화]',
 what:'평소 하던 작업을 Claude에게 한 번 보여 주면 그 순서·말투·규칙을 Skill로 저장해요. 다음에는 Skill 이름만 부르면 같은 방식으로 해요.',
 pros:['우리 팀 방식을 그대로 기억해요','매번 길게 설명하지 않아요','새 직원도 같은 품질로 일해요'],
 when:['매달 같은 순서로 일지를 정리할 때','공문 서식을 늘 같은 방식으로 채울 때','기관 말투로 홍보 문구를 쓸 때'],
 how:['Skill 녹화를 켜요','평소처럼 작업을 보여 줘요','끝내고 이름을 붙여요','다음엔 이름으로 불러요'],
 out:['"월간 일지 정리" Skill','"공문 서식 채우기" Skill','"기관 홍보 문구" Skill'],
 say:'방금 보여 준 순서를 "월간 일지 정리" Skill로 저장해 줘. 다음 달부터 이 순서대로 해 줘.',warn:'녹화 중 화면에 개인정보가 보이지 않게 하세요.'},
/* ---------------- Canva ---------------- */
'Canva|AI 프레젠테이션':{t:'주제나 원고를 넣으면 디자인까지 된 발표 자료를 만들어 주는 기능',where:'Canva 홈 → [Canva AI] → [프레젠테이션]',
 what:'주제나 원고를 붙여 넣으면 장수에 맞춰 제목·본문·사진·도형이 배치된 발표 자료가 나와요. 그대로 Canva에서 고치고 PPT·PDF로 저장해요.',
 pros:['빈 화면에서 시작하지 않아요','디자인이 통일된 장표가 한 번에 나와요','PPT로 받아 한글·파워포인트에서 이어 써요'],
 when:['사업 설명회 자료를 만들 때','연말 결과 보고를 할 때','후원자 감사 발표를 할 때'],
 how:['Canva AI에서 프레젠테이션을 골라요','주제·장수·대상을 적거나 원고를 붙여요','색·글꼴·사진을 우리 기관 것으로 바꿔요','PPT·PDF로 저장해요'],
 out:['사업 소개 발표 10장','연말 결과 보고 장표','후원 감사 발표 자료'],
 say:'주간이용센터 사업 소개 발표 자료 10장, 큰 글씨·초록 계열로 만들어 줘.',warn:'자동으로 들어간 사진은 우리 기관 사진(동의 받은 것)으로 바꾸세요.'},
'Canva|매직 레이어':{t:'통째로 된 그림을 글자·인물·배경 층으로 나눠 하나씩 고치는 기능',where:'이미지 올리기 → 이미지 선택 → [Magic Layers]',
 what:'AI가 만든 포스터처럼 한 장으로 붙어 있는 그림을 글자·캐릭터·배경으로 분리해요. 오타 난 글자만 고치거나 캐릭터 자리를 옮길 수 있어요.',
 pros:['AI 그림의 오타를 직접 고쳐요','요소를 옮기거나 지울 수 있어요','처음부터 다시 만들지 않아요'],
 when:['AI 포스터 글자에 오타가 났을 때','제목·캐릭터 위치를 바꾸고 싶을 때','필요 없는 소품을 빼고 싶을 때'],
 how:['그림을 Canva에 올려요','Magic Layers를 눌러 층을 나눠요','글자·요소를 골라 고쳐요','PNG·PDF로 내려받아요'],
 out:['오타를 고친 포스터','배치를 바꾼 카드뉴스','소품을 지운 깔끔한 그림'],
 say:'',warn:'사진처럼 사실적인 그림은 층이 덜 깔끔하게 나뉠 수 있어요.'},
'Canva|원고 → PPT 흐름':{t:'내용은 AI가 정리하고, 디자인은 Canva가 입히는 발표 자료 만드는 순서',where:'Claude·ChatGPT로 원고 → Canva AI에 붙여넣기',
 what:'Claude나 ChatGPT로 장별 원고(제목·핵심 문장·발표 멘트)를 먼저 만들고, 그 원고를 Canva AI에 넣어 디자인된 장표로 바꾸는 흐름이에요.',
 pros:['내용과 디자인을 각각 잘하는 도구로 나눠요','숫자·내용 실수가 줄어요','발표 멘트까지 함께 준비돼요'],
 when:['보고 내용이 많아 정리부터 필요할 때','발표 대본까지 필요할 때','기관 색으로 통일된 PPT가 필요할 때'],
 how:['AI에게 장별 원고를 표로 받아요','원고를 Canva AI 프레젠테이션에 붙여요','색·글꼴을 기관 것으로 맞춰요','발표 노트에 멘트를 넣어요'],
 out:['장별 제목·핵심 문장·발표 멘트 원고','디자인된 10장 발표 자료','발표 노트가 들어간 PPT'],
 say:'결과보고서로 발표 10장 원고를 표로 만들어 줘. 칸: 장 번호·제목·핵심 문장(숫자 1개)·발표 멘트. 숫자는 내가 준 것만.',warn:'숫자는 내가 준 것만 쓰고, 없으면 [확인 필요]로 두게 하세요.'},
'Canva|AI 앱과 연결':{t:'ChatGPT·Claude·제미나이에서 Canva를 불러 디자인을 만들고, Canva에서 이어서 편집하는 연결',where:'각 AI 앱의 플러그인(앱·커넥터)에서 Canva 연결',
 what:'AI 채팅에서 "Canva로 만들어 줘"라고 하면 Canva 디자인이 만들어지고, 링크를 눌러 Canva 편집 화면에서 글자·사진·색을 직접 고칠 수 있어요. AI로 만든 그림도 Canva로 불러와 글자를 얹어 완성해요.',
 pros:['문구 정리와 디자인을 한 번에 이어서 해요','AI 결과를 Canva 편집 도구로 마무리해요','템플릿·기관 브랜드 키트를 그대로 써요'],
 when:['AI로 쓴 홍보 문구를 포스터로 만들 때','AI가 만든 그림에 행사 글자를 넣을 때','카드뉴스를 여러 장 같은 디자인으로 만들 때'],
 how:['AI 앱 플러그인에서 Canva를 연결해요','채팅에서 "Canva로 ○○ 만들어 줘"라고 해요','나온 시안 링크를 눌러 Canva에서 열어요','글자·사진을 고치고 내려받아요'],
 out:['Canva에서 편집되는 행사 포스터','같은 디자인의 카드뉴스 세트','AI 그림 + 행사 글자가 들어간 안내지'],
 say:'Canva로 이 홍보 문구를 넣은 인스타그램 정사각형 카드뉴스 4장을 같은 디자인으로 만들어 줘.',warn:'Canva 무료 계정은 일부 템플릿·요소가 유료일 수 있어요.'},
'Canva|템플릿·디자인 만들기':{t:'포스터·카드뉴스·썸네일·현수막·티셔츠까지 크기별 템플릿으로 만드는 기능',where:'Canva 홈 → 검색창에 만들 것 입력 → 템플릿 고르기',
 what:'만들 것을 검색하면 크기가 맞춰진 템플릿이 나와요. 글자·사진만 바꾸면 완성되고, Canva AI에게 "이런 느낌으로"라고 말하면 새 디자인도 만들어 줘요.',
 pros:['크기를 몰라도 용도별로 맞춰져 있어요','글자·사진만 바꾸면 완성돼요','인쇄·SNS·영상까지 한 곳에서 만들어요'],
 when:['인스타 카드뉴스·유튜브 썸네일이 필요할 때','행사 현수막·포스터를 인쇄할 때','단체 티셔츠·명찰·수료증을 만들 때'],
 how:['검색창에 만들 것을 적어요','마음에 드는 템플릿을 골라요','글자·사진·색을 우리 것으로 바꿔요','용도에 맞게 PNG·PDF·인쇄로 저장해요'],
 out:['카드뉴스·썸네일','포스터·현수막','티셔츠·명찰·수료증 디자인','짧은 홍보 영상'],
 say:'Canva AI야, 장애인 인식개선 캠페인 인스타그램 카드뉴스를 밝은 초록 느낌으로 만들어 줘. 첫 장 제목은 "함께여서 빛나는 우리".',warn:'유료 표시(왕관)가 있는 요소는 무료 계정에서 저장할 때 비용이 생길 수 있어요.'}
};
D['Canva|AI 앱과 연결'].flow=[
 ['ChatGPT',['처음 한 번: 왼쪽 메뉴 [앱] → Canva 찾기 → 연결·로그인','입력창 [+] → [더 보기] → Canva 고르기','또는 입력창에 @Canva 입력'],'@Canva 이 문구로 송년회 안내 포스터 시안 만들어 줘. 초록·주황, 큰 글씨.'],
 ['Claude',['처음 한 번: 입력창 [+] → [커넥터] → Canva 켜기·로그인','채팅에서 "Canva로 ~ 만들어 줘"라고 요청','나온 시안 카드의 링크 → Canva에서 열기'],'Canva로 12월 송년회 인스타 카드뉴스 4장을 같은 디자인으로 만들어 줘. 일시·장소는 [ ]로.'],
 ['제미나이',['처음 한 번: 설정 → [앱(확장 프로그램)] → Canva 켜기','입력창에 @Canva 입력','나온 디자인 링크 → Canva에서 열어 고치기'],'@Canva 장애인 인식개선 캠페인 포스터를 밝은 초록 느낌으로 만들어 줘.']];
window.__SLD=D;
function e(s){return String(s==null?'':s).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}

var IC={plus:'<path d="M12 5v14M5 12h14"/>',side:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>',library:'<rect x="4" y="4" width="4" height="16" rx="1.5"/><rect x="10" y="4" width="4" height="16" rx="1.5"/><path d="m16.5 5 3.5 14.5"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 10h18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l-2 3"/>',plug:'<circle cx="12" cy="12" r="4"/><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"/>',image:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',scope:'<path d="m4 14 12-6 2 4-12 6z"/><path d="m10 17-2 4M12 16l2 5M18 6l2-1 1.5 3-2 1"/>',sketch:'<path d="M4 18c3-8 5-11 6-9s-3 8 0 8 4-9 6-9-1 7 2 7"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',tools:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',grid:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',slide:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',music:'<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',video:'<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',check:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m8 12 3 3 5-6"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-6 8-6s7 1.5 8 6"/>',brush:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',eraser:'<path d="m14 4 6 6-9 9H6l-3-3z"/><path d="M9 9l6 6M11 20h10"/>',wand:'<path d="m4 20 11-11M14 4v3M19 9h-3M18 5l-2 2"/>',hd:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 9v6M11 9v6M7 12h4M14 9v6h2a3 3 0 0 0 0-6z"/>',cut:'<circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="M8.5 8.5 20 18M8.5 15.5 20 6"/>',rec:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor"/>',pal:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-2 0-3 3 0 4-1 2-3 2-4a8 8 0 0 0-8-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',chat:'<path d="M4 5h16v11H9l-5 4z"/>',link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',down:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',upload:'<path d="M12 16V5M7 10l5-5 5 5M5 20h14"/>',text:'<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',temp:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 3v18M12 11h9"/>',shapes:'<circle cx="7" cy="7" r="3"/><path d="M14 4h6v6h-6zM7 14l4 7H3z"/><circle cx="17" cy="17" r="3"/>',brand:'<path d="M5 18c0-6 3-11 7-11s7 5 7 11"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/>',adjust:'<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 11 7.6-4M8.2 13l7.6 4"/>'};
function ic(k,w){return '<svg viewBox="0 0 24 24" width="'+(w||18)+'" height="'+(w||18)+'" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(IC[k]||IC.spark)+'</svg>'}
window.__ic=ic;
var KW=[[/데스크톱/,'slide'],[/\[\+\]|^\+$|입력창 \[\+\]|\+ 누르기/,'plus'],[/설정/,'gear'],[/도구 더보기|도구/,'tools'],[/왼쪽 메뉴|사이드바/,'side'],[/라이브러리|이미지 보관/,'library'],[/폴더 추가|프로젝트/,'folder'],[/예약/,'clock'],[/플러그인|커넥터|앱\(|\[앱\]/,'plug'],[/웹 검색/,'globe'],[/심층 리서치|Deep Research|리서치/,'scope'],[/스케치/,'sketch'],[/이미지 생성|이미지 만들기/,'image'],[/음악/,'music'],[/동영상|영상/,'video'],[/가이드 학습|노트북/,'book'],[/태스크/,'check'],[/개인 인텔리전스/,'user'],[/Canvas|캔버스/,'doc'],[/Magic Layers|레이어/,'layers'],[/편집|붓/,'brush'],[/Design|디자인 시스템/,'pal'],[/Skill/,'rec'],[/아티팩트|결과물 창/,'grid'],[/Canva AI|내 dot/,'spark'],[/프레젠테이션|슬라이드/,'slide'],[/Live|말하/,'mic'],[/카메라/,'camera'],[/스페이스|페이지|문서/,'doc'],[/첨부|올리|업로드/,'upload'],[/내려받|저장|다운로드/,'down'],[/공유|링크/,'link'],[/채팅|요청|적어|말해|쓰기|입력/,'chat'],[/템플릿|검색창/,'temp']];
function kic(t){for(var i=0;i<KW.length;i++)if(KW[i][0].test(t))return KW[i][1];return ''}
function pathHtml(where){var parts=String(where).split(/\s*→\s*/);return '<div class="sld-path"><span class="pl">메뉴 위치</span>'+parts.map(function(t,i){var k=kic(t);return (i?'<em>›</em>':'')+'<span class="sld-pc">'+(k?'<i>'+ic(k,16)+'</i>':'')+e(t.replace(/^\[([^\]]*)\]$/,'$1'))+'</span>'}).join('')+'</div>'}
function li(a){return '<ul>'+a.map(function(x){return '<li>'+e(x)+'</li>'}).join('')+'</ul>'}
function slide(app,name,x,free){
 return '<div class="sld"><div class="sld-hd"><span class="sld-ap">'+e(app)+'</span><b>'+e(name)+'</b>'+(free==null?'':'<span class="sld-fee '+(free?'f':'p')+'">'+(free?'무료':'유료')+'</span>')+'</div>'
 +'<h3 class="sld-t">'+e(x.t)+'</h3>'
 +pathHtml(x.where)
 +'<div class="sld-g3"><section><h4>무엇인가요</h4><p>'+e(x.what)+'</p></section><section><h4>장점</h4>'+li(x.pros)+'</section><section><h4>언제 쓰나요</h4>'+li(x.when)+'</section></div>'
 +'<section class="sld-how"><h4>이렇게 써요</h4><ol>'+x.how.map(function(s){var k=kic(s);return '<li>'+(k?'<span class="si">'+ic(k,20)+'</span>':'')+e(s)+'</li>'}).join('')+'</ol></section>'
 +(x.flow?'<section class="sld-flow"><h4>앱별로 Canva 불러오기</h4>'+x.flow.map(function(f){var L=(window.__LOGO||{})[f[0]]||'';return '<div class="fl-row"><div class="fl-app"><span class="fl-lg">'+L+'</span><b>'+e(f[0])+'</b></div><div class="fl-steps">'+f[1].map(function(t,i){return (i?'<em>→</em>':'')+'<span>'+e(t)+'</span>'}).join('')+'<em>→</em><span class="fl-cv"><i>'+((window.__LOGO||{})['Canva']||'')+'</i>Canva 편집 화면</span></div><div class="fl-say"><small>이렇게 입력</small><p>'+e(f[2])+'</p><button type="button" class="fl-cp" data-t="'+e(f[2]).replace(/"/g,'&quot;')+'">복사</button></div></div>'}).join('')+'<p class="fl-note">메뉴 이름은 앱 업데이트에 따라 조금 다를 수 있어요. 처음 한 번만 연결하면 다음부터는 바로 불러와요.</p></section>':'')
 +'<div class="sld-g2"><section><h4>이런 결과물이 나와요</h4>'+li(x.out)+'</section>'
 +(x.say?'<section class="sld-say"><h4>바로 쓰는 지시문</h4><p>'+e(x.say)+'</p><button type="button" class="sld-cp">복사</button></section>':'')+'</div>'
 +(x.warn?'<p class="sld-w"><b>꼭 확인</b> '+e(x.warn)+'</p>':'')+'</div>';
}
/* 캔바 카드 추가 */
try{var CV=APPS.find(function(a){return a.n==='Canva'});if(CV){[['AI 앱과 연결','ChatGPT·Claude·제미나이에서 Canva로'],['템플릿·디자인 만들기','카드뉴스·썸네일·현수막·티셔츠']].forEach(function(c){if(!CV.cards.some(function(k){return k.n===c[0]}))CV.cards.push({n:c[0],d:c[1],s:c[1],f:1})})}}catch(err){}
function post(){
 if(typeof VIEW==='undefined'||VIEW!=='apps')return;
 var DS={'AI 앱과 연결':'ChatGPT·Claude·제미나이에서 Canva로','템플릿·디자인 만들기':'카드뉴스·썸네일·현수막·티셔츠'};document.querySelectorAll('.ftb tr').forEach(function(tr){var n=tr.querySelector('td b'),d=tr.children[1];if(n&&d&&DS[n.textContent.trim()]&&!d.textContent.trim())d.textContent=DS[n.textContent.trim()]});var A=APPS[S.app||0];if(!A)return;var C=A.cards[S.fc||0];if(!C)return;
 var x=D[A.n+'|'+C.n];var R=document.getElementById('R');if(!x||!R)return;
 var bar=R.querySelector('.bar');var keep=(C.n==='움짤 GIF'||C.n==='이미지 편집 화면');var old=[];if(keep){[].slice.call(R.children).forEach(function(n){if(n!==bar)old.push(n)})}
 var htm=slide(A.n,C.n,x,C.f==null?null:!!C.f);
 if(!bar){R.innerHTML='<div class="bar"><span class="t">'+e(A.n)+' · '+e(C.n)+'</span></div>';bar=R.querySelector('.bar')}
 [].slice.call(R.children).forEach(function(n){if(n!==bar)n.remove()});
 var sub=bar.querySelector('.sub2');if(sub)sub.textContent='강의 장표';
 bar.insertAdjacentHTML('afterend','<div class="sld-wrap">'+htm+'</div>');
 var w=R.querySelector('.sld-wrap');old.forEach(function(n){w.appendChild(n)});
 R.querySelectorAll('.fl-cp').forEach(function(b){b.onclick=function(){try{navigator.clipboard.writeText(b.dataset.t)}catch(er){}b.textContent='복사됨';setTimeout(function(){b.textContent='복사'},1200)}});
 var cp=R.querySelector('.sld-cp');if(cp)cp.onclick=function(){try{navigator.clipboard.writeText(x.say)}catch(er){}cp.textContent='복사됨';setTimeout(function(){cp.textContent='복사'},1200)};
}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
var _R=null;
document.head.insertAdjacentHTML('beforeend','<style id="gh-sld">'
+'.sld-wrap{padding:14px;display:grid;gap:14px}'
+'.sld{background:#fff;border:1px solid #D5E5DA;border-radius:14px;padding:22px 26px;display:grid;gap:14px;color:#263331;font-family:Pretendard,sans-serif}'
+'.sld-hd{display:flex;align-items:center;gap:8px;border-bottom:2px solid #2F6B56;padding-bottom:10px}.sld-hd b{font-size:20px;font-weight:800;color:#1E5442}'
+'.sld-ap{background:#2F6B56;color:#fff;border-radius:6px;padding:3px 10px;font-size:13px;font-weight:700}'
+'.sld-fee{margin-left:auto;font-size:12.5px;font-weight:700;border-radius:999px;padding:3px 10px}.sld-fee.f{background:#E8F5EE;color:#1E7A4F}.sld-fee.p{background:#FFF1E6;color:#B4541A}'
+'.sld-t{margin:0;font-size:21px;line-height:1.45;font-weight:800;color:#1d2826}'
+'.sld-wh{font-size:14px;color:#263331;background:#F7FBF8;border:1px solid #D5E5DA;border-radius:10px;padding:9px 12px}.sld-wh span{display:inline-block;color:#C2652B;font-weight:800;margin-right:10px}'
+'.sld h4{margin:0 0 8px;font-size:15px;font-weight:800;color:#1E5442;padding-bottom:6px;border-bottom:2px solid #E07A2E;display:inline-block}'
+'.sld section{min-width:0}.sld p{margin:0;font-size:14.5px;line-height:1.7}'
+'.sld ul{margin:0;padding-left:18px;display:grid;gap:5px;font-size:14.5px;line-height:1.55}.sld ul li::marker{color:#E07A2E}'
+'.sld-g3{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:12px}.sld-g3>section,.sld-g2>section{background:#fff;border:1px solid #E3ECE6;border-radius:12px;padding:12px 14px}'
+'.sld-how{background:#F7FBF8;border:1px solid #D5E5DA;border-radius:12px;padding:12px 14px}'
+'.sld-how ol{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;counter-reset:s}'
+'.sld-how ol li{counter-increment:s;background:#fff;border:1px solid #D5E5DA;border-radius:10px;padding:10px 12px 10px 42px;position:relative;font-size:14px;line-height:1.5;font-weight:600}'
+'.sld-how ol li::before{content:counter(s);position:absolute;left:11px;top:9px;width:22px;height:22px;border-radius:50%;background:#E07A2E;color:#fff;font-size:13px;font-weight:800;display:grid;place-items:center}'
+'.sld-g2{display:grid;grid-template-columns:1fr 1.2fr;gap:12px}'
+'.sld-say{position:relative}.sld-say p{background:#FFF8F1;border-left:4px solid #E07A2E;border-radius:8px;padding:10px 12px;font-weight:600}'
+'.sld-cp{position:absolute;top:10px;right:12px;border:1px solid #D5E5DA;background:#fff;border-radius:8px;padding:3px 10px;font-size:12.5px;font-weight:700;color:#263331}'
+'.sld-w{font-size:14px!important;color:#263331}.sld-w b{color:#C0392B;margin-right:8px;text-decoration:underline;text-decoration-color:#C0392B;text-underline-offset:4px}'
+'.sld-flow{border:1px solid #D5E5DA;border-radius:12px;padding:12px 14px;display:grid;gap:10px}.fl-row{display:grid;grid-template-columns:110px 1fr;gap:6px 12px;align-items:start;border-top:1px dashed #D5E5DA;padding-top:10px}.fl-row:first-of-type{border-top:0;padding-top:0}'
+'.fl-app{display:flex;flex-direction:column;align-items:center;gap:4px;grid-row:1/3}.fl-lg svg{width:40px;height:40px}.fl-app b{font-size:14px}'
+'.fl-steps{display:flex;flex-wrap:wrap;align-items:center;gap:6px}.fl-steps span{background:#F7FBF8;border:1px solid #D5E5DA;border-radius:8px;padding:6px 10px;font-size:13.5px;font-weight:600}.fl-steps em{font-style:normal;color:#E07A2E;font-weight:800}'
+'.fl-cv{display:inline-flex;align-items:center;gap:6px;background:#F3EEFF!important;border-color:#D9CCF7!important}.fl-cv i svg{width:18px;height:18px;display:block}'
+'.fl-say{position:relative;background:#FFF8F1;border-left:4px solid #E07A2E;border-radius:8px;padding:8px 70px 8px 12px}.fl-say small{display:block;font-size:12px;color:#C2652B;font-weight:800}.fl-say p{font-weight:600;font-size:14px}.fl-cp{position:absolute;right:10px;top:10px;border:1px solid #D5E5DA;background:#fff;border-radius:8px;padding:3px 10px;font-size:12.5px;font-weight:700}'
+'.fl-note{font-size:13px!important;color:#66746f}@media(max-width:900px){.fl-row{grid-template-columns:1fr}.fl-app{flex-direction:row;grid-row:auto}}'
+'.sld-path{display:flex;flex-wrap:wrap;align-items:center;gap:6px;background:#F7FBF8;border:1px solid #D5E5DA;border-radius:10px;padding:9px 12px}.sld-path .pl{color:#C2652B;font-weight:800;font-size:13.5px;margin-right:6px}.sld-path .sld-pc{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid #D5E5DA;border-radius:8px;padding:5px 10px;font-size:13.5px;font-weight:700;box-shadow:0 1px 0 #E3ECE6}.sld-path .sld-pc i{display:grid;place-items:center;width:24px;height:24px;border-radius:6px;background:#F1F4F2;color:#263331}.sld-path em{font-style:normal;color:#E07A2E;font-weight:800;font-size:16px}'
+'.sld-how ol li .si{display:block;color:#2F6B56;margin-bottom:4px}'
+'@media(max-width:900px){.sld-g3,.sld-g2{grid-template-columns:1fr}.sld{padding:16px}}'
+'</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
