import React, { useState } from "react";
import gridLayout_icon from "../../Images/grid-layout-icon.svg";
import ADD_PHOTO_ICON from "../../Images/image-icon.svg";
import { CreateButton } from "../SidebarButtons/CreateButton";
import TEXT_IMAGE_ICON  from "../../Images/text-icon.svg"
import AddPhotoButton from "../SidebarButtons/AddPhotoButton";
import TextButton from "../SidebarButtons/TextButton";

const CreatePageSidebar = ({ setIsInsertMediaBar, setIsTextBar }) => {
    const [clicked, setClicked] = useState("");
 
    return (
        <div id="create-page-sidebar">
            <CreateButton />
            <AddPhotoButton  setIsInsertMediaBar={setIsInsertMediaBar} icon={ADD_PHOTO_ICON} clicked={clicked} setClicked={setClicked} id="add_image_button__" />
            <TextButton setIsInsertMediaBar={setIsInsertMediaBar} setIsTextBar={setIsTextBar} setIsInsertMediaBar={setIsInsertMediaBar} icon={TEXT_IMAGE_ICON} clicked={clicked} setClicked={setClicked} id="grid_layout_button__" />
        </div>
    );
};

export default CreatePageSidebar;
