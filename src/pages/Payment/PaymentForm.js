import React from 'react';
import * as SF from '../../styles/Form.styled';
import * as SC from '../../styles/Container.styled';
import * as ST from '../../styles/Content.styled';

const PaymentForm = props => {
  const { data, duration } = props;

  const wPrice = data?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const totalPrice = (data?.price * duration)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <SF.PaymentForm>
      <SC.PaymentImageWrapper>
        <SC.PaymentImageContainer>
          <img src={data.images[0]} alt="thumbnail" />
        </SC.PaymentImageContainer>
        <div>
          <ST.PaymentInfoColorDiv>hyggesil의 추천</ST.PaymentInfoColorDiv>
          <ST.PaymentInfoDiv>{data.name}</ST.PaymentInfoDiv>
        </div>
      </SC.PaymentImageWrapper>
      <ST.UnderlineDiv />
      <ST.ProtectionDiv>
        <img src="images/logo.svg" alt="jewel" />
        <ST.Span>를 통한 예약보호</ST.Span>
      </ST.ProtectionDiv>
      <ST.UnderlineDiv />
      <ST.BoldH1>요금 세부정보</ST.BoldH1>
      <ST.PriceLine>
        <ST.H2>{`₩ ${wPrice} x ${duration}박`}</ST.H2>
        <ST.H2>{`₩ ${totalPrice}`}</ST.H2>
      </ST.PriceLine>
      <ST.UnderlineDiv />
      <ST.PriceLine>
        <ST.BoldH2>총 합계(KRW)</ST.BoldH2>
        <ST.BoldH2>{`₩ ${totalPrice}`}</ST.BoldH2>
      </ST.PriceLine>
      <ST.UnderlineDiv />
      <ST.AlertDiv>
        <ST.Span>
          해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를 부과할
          수 있습니다.
        </ST.Span>
      </ST.AlertDiv>
    </SF.PaymentForm>
  );
};

export default PaymentForm;
