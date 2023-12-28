import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Booking from './Booking/Booking';
import { AiOutlineUserAdd, AiOutlineWifi } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { MdOutlineBedroomParent, MdOutlineBathtub } from 'react-icons/md';
import { GrWorkshop } from 'react-icons/gr';
import { FaParking } from 'react-icons/fa';
import { TbToolsKitchen } from 'react-icons/tb';
import { RiTvLine } from 'react-icons/ri';
import { kakaoShare } from './Share/KakaoShare';
import * as SC from '../../styles/Container.styled';
import * as ST from '../../styles/Content.styled';
import KakaoMap from '../../components/KakaoMap/KakaoMap';

const Detail = () => {
  const params = useParams();
  const [detailData, setDetailData] = useState([]);
  const [excludeDates, setExcludeDates] = useState([]);
  const url = window.location.href;

  const OPTION_DATA = [
    {
      id: 1,
      name: '정원',
      number: `${detailData.bedrooms}명`,
      icon: <AiOutlineUserAdd />,
    },
    {
      id: 2,
      name: '침대',
      number: `${detailData.beds}개`,
      icon: <BiBed />,
    },
    {
      id: 3,
      name: '침실',
      number: `${detailData.bedrooms}개`,
      icon: <MdOutlineBedroomParent />,
    },
    {
      id: 4,
      name: '욕실',
      number: `${detailData.bathrooms}개`,
      icon: <MdOutlineBathtub />,
    },
  ];

  const CONVENITENTS_DATA = {
    주방: <TbToolsKitchen />,
    '무선 인터넷': <AiOutlineWifi />,
    '업무 전용 공간': <GrWorkshop />,
    '건물 내 무료 주차': <FaParking />,
    TV: <RiTvLine />,
  };

  const DUMMY_IMAGES_DATA = [
    '/images/dummy.png',
    '/images/dummy.png',
    '/images/dummy.png',
    '/images/dummy.png',
  ];

  useEffect(() => {
    fetch(`http://hyggesil.com/hotels/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setDetailData(data.hotel);
        data.hotel.unAvailableDate.map(exdate =>
          setExcludeDates(prevDates => [...prevDates, new Date(exdate)])
        );
        const recentItems =
          JSON.parse(localStorage.getItem('recentItems')) || [];
        const newRecentItems = [
          data.hotel,
          ...recentItems.filter(item => item.id !== data.hotel.id).slice(0, 3), // 최대 4개까지만 저장
        ];
        localStorage.setItem('recentItems', JSON.stringify(newRecentItems));
      });
  }, []);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <SC.DetailContainer>
      <ST.BoldH1>{detailData.name}</ST.BoldH1>
      <ST.BetweenLine className="adress">
        <ST.Span>{detailData.address}</ST.Span>
        <ST.UnderlinedSpan onClick={() => kakaoShare(url, 'nic hotel')}>
          공유하기
        </ST.UnderlinedSpan>
      </ST.BetweenLine>
      <SC.ImageContainer>
        <SC.BigImageContainer>
          <img
            src={detailData.images ? detailData.images[0] : '/images/dummy.png'}
            alt="hotel"
          />
        </SC.BigImageContainer>
        <SC.GridImageContainer>
          {detailData.images
            ? detailData.images.map(
                (image, index) =>
                  index >= 1 && (
                    <div key={index}>
                      <img
                        src={image}
                        alt="hotel"
                        className={`image${index}`}
                      />
                    </div>
                  )
              )
            : DUMMY_IMAGES_DATA.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="hotel" className={`image${index}`} />
                </div>
              ))}
        </SC.GridImageContainer>
      </SC.ImageContainer>
      <SC.OptionContainer>
        <SC.OptionUnitContainer>
          <ST.BoldH1>숙박 정보</ST.BoldH1>
          <SC.RoomOptionContainer>
            {OPTION_DATA.map(option => (
              <SC.IconContainer key={option.id}>
                {option.icon}
                <ST.H2>{option.name}</ST.H2>
                <ST.H3>{option.number}</ST.H3>
              </SC.IconContainer>
            ))}
          </SC.RoomOptionContainer>
          <ST.UnderlineDiv />
          <ST.BoldH1>상세 정보</ST.BoldH1>
          <SC.HotelOptionContainer>
            {detailData.convenients &&
              detailData.convenients.map((option, index) => (
                <ST.MarginedH2 key={index}>
                  {CONVENITENTS_DATA[option]}
                  <ST.MiddleSpan>{option}</ST.MiddleSpan>
                </ST.MarginedH2>
              ))}
          </SC.HotelOptionContainer>
        </SC.OptionUnitContainer>
        <Booking
          params={params}
          detailData={detailData}
          excludeDates={excludeDates}
        />
      </SC.OptionContainer>
      <ST.UnderlineDiv />
      <ST.BoldH1>호스팅 지역</ST.BoldH1>
      <SC.MapWrapper>
        <SC.MapContainer>
          {detailData.coordinate && (
            <KakaoMap
              data={detailData}
              size={{ width: '100%', height: '400px' }}
              type="detail"
            />
          )}
        </SC.MapContainer>
      </SC.MapWrapper>
    </SC.DetailContainer>
  );
};

export default Detail;
