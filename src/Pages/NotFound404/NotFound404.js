import React from "react";

export default function NotFound404() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", minHeight: "100vh"}}>
            <img
                style={{
                    width: "100%",
                    maxWidth: 400,
                    borderRadius: 30,
                    boxShadow: "0 0 20px white",
                }}
                src={require("../../Assets/imgs/404.avif")}
                alt=""
            />
            
            <div style={{fontSize: 20, width: "100%"}}>
              اوه چنین صفحه ای وجود نداره
            </div>
        </div>
    );
}
