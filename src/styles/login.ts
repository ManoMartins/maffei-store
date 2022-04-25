import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 26rem;
  margin: 0 auto;

  > div + div {
    margin-top: 1rem;
  }
`

export const Title = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 11.25rem;
  color: ${props => props.theme.colors.purple[900]};
`

export const SectionTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.colors.black[500]};
`

export const CoverContainer = styled.div`
  width: 40%;
  padding: 0 5rem;
  background-color: ${props => props.theme.colors.purple[100]};
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Cover = styled(Image)`
  width: 408px;
  height: 279px;
`
