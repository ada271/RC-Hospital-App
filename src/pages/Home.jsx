import React, { useState } from "react";

import { doctorData } from "../helper/Data";

const Home = () => {
    const [doktorlar, setDoktorlar] = useState(doctorData);

    return (
        <div>
            <div>
                <header className="header">
                    <h1>HOSPITAL</h1>
                    <div className="dr">
                        {doctorData.map((doc) => (
                            <div>
                                <img
                                    width="180px"
                                    height="150px"
                                    className="btn"
                                    style={{backgroundColor:"aqua"}}
                                    src={doc.doctorImg}
                                    alt=""
                                />
                                <h4 style={{backgroundColor:"aqua", borderLeft:"10px solid blue"}}>{doc.doctorName}</h4>
                            </div>
                        ))}
                    </div>
                </header>
                <div>{/* hasta ekle */}</div>
                {/* hasta liste */}
            </div>
        </div>
    );
};

export default Home;
