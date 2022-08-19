import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(){
    return (
        <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">Logo</a>
    </div>
    <nav>
      <div class="nav-mobile">
        <FontAwesomeIcon className="menu-item" id='home' icon="fa-solid fa-house" />
        <FontAwesomeIcon className="menu-item" id='shopping' icon="fa-solid fa-cart-shopping" />
        <FontAwesomeIcon className="menu-item" id='about' icon="fa-solid fa-circle-question" />
        <FontAwesomeIcon className="menu-item" id='login' icon="fa-solid fa-user" />
        <FontAwesomeIcon className="menu-item" id='dark' icon="fa-solid fa-moon" />
      </div>
      <div class="navigation">
        <ul class="nav-desktop">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Shop</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>

    );
}

export default Navbar;