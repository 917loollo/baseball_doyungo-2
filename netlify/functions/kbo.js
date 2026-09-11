exports.handler = async (event) => {
  const path = event.queryStringParameters?.path;
  if (!path || !path.startsWith("/") || path.includes("://")) {
    return { statusCode: 400, headers: {"Content-Type":"application/json; charset=utf-8"}, body: JSON.stringify({error:"invalid path"}) };
  }

  const url = "https://api-gw.sports.naver.com" + path;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/150 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
        "Referer": "https://m.sports.naver.com/",
        "Origin": "https://m.sports.naver.com"
      }
    });

    const body = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": response.headers.get("content-type") || "application/json; charset=utf-8",
        "Cache-Control": "no-store, max-age=0"
      },
      body
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: {"Content-Type":"application/json; charset=utf-8"},
      body: JSON.stringify({error:"Naver Sports API proxy failed", detail:String(error?.message || error)})
    };
  }
};
