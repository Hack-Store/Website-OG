import React from "react";

import "../CSS/Pages/Index.css";

function Index() {
    return (
        <div>
            <h3>Welcome to the Hack Store!</h3>
            <h4 style={{
                textAlign: "center",
                fontFamily: 'Raleway, Open Sans, Arial, sans-serif',
                fontSize: "2.1rem"
            }}>Creating apps is an <span className="highlight">incredible</span> feeling.</h4>
            <div className="announcement">
                <p>🎉 We're excited to announce that we're working on a new project! 🎉</p>
                <p>🚀 We're building a store that will let you upload your apps for FREE! 🚀</p>
                <p>🔥 Stay tuned for more updates! 🔥</p>
            </div>
        </div>
    );
}

export default Index;
