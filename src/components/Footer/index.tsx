import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <ul>
            <Link to="/categories#rpg">RPG</Link>
          </ul>
          <ul>
            <Link to="/categories#action">Ação</Link>
          </ul>
          <ul>
            <Link to="/categories#sports">Esporte</Link>
          </ul>
          <ul>
            <Link to="/categories#simulation">Simulação</Link>
          </ul>
          <ul>
            <Link to="/categories#fight">Luta</Link>
          </ul>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <ul>
            <Link to="/#on-sale">Promoções</Link>
          </ul>
          <ul>
            <Link to="/#coming-soon">Em breve</Link>
          </ul>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
