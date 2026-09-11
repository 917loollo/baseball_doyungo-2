# KBO LIVE — GitHub + Netlify

## 폴더 구조

```text
KBO-LIVE/
├─ public/
│  └─ index.html
├─ netlify/
│  └─ functions/
│     └─ kbo.js
├─ netlify.toml
└─ README.md
```

## GitHub에 올리는 방법

저장소 최상위에 위 구조를 그대로 올립니다.

## Netlify 연결

1. Netlify 로그인
2. Add new project
3. Import an existing project
4. GitHub 저장소 선택
5. Build command: 비워 둠
6. Publish directory: `public`
7. Deploy

`netlify.toml`에 같은 설정이 들어 있으므로 일반적으로 자동 인식됩니다.

## 이 버전의 핵심

- 오늘 KBO 일정은 KBO category만 사용
- 팀명이 없는 행 제거
- gameId 기준 중복 제거
- 정상적인 0-0 경기는 삭제하지 않음
- 실제 경기 수만 표시
- 경기 카드에서 팀/점수/상태/구장 표시
- 경기 상세:
  - 팀별 점수
  - 현재 이닝/초·말
  - 이닝별 스코어
  - R/H/E/B
  - 현재 타자/투수
  - 볼/스트라이크/아웃
  - 주자 1·2·3루
  - 라인업
  - 투수 정보
  - 텍스트 중계
  - 승리확률 데이터가 API에 있을 경우 표시
- 라이브 경기 상세는 5초마다 갱신
- 메인 경기 목록도 5초마다 갱신
- 모바일 대응
- 외부 이미지 파일 없이 팀 로고를 간단한 팀 약칭으로 표시
- Netlify Function을 `public` 밖에 두어 publish directory와 함수 소스를 분리

## API

현재 구현은 kbo-cli에서 사용하는 Naver Sports gateway 구조를 사용합니다.

- 일정: `/schedule/games?upperCategoryId=kbaseball&fromDate=YYYY-MM-DD&toDate=YYYY-MM-DD`
- 상세: `/schedule/games/{gameId}`
- 실시간 중계: `/schedule/games/{gameId}/relay`
- 순위: `/statistics/categories/kbo/seasons/{seasonCode}/teams`

이 API는 공식 공개 API가 아니므로 네이버 측에서 응답 구조나 접근 정책을 바꾸면 수정이 필요할 수 있습니다.
