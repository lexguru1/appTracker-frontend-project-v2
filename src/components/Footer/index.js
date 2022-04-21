import "./styles.css";
import logo from "../../assets/logo.svg";
import FooterCard from "../FooterCard";

const Footer = () => {
  return (
    <div className="hero-banner">
      <img src={logo} width="150" alt="logo" />
      <FooterCard
        title="PRODUCT"
        item1="Pipeline"
        item2="Job Tracking"
        item3=""
      />
      <FooterCard title="USE CASES" item1="Recruitment" item2="" item3="" />
      <FooterCard title="PRICING" item1="Plans" item2="" item3="" />
      <FooterCard
        title="COMPANY"
        item1="About us"
        item2="Customers"
        item3="Contact"
      />
      <FooterCard
        title="LEGAL"
        item1="Terms & Conditions"
        item2="Privacy"
        item3=""
      />
    </div>
  );
};

export default Footer;
