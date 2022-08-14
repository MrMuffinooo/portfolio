import React from "react"
import styled from "styled-components"
import IntroductionPanel from "../components/IntroductionPanel"
import MessagesPanel from "../components/MessagesPanel"
import AboutPanel from "../components/AboutPanel"
import ContactPanel from "../components/ContactPanel"

export default function Home() {
  const OutmostContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
  `

  const CenterContainer = styled.div`
    max-width: 1920px;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    flex-flow: column;
  `

  return (
    <OutmostContainer>
      <CenterContainer>
        <IntroductionPanel />
        <MessagesPanel />
        <AboutPanel />
        <ContactPanel />
      </CenterContainer>
    </OutmostContainer>
  )
}
