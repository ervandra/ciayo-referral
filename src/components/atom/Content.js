import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { theme } from '../../styles';

const { sizes } = theme;

const Container = styled.section`
  position: relative;
  padding: 1rem;
  h1 {
    font-size: ${sizes.sm};
    font-weight: bold;
  }
  p {
    font-size: ${sizes.xs};
  }
`;

const Content = () => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true)
    }, 1000);
    return () => {
      clearTimeout(timeout)
    };
  }, [])

  const one = () => (
    <h1>Event Description & Rules</h1>
  )

  const two = () => (
    <p style={{ transitionDelay: '100ms' }}>Biar kita semua semangat berbagi dan mengajak teman untuk mendownload applikasi CIAYO Comics maka CIAYO akan membagikan hadiah-hadiah yang sangat menarik buat kalian.</p>
  )

  const three = () => (
    <p style={{ transitionDelay: '200ms' }}>Ga cuma itu aja loh! Hadiahnya akan terus bertambah mengikuti total jumlah user yang mendownload! </p>
  )

  const four = () => (
    <p style={{ transitionDelay: '300ms' }}>Selain itu, semakin banyak kamu berhasil mengajak teman kamu untuk mendownload dan bergabung dengan CIAYO Comics maka semakin besar kesempatan kamu buat menangin hadiah-hadih fantastis tersebut. Sebab kamu akan mendapatkan 1 Voucher Undian untuk setiap 1 orang yang berhasil kamu ajak mendownload dan mendaftar sebagai user CIAYO Comics.</p>
  )

  const five = () => (
    <p style={{ transitionDelay: '400ms' }}>Pasti penasarankan apa aja sih hadiahnya, daritadi bahas hadiah terus tapi ga dikasih tau hadiahnya. Nih langsung aja chek di TKP.</p>
  )

  const items = [one, two, three, four, five];

  return (
    <Container>
      <TransitionGroup component={null}>
        {isMounted && items.map((item, i) => (
          <CSSTransition key={i} classNames="fadeup" timeout={600}>
            {item}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  )
}

export default Content;