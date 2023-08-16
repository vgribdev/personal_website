import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

const slideDown = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

export const Main = styled.div`
    overflow: hidden;
    position: relative;
    font-size: 18px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: 0 18px;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h1 {
        width: 100%;
        font-size: 64px;
    }

    p {
        width: 100%;
        margin-top: 32px;
        font-size: 22px;
        text-transform: uppercase;
    }

    @media (max-width: 450px) {
        text-align: left;
        h1 {
            line-height: 1.2;
            font-size: 52px;
        }
        p {
            line-height: 1.4;
            font-size: 18px;
        }
    }
`

export const Line = styled.div`
    height: 2px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
`

export const ShortLine = styled(Line)`
    width: 60px;
`

export const Page = styled.div`
    position: relative;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 32px;
    top: 64px;
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 12px;
`

export const Footer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 32px;
    bottom: 64px;
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 12px;
    a {
        display: flex;
        cursor: pointer;
        animation: 0.6s ease-out 0s 1 ${slideUp};
    }
    a:hover {
        opacity: 0.6;
    }
`

export const AnimatedLogo = styled.div`
    display: flex;
    animation: 0.6s ease-out 0s 1 ${slideDown};
`

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-direction: row;
`
