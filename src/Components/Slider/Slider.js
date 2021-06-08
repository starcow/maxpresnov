import React, { Component } from "react"
import styled from 'styled-components'
import Slider from 'react-slick'
import data from '../../Images/SliderData'


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
`

const Title = styled.h1`
  color: ${Colors.yellow};
  display: block;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
`

const DescriptionContainer = styled.div`
  bottom: 3rem;
  left: 3rem;
  background-color: ${Colors.black};
  padding: 1.5rem 2rem;
  position: absolute;
`

const Logo = styled.h1`
  background-color: ${Colors.yellow};
  color: #fff;
  padding: 1rem 2rem;
  font-weight: 300;
  display: inline-flex;
  position: absolute;
  font-family: Roboto;
  font-size: 35px;
  top: 3rem;
  left: 3rem;
  text-transform: uppercase;
  z-index: 999;
`

const Description = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-size: 18px;
  display: block;
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
        <Logo>Max<br /> Presnov</Logo>
        <Slider {...settings} style={{ width: '100vw' }}>
          {data.map((e, key) => <Slide key={`ts:${key}`} image={e.image.default}>
            {/* <img src={e.image.default} /> */}
            {/* <h1>{e.title} </h1> */}
            <DescriptionContainer>
              <Title>{e.title}</Title>
              <Description>{e.description}</Description>
            </DescriptionContainer>
          </Slide>)}
        </Slider>
      </Container>
    )
}

export default SliderComponent