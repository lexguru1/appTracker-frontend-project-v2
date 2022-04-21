import "./styles.css";
const FooterCard = (props) => {
  return (
    <div className="footer-card">
      <a href="#">
        <h3>{props.title}</h3>
      </a>

      <br />
      <a href="#">
        <p>{props.item1}</p>
      </a>
      <a href="#">
        <p>{props.item2}</p>
      </a>
      <a href="#">
        <p>{props.item3}</p>
      </a>
    </div>
  );
};

export default FooterCard;
