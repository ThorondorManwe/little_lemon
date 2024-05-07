import Logo from "../assets/little_lemon_logo.svg";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>

      <section>
        <h1>Little Lemon</h1>
        <p>Chicago</p>

        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        {/* Image */}

        {/* button */}
        
      </section>
    </header>
  );
};

export default Header;
