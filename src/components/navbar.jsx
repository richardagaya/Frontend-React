const Navbar = () => {
    return (  
        <nav className="bg-green-700 p-4">
        <ul className="mx-auto flex justify-between items-center ">
          <li className="flex space-x-4">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    );
}
export default Navbar;