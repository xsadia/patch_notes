import { Container, FixedContainer, LogoContainer, LogoutButton, NavContainer, UserGreeting } from "./styles";
import { FiSun, FiTwitch, FiTwitter } from 'react-icons/fi';
import { useAuth } from "hooks/useAuth";
import { IoMdLogOut } from 'react-icons/io';
import { BsFilePost } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import Link from "next/link";

export function Header() {
  const { user, isAuthenticated, signOut } = useAuth();
  return (
    <FixedContainer>
      <Container>
        <Link href='/posts'>
          <LogoContainer>
            <h1>Patch notes </h1>
            <FiSun />
          </LogoContainer>
        </Link>
        <NavContainer>
          <h2><Link href='/posts'>Posts</Link></h2>
          <BsFilePost color="#000" />
          {user?.role === 'admin' ? (
            <>
              <h2><Link href='/posts/create'>Escrever</Link></h2>
              <GrAdd color="#000" />
            </>
          ) : null}
          <h2><a href="">Twitter</a></h2>
          <FiTwitter color="#000" />
          <h2><a href="https://twitch.tv/erinzinho">Twitch </a></h2>
          <FiTwitch color='#000' />
          {isAuthenticated && (
            <>
              <UserGreeting>
                Bem-vinde <span>{user.username}</span>
                <LogoutButton onClick={signOut} ><IoMdLogOut /></LogoutButton>
              </UserGreeting>
              
            </>
          )}
        </NavContainer>
      </Container>
    </FixedContainer>
  );
}