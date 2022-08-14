import React from "react"
import styled from "styled-components"
import wall from "../../static/wall.jpg"
import avatar from "../../static/av.png"
import { device } from "../util/globals"
import Typed from "react-typed"

function IntroductionPanel() {
  const Container = styled.div`
    height: 100vh;
    min-height: 500px;
    max-height: 1280px;
    background-image: url(${wall});
    display: flex;
    justify-content: space-around;
    align-items: center;

    flex-direction: row;
    @media ${device.tablet} {
      flex-direction: column-reverse;
    }
  `

  const Terminal = styled.div`
    /* background-image: url(${wall}); */
    box-sizing: border-box;
    background-color: white;
    border-radius: 17px 17px 0 0;
    border: #adadad 2px solid;
    box-shadow: 11px 11px 28px 2px rgba(54, 54, 54, 1);
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 40%;
    @media ${device.tablet} {
      width: 80%;
    }
  `

  const Avatar = styled.div`
    background-image: url(${avatar});
    background-size: cover;
    border-radius: 50%;
    border: #ffe299 12px solid;

    width: 40vw;
    height: 40vw;
    max-width: 400px;
    max-height: 400px;
    @media ${device.tablet} {
      width: 80vw;
      height: 80vw;
    }
  `

  const TopBar = styled.div`
    height: 30px;
    width: 100%;
    box-sizing: border-box;
    background: rgb(173, 173, 173);
    background: linear-gradient(
      0deg,
      rgba(173, 173, 173, 1) 0%,
      rgba(209, 209, 209, 1) 100%
    );
    border-radius: 13px 13px 0 0;
    display: flex;
    align-items: center;
    padding-left: 10px;
  `

  const BarDot = styled.div`
    height: 13px;
    width: 13px;
    background-color: red;
    margin-left: 12px;
    border-radius: 50%;
  `

  const Typing = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    font-size: 64px;
    font-family: "Roboto Mono", monospace;
    @media ${device.desktop} {
      font-size: 52px;
    }
  `

  return (
    <Container>
      <Terminal>
        <TopBar>
          <BarDot style={{ backgroundColor: "red" }} />
          <BarDot style={{ backgroundColor: "yellow" }} />
          <BarDot style={{ backgroundColor: "green" }} />
        </TopBar>
        <Typing>
          <Typed
            strings={[
              "Hello<br>",
              "Hello<br>I'm Pawel",
              "Hello<br>I'm Pawe",
              "Hello<br>I'm Paweł",
              "Hello<br>I'm Paweł :I ",
            ]}
            typeSpeed={40}
            backSpeed={50}
            cursorChar={"█"}
          />
        </Typing>
      </Terminal>
      <Avatar />
    </Container>
  )
}

export default IntroductionPanel
