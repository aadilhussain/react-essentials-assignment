import { useState } from "react";

import Header from "./Header";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import Bio from "./Bio";
import Skills from "./Skills";
import Footer from "./Footer";

function ProfileCard() {

    const [darkMode, setDarkMode] = useState(false);

    const skills = [
        "PHP",
        "Laravel",
        "React",
        "JavaScript",
        "MySQL",
        "AWS",
    ];

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "card dark" : "card"}>

            <Header
                darkMode={darkMode}
                toggleTheme={toggleTheme}
            />

            <div className="profile">

                <Avatar />

                <UserInfo />

            </div>

            <Bio />

            <Skills skills={skills} />

            <Footer />

        </div>
    );
}

export default ProfileCard;