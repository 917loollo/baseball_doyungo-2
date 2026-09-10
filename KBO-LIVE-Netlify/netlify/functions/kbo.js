exports.handler = async (event) => {
  const path = event.queryStringParameters?.path;
  if (!path || !path.startsWith('/')) return {statusCode:400,body:JSON.stringify({error:'Invalid path'})};
  const url = 'https://api-gw.sports.naver.com' + path;
  try {
    const r = await fetch(url, {headers:{'User-Agent':'Mozilla/5.0','Accept':'application/json'}});
    const text = await r.text();
    return {statusCode:r.status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'},body:text};
  } catch(e) {
    return {statusCode:502,body:JSON.stringify({error:e.message})};
  }
};