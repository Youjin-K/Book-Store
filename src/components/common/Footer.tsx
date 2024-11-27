import styled from "styled-components";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <>
      <h1 className="logo">
        <img src={logo} alt="Book Store" />
      </h1>
      <div className="copyright">
        <p>copyright(c), 2024, book store.</p>
      </div>
    </>
  );
}

const FooterStyle = styled.footer`
width: 100%
margin: 0 auto;
max-width: ${({ theme }) => theme.layout.width.large};
border-bottom: 1px solid ${({ theme }) => theme.color.background};
justify-content: space-between;
display: flex;

.logo {
  img {
  width: 140px;
    }
  }

  .copyright {
    p {
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.text}
      }
    }
  `;

export default Footer;
