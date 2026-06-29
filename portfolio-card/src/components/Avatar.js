import { useState } from "react";

import img1 from "../assets/aadil1.jpg";
import img2 from "../assets/aadil2.jpg";
import img3 from "../assets/aadil3.jpg";

function Avatar() {

    const images = [img1, img2, img3];

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((index + 1) % images.length);
    };

    const prev = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    return (
        <div className="avatar-box">

            <img
                src={images[index]}
                alt="Profile"
                className="avatar"
            />

            <div className="avatar-buttons">

                <button onClick={prev}>◀</button>

                <button onClick={next}>▶</button>

            </div>

        </div>
    );
}

export default Avatar;