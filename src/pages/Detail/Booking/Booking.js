import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyDatePicker } from '../../../styles/Content.styled';
import moment from 'moment';
import { ko } from 'date-fns/esm/locale';
import { BookingButton, CountButton } from '../../../styles/Button.styled';
import * as SF from '../../../styles/Form.styled';
import * as ST from '../../../styles/Content.styled';
import * as SC from '../../../styles/Container.styled';
import './DatePicker.css';

const Booking = props => {
  const { detailData, excludeDates } = props;
  const [count, setCount] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [fixed, setFixed] = useState(false);

  const navigate = useNavigate();
  const [startDate, endDate] = dateRange;
  const checkInDate = startDate && moment(startDate).format('YYYY-MM-DD');
  const checkOutDate = endDate && moment(endDate).format('YYYY-MM-DD');

  const duration = moment
    .duration(moment(checkOutDate).diff(moment(checkInDate)))
    .asDays();

  const wonPrice = detailData?.price
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const sumPrice = (detailData?.price * duration)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const countHandler = operation => {
    if (operation === 'increment' && count < detailData.guestMax) {
      setCount(prev => prev + 1);
    } else if (operation === 'decrement' && count > 0) {
      setCount(prev => prev - 1);
    } else if (operation === 'increment' && count >= detailData.guestMax) {
      alert('정원 초과입니다');
    }
  };

  const onClickButton = () => {
    if (count >= 1 && endDate) {
      navigate('/payment', {
        state: { detailData, checkInDate, checkOutDate, duration, count },
      });
    } else alert('인원 및 예약일을 선택하여 주세요');
  };

  const MyContainer = ({ className, children }) => {
    return (
      <SC.MyCalendarContainer className={className}>
        <ST.H1>{!isNaN(duration) && `${duration}박`}</ST.H1>
        <SC.CalendarFlexContainer>{children}</SC.CalendarFlexContainer>
      </SC.MyCalendarContainer>
    );
  };

  return (
    <SF.BookingForm duration={duration} className={fixed ? 'fixed' : ''}>
      <div>
        <ST.BigSpan>{`₩ ${wonPrice}`}</ST.BigSpan>
        <ST.Span>/박</ST.Span>
      </div>
      <SF.DateForm>
        <SF.CheckForm>
          <SF.CenterForm>
            <ST.BoldH3>예약일</ST.BoldH3>
          </SF.CenterForm>

          <MyDatePicker
            className="custom-date-picker"
            renderCustomHeader={({
              monthDate,
              customHeaderCount,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div>
                <button
                  aria-label="Previous Month"
                  className="react-datepicker__navigation react-datepicker__navigation--previous"
                  style={
                    customHeaderCount === 1 ? { visibility: 'hidden' } : null
                  }
                  onClick={decreaseMonth}
                >
                  <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                    {'<'}
                  </span>
                </button>
                <span
                  className="react-datepicker__current-month"
                  style={{ fontWeight: '14px' }}
                >
                  {monthDate.toLocaleString('kr-Kr', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <button
                  aria-label="Next Month"
                  className="react-datepicker__navigation react-datepicker__navigation--next"
                  style={
                    customHeaderCount === 0 ? { visibility: 'hidden' } : null
                  }
                  onClick={increaseMonth}
                >
                  <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                    {'>'}
                  </span>
                </button>
              </div>
            )}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            excludeDates={excludeDates}
            onChange={update => {
              setDateRange(update);
            }}
            isClearable={true}
            dateFormat="yyyy.MM.dd"
            locale={ko}
            monthsShown={2}
            showPopperArrow={false}
            calendarContainer={MyContainer}
            popperPlacement="auto"
          />
        </SF.CheckForm>
        <SF.CountForm>
          <ST.H3>인원</ST.H3>
          <CountButton onClick={() => countHandler('decrement')}>-</CountButton>
          <ST.H2>{count}</ST.H2>
          <CountButton onClick={() => countHandler('increment')}>+</CountButton>
        </SF.CountForm>
      </SF.DateForm>
      <BookingButton onClick={onClickButton}>예약하기</BookingButton>
      <ST.H3>예약 확정 전에는 요금이 청구되지 않습니다.</ST.H3>
      <ST.BetweenDiv duration={duration}>
        <ST.UnderlinedH2>{`₩ ${wonPrice} x ${duration}박`}</ST.UnderlinedH2>
        <ST.H2>{`₩ ${sumPrice}`}</ST.H2>
      </ST.BetweenDiv>
      <ST.Underline duration={duration} />
      <ST.BetweenDiv duration={duration}>
        <ST.BoldH2>총합계</ST.BoldH2>
        <ST.BoldH2>{`₩ ${sumPrice}`}</ST.BoldH2>
      </ST.BetweenDiv>
    </SF.BookingForm>
  );
};

export default Booking;
