function Header({ darkMode, toggleTheme }) {

    return (

        <div className="header">

            <button
                className="theme-btn"
                onClick={toggleTheme}
            >
                {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>

        </div>

    );

}

export default Header;