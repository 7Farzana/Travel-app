import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Click to join Us!</h1>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
