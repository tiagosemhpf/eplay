import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <ul>
            <Link>RPG</Link>
          </ul>
          <ul>
            <Link>Ação</Link>
          </ul>
          <ul>
            <Link>Aventura</Link>
          </ul>
          <ul>
            <Link>Esporte</Link>
          </ul>
          <ul>
            <Link>Simulação</Link>
          </ul>
          <ul>
            <Link>Estratégia</Link>
          </ul>
          <ul>
            <Link>FPS</Link>
          </ul>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <ul>
            <Link>Novidades</Link>
          </ul>
          <ul>
            <Link>Promoções</Link>
          </ul>
          <ul>
            <Link>Em breve</Link>
          </ul>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
