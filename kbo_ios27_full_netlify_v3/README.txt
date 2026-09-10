KBO iOS 27 Netlify 고정판

중요:
이 ZIP은 index.html이 ZIP의 최상위에 있습니다.
압축을 푼 뒤 'kbo_netlify_fixed' 폴더 자체를 Netlify에 배포하세요.

구조:
index.html
netlify.toml
_redirects
netlify/functions/kbo.js

Netlify 배포:
1. ZIP 압축 해제
2. Netlify에서 Add new project → Deploy manually
3. 압축 해제된 폴더를 통째로 업로드
4. 배포된 *.netlify.app 주소로 접속
5. Domain management에서 내 도메인을 연결

주의:
ZIP 파일 안의 바깥 폴더를 그대로 업로드하는 방식이 아니라,
압축을 푼 뒤 index.html이 바로 보이는 폴더를 업로드해야 합니다.
