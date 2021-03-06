import React, { useEffect, useState } from "react";
import { AppendElement } from "../../Components/BuildingElement/BuildingUtility";
import TwoLayout from "../../Components/BuildingElement/TwoLayout";
import CreatePageSidebar from "../../Components/CreatePageSidebar/CreatePageSidebar";
import InsertMediaBar from "../../Components/InsertMediaBar/InsertMediaBar";
import TextWriterBox from "../../Components/TextWritterBox/TextWritterBox";
import placeholder_image from "../../Images/image-uploader-thumb.svg";

const CreatePage = () => {
    const [isInsertMediaBar, setIsInsertMediaBar] = useState(null);
    const [isTextBar, setIsTextBar] = useState(false);

    useEffect(() => {
        const appender = new AppendElement();
        const defaultImage = appender.defaultPlaceholderUploader;
        console.log(defaultImage);

        if (defaultImage) {
            setIsInsertMediaBar(false);
        } else {
            setIsInsertMediaBar(true);
        }


        appender.pageArea?.addEventListener("DOMNodeInserted", () => {
            eventForUpload();
            handleRemoveImage()
        });
        const eventForUpload = function () {
            const allUploadBtn = document?.querySelectorAll(".image-uploader-area .uploader-input");
            console.log(allUploadBtn);
            allUploadBtn.forEach((item) => {
                console.log(item);
                if (item) {
                    item.onchange = (e) => appender.handleFileUpload(e);
                }
            });
        };

        const handleRemoveImage = () => {
            const allCancelButton = appender.pageId?.querySelectorAll(".cancel-button");
            [...allCancelButton].forEach(button => {
                
                button.onclick = () => appender.handleRemoveImage(button.dataset.id)
            })
        }
        eventForUpload();
        handleRemoveImage()


    }, []);

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
                                        Drag and drop an Image, or{" "}
                                        <label htmlFor="file-upload-1ddd" onClick={() => alert("please select an Grid")} className="theme-color">
                                            Browse
                                        </label>
                                        <input type="file" name="" id="file-upload-1" className="d-none" />
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className={`${isTextBar ? "" : "d-none"}`}>
                            <TextWriterBox setIsTextBar={setIsTextBar} />
                        </div>
                        {isInsertMediaBar && <InsertMediaBar setIsTextBar={setIsTextBar} setIsInsertMediaBar={setIsInsertMediaBar} />}
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
