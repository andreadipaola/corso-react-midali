import "./Navbar.css";

const Navbar = () => {
  const x = 999;
  const img = "vite";
  const img2 = "react";
  return (
    <>
      <div>{x > 1000 ? "sopra 1000" : "sotto 1000"}</div>
      <div>{x.toFixed(3)}</div>
      <img src={`/${img}.svg`} alt="" />
      <img src={`../assets/${img2}.svg`} alt="" />
      <img src="../assets/react.svg" alt="" />
      <div className={`box rounded ${x < 10 ? "rotated" : ""}`}>x é {x}</div>
      <ul>
        <li>Hello World</li>
        <li>Hello World</li>
        <li>Hello World</li>
      </ul>
    </>
  );
};

export default Navbar;
