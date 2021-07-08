import { Container, LogoContainer, NavContainer } from "./styles";
import { FiSun, FiTwitch, FiTwitter } from 'react-icons/fi';


export function Header() {
  return (
    <Container>
      <LogoContainer>
        <h1>Patch notes </h1>
        <FiSun />
      </LogoContainer>

      <NavContainer>
        <h2><a href="">Twitter</a></h2>
        <FiTwitter color="#000" />
        <h2><a href="https://twitch.tv/karinnee">Twitch </a></h2>
        <FiTwitch color='#000' />
      </NavContainer>
    </Container>
  );
}