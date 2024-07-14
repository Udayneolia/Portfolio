import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Uday</span>
            <div className="list">
                <ul className="list-item">
                    <li className="item"><a href="#">about</a></li>
                    <li className="item"><a href="#">services</a></li>
                    <li className="item"><a href="#">projects</a></li>
                </ul>
            </div>
            <div className="btn-list">
                <button>let's talk</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar