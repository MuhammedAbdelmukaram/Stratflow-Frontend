import React from "react";

const GraphCard = ({imgSrc, title, description, link}) => {
    return (
        <div
            className={"single-news-card"}
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                border: "1px solid #A9A9A9",
                boxSizing: "border-box",
                width: 300,
                height: 174,
                padding: 15,
                marginLeft: 10,
            }}
        >
            <p style={{
                color:"#06AD85",
            }}>{title}</p>
            <div style={{display:"flex", justifyContent:"space-between", paddingLeft:8}}>
                <img src={imgSrc}
                     style={{width: 70, height: 70}}
                     alt=""/>
                <p style={{
                    width:145,
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    fontSize:12,
                }}
                >
                    {description}
                </p>
            </div>
            <a
                style={{
                    marginTop:"auto",
                    marginLeft:"auto",
                    fontSize:12,
                    textDecoration:"none",
                    color:"#06AD85",
                }}
                href={link}
            >
                See more
            </a>
        </div>
    );
};
