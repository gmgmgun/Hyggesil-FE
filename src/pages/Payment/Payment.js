import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import moment from 'moment';
import { MdArrowBackIos } from 'react-icons/md';
import * as SC from '../../styles/Container.styled';
import * as SB from '../../styles/Button.styled';
import * as ST from '../../styles/Content.styled';

const Payment = () => {
  const location = useLocation();

  const paymentDetails = {
    data: location.state.detailData,
    duration: location.state.duration,
    people: location.state.count,
    checkin: location.state.checkInDate,
    checkout: location.state.checkOutDate,
  };
  const { data, duration, people, checkin, checkout } = paymentDetails;
  const checkInInfo = moment(checkin).format('M월 D일');
  const checkOutInfo = moment(checkout).format('M월 D일');
  const refundingDate = moment(checkin).subtract(1, 'day').format(`M월 D일`);
  const navigate = useNavigate();

  const BookingHandler = () => {
    const token = localStorage.getItem('token');
    fetch('http://hyggesil.com/reservations/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        hotelId: data.id,
        checkIn: checkin,
        checkOut: checkout,
        totalPrice: data.price * duration,
        accessToken: token,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert(`결제가 완료되었습니다.`);
        navigate('/');
      })
      .catch(err => alert('서버와의 연결이 원활하지 않습니다'));
  };

  return (
    <SC.PaymentContainer>
      <SC.BackContainer>
        <SB.BackButton href="javascript:history.back();">
          <MdArrowBackIos />
        </SB.BackButton>
        <ST.H0>예약 요청</ST.H0>
      </SC.BackContainer>
      <SC.InfoContainer>
        <SC.LeftContainer>
          <SC.PromoteContainer>
            <ST.H2>흔치 않은 기회입니다.</ST.H2>
            <ST.H2>{`${data.name} 객실은 보통 예약이 가득 차 있습니다.`}</ST.H2>
            <ST.Jewel src="images/jewel.png" />
          </SC.PromoteContainer>
          <ST.MarginTopedH1>예약 정보</ST.MarginTopedH1>
          <ST.MarginTopedH2>날짜</ST.MarginTopedH2>
          <ST.InfoH2>{`${checkInInfo} ~ ${checkOutInfo}`}</ST.InfoH2>
          <ST.MarginTopedH2>게스트</ST.MarginTopedH2>
          <ST.InfoH2>{`게스트 ${people} 명`}</ST.InfoH2>
          <ST.UnderlineMarginedDiv />
          <ST.MarginTopedH1>기본 규칙</ST.MarginTopedH1>
          <ST.InfoH2>
            훌륭한 게스트가 되기 위한 몇 가지 간단한 규칙을 지켜주실 것을 모든
            게스트에게 당부드리고 있습니다.
          </ST.InfoH2>
          <ST.List>호텔 이용규칙을 준수하세요.</ST.List>
          <ST.List>호스트의 객실도 자신의 집처럼 아껴주세요.</ST.List>
          <ST.UnderlineMarginedDiv />
          <ST.MarginTopedH1>환불 정책</ST.MarginTopedH1>
          <ST.InfoH2>
            {`${refundingDate} 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다. 그
            이후에 취소하면 예약 대금이 환불되지 않습니다`}
          </ST.InfoH2>
          <ST.UnderlineMarginedDiv />
          <ST.H3>
            아래 버튼을 선택하면 호스트가 설정한 호텔 이용규칙, 게스트에게
            적용되는 기본 규칙, 휘게실 재예약 및 환불 정책에 동의하며, 피해에
            대한 책임이 본인에게 있을 경우 휘게실이 결제 수단으로 청구의 조치를
            취할 수 있다는 사실에 동의하는 것입니다. 호스트가 예약 요청을
            수락하면 표시된 총액이 결제되는 데 동의합니다.
          </ST.H3>
          <SB.PaymentButton onClick={BookingHandler} id="book-button">
            예약 요청
          </SB.PaymentButton>
        </SC.LeftContainer>
        <PaymentForm data={data} duration={duration} />
      </SC.InfoContainer>
    </SC.PaymentContainer>
  );
};

export default Payment;
