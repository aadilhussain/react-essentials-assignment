import { useState } from "react";

function Footer() {

    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const contact = () => {
        alert(
            "Thanks for visiting!\n\nEmail: aadilhussain1988@gmail.com"
        );
    };

    return (
        <div className="footer">

            <button
                className="like-btn"
                onClick={handleLike}
            >
                ❤️ {likes}
            </button>

            <button
                className="contact-btn"
                onClick={contact}
            >
                Contact
            </button>

        </div>
    );
}

export default Footer;