import React, { Component } from "react"
import styled from 'styled-components'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import data from '../../Images/SliderData'

const imageOverlay = require('../../Images/background_overlay.png')

const Colors = {
  yellow: '#F8C521',
  black: '#000000'
}

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
`

const Slide = styled.div`
  background-image: url(${props => props.image});
  height: 100vh;
  width: 100vw;
  display: block !important;
  background-size: cover;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 600px) {
    animation: slide 7s linear infinite;
  }
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(${imageOverlay.default});
  z-index: 500;
`

const Title = styled.h1`
  color: ${Colors.yellow};
  display: block;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
`

const MenuItem = styled(Link)`
  background-color: #000;
  padding: 1rem;
  display: block;
  text-decoration: none;
  font-family: Roboto;
  font-size: 25px;
  color: white;
  margin: 0rem;
  transition: all 0.4s linear;
  &:hover {
    background-color: rgba(0,0,0,0.5);
  }
  cursor: pointer;
`

const MenuContainer = styled.div`
  position: absolute;
  top: 3.0rem;
  left: 3rem;
  z-index: 1111
  ;
` 

const DescriptionContainer = styled.div`
  bottom: 3rem;
  left: 3rem;
  background-color: ${Colors.black};
  padding: 1.5rem 2rem;
  position: absolute;
  z-index: 1250;
  @media (max-width: 600px) {
    bottom: 7rem;
    z-index: 50;
  }
`

// LOGO
const Logo = styled(Link)`
  background-color: ${Colors.yellow};
  color: #fff;
  padding: 2rem 2rem;
  display: block;
  text-decoration: none;
  font-weight: 350;
  display: inline-flex;
  font-family: Roboto;
  font-size: 50px;
  margin-bottom:0;
  /* top: 2rem;
  left: 3rem; */
  text-transform: uppercase;
  z-index: 1500;
  @media (max-width: 320px) {
    animation: slide 7s linear infinite;
  }
`

const Description = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-size: 18px;
  display: block;
  z-index: 1000;
  color: ${Colors.yellow};
`

function SliderComponent () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
<Container>
   
        <MenuContainer>
        <Logo to="/">Max<br /> Presnov</Logo>
          <MenuItem to='/portfolio'>ПОРТФОЛИО</MenuItem>
          <MenuItem>ОБО МНЕ</MenuItem>
          <MenuItem>КОНТАКТЫ</MenuItem>
        </MenuContainer>
        <Slider {...settings} style={{ width: '100vw'}}>
          {data.map((e, key) => <Slide key={`ts:${key}`} image={e.image.default}>
            <DescriptionContainer>
              <Title>{e.title}</Title>
              <Description>{e.description}</Description>
            </DescriptionContainer>
            <Overlay id="overlay"/>  
          </Slide>)}
        </Slider>
      </Container>
    )
}

export default SliderComponent