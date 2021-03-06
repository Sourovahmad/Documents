import React, { useEffect, useState } from "react";
import { AppendElement } from "../../Components/BuildingElement/BuildingUtility";
import TwoLayout from "../../Components/BuildingElement/TwoLayout";
import CreatePageSidebar from "../../Components/CreatePageSidebar/CreatePageSidebar";
import InsertMediaBar from "../../Components/InsertMediaBar/InsertMediaBar";
import TextWriterBox from "../../Components/TextWritterBox/TextWritterBox";
import placeholder_image from "../../Images/image-uploader-thumb.svg";

const CreatePage = () => {

    const [isInsertMediaBar, setIsInsertMediaBar] = useState(null)
    const [isTextBar, setIsTextBar] = useState(false)

    useEffect(() => {
        const defaultImage = document.querySelector(".image-uploader-area.one__layout__site.default");
        if(defaultImage){
            setIsInsertMediaBar(false)
        } else{
            setIsInsertMediaBar(true)
        }

        const appender = new AppendElement()
        console.log(appender.randomIdGenerator(15));
    });

   

    return (
        <section id="create-page-dashboard">
            <div className="sidebar">
                <CreatePageSidebar setIsTextBar={setIsTextBar} setIsInsertMediaBar={setIsInsertMediaBar} />
            </div>
            <div className="content">
                <div className="content__container">
                    <div className="project-wrapper">
                        {/* Page Area :don't touch this id or class className */}
                        <div id="project__page__building__area__dontBeDuplicate_Id">
                            <div id="photoPholio-page" className="page">
                                <div className="image-uploader-area one__layout__site default">
                                    <img className="placeholder_image" src={placeholder_image} alt="" />
                                    <p className="mt-2 placeholder_text">
                                        Drag and drop an Image, or <span className="theme-color">Browse</span>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`${isTextBar?"":"d-none"}`}>
                            <TextWriterBox setIsTextBar={setIsTextBar} />
                        </div>
                        {isInsertMediaBar && <InsertMediaBar  setIsTextBar={setIsTextBar} setIsInsertMediaBar={setIsInsertMediaBar} />}
                    </div>
                    <div className="button_wrapper">
                        <button className="btn btn-lg theme-btn rounded w-100 p-2">Button Place</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreatePage;
