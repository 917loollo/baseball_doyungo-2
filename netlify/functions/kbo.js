exports.handler = async (event) => {
  const path = event.queryStringParameters?.path;
  if (!path || !path.startsWith('/')) return {statusCode:400,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:'Invalid path'})};
  const url = new URL('https://api-gw.sports.naver.com' + path);
  try {
    const r = await fetch(url, {
      method:'GET',
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/150 Safari/537.36',
        'Accept':'application/json, text/plain, */*',
        'Referer':'https://m.sports.naver.com/',
        'Origin':'https://m.sports.naver.com'
      }
    });
    const text = await r.text();
    return {
      statusCode:r.status,
      headers:{'Content-Type':r.headers.get('content-type')||'application/json; charset=utf-8','Cache-Control':'no-store'},
      body:text
    };
  } catch(e) {
    return {statusCode:502,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:e.message})};
  }
};