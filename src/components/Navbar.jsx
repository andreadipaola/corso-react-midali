import "./Navbar.css";
import react from "../assets/react.svg";

const Navbar = () => {
  const x = 9;
  const y = 11;
  const img = "vite";
  return (
    <>
      <div>{x > 1000 ? "sopra 1000" : "sotto 1000"}</div>
      <div>{x.toFixed(3)}</div>
      <img src={`/${img}.svg`} alt="" />
      <img style={{ height: "80px" }} src={react} alt="" />
      <div className={`box rounded ${x < 10 ? "rotated" : ""}`}>x é {x}</div>
      <div className="bg-red-500 rounded-lg w-25 h-25 rotate-45">Pima</div>
      <div className={`rounded-lg w-25 h-25 ${y < 10 ? "bg-red-500 rotate-45" : "bg-sky-500"}`}>Dopo</div>
      <ul>
        <li>Hello World</li>
        <li>Hello World</li>
        <li>Hello World</li>
      </ul>
    </>
  );
};

export default Navbar;
