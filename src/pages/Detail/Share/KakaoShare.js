export const kakaoShare = (url, title) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: 'hotel',
        imageUrl: 'public/images/sample.png',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: 'title',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }
};
