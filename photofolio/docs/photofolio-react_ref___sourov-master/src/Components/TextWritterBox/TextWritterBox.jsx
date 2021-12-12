import { InlineIcon } from "@iconify/react";
import React from "react";
import { AppendElement } from "../BuildingElement/BuildingUtility";

const TextWriterBox = ({ setIsTextBar }) => {
    const appender = new AppendElement();

    const textAppender = (e) => {
        if (e.key === "Enter") {
            appender.appendingText();
        }
    };
    return (
        <>
            <div className={`text_writer_box`} id="text-writer__box">
                <input onKeyPress={textAppender} placeholder="Enter Your Text Here..." type="text" className="form-control box__input" />
                <span onClick={()=> setIsTextBar(false)} className="cancel-icon">
                    <InlineIcon icon="la:times" />
                </span>
            </div>
        </>
    );
};

export default TextWriterBox;
