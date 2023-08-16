import { useTheme } from 'styled-components'
import { GithubIcon } from '../components/svg/Github'
import { LinkedinIcon } from '../components/svg/Linkedin'
import {
    Header,
    Line,
    Page,
    SocialContainer,
    Main,
    Content,
    Footer,
    AnimatedLogo
} from '../components/HomePage.style'
import { Logo } from '../components/svg/Logo'

const githubUrl = 'https://github.com/vgribdev'
const linkedinUrl = 'https://linkedin.com/in/vgrib'

const Social: React.FC = () => {
    const theme = useTheme()
    return (
        <SocialContainer>
            <a href={githubUrl}>
                <GithubIcon color={theme.palette.primary.contrastText} />
            </a>

            <a href={linkedinUrl}>
                <LinkedinIcon color={theme.palette.primary.contrastText} />
            </a>
        </SocialContainer>
    )
}

export default function Home() {
    const theme = useTheme()
    return (
        <Main>
            <Page>
                <Header>
                    <Line variant="short" />
                    <AnimatedLogo>
                        <Logo fill={theme.palette.primary.contrastText}></Logo>
                    </AnimatedLogo>
                    <Line variant="long" />
                </Header>
                <Content>
                    <h1>Hi, I&apos;m Valentin Grib!</h1>
                    <p>A Full-stack developer based in Italy</p>
                </Content>
                <Footer>
                    <Line variant="long" />
                    <Social />
                    <Line variant="short" />
                </Footer>
            </Page>
        </Main>
    )
}
