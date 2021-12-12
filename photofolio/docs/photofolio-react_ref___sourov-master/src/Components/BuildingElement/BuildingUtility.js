import mock_img from "../../Images/image-uploader-thumb.svg";

export class AppendElement {
    constructor() {
        this.pageId = document.querySelector("#project__page__building__area__dontBeDuplicate_Id");
        this.defaultPlaceholderUploader = document.querySelector(".image-uploader-area.one__layout__site.default");
        this.writingBox = document?.querySelector("#text-writer__box .box__input");
        this.pageArea = this.pageId?.querySelector("#photoPholio-page");
    }

    removingDefaultPlaceholder() {
        if (this.defaultPlaceholderUploader) {
            this.defaultPlaceholderUploader.remove();
        }
    }

    appendTwoGrid(image1 = mock_img, image2 = mock_img) {
        this.removingDefaultPlaceholder();
        const div = document?.createElement("div");
        div.className = "row tow__layout_site";
        const [id1, id2] = [this.randomIdGenerator(10), this.randomIdGenerator(10)];

        div.innerHTML = /* html */ `
                <div class="col-6 h-50 p-0">
                     <div class="p-2">
                         <div class="image-uploader-area" id="area-${id1}">
                             <img class="placeholder_image" src=${image1} alt="" />
                             <p class="mt-2 placeholder_text">
                                 Drag and drop an Image, or
                                 <label for="${id1}" class="theme-color  upload-btn">
                                     Browse
                                 </label>
                                 <input  type="file" name="" id="${id1}" class="d-none uploader-input" />
                             </p>
                             <div data-id="${id1}" class="cancel-button d-none">&times;</div>
                         </div>
                     </div>
                 </div>
                 <div class="col-6 h-50 p-0">
                     <div class="p-2">
                         <div class="image-uploader-area" id="area-${id2}">
                             <img class="placeholder_image" src=${image2} alt=""  />
                             <p class="mt-2 placeholder_text">
                                 Drag and drop an Image, or
                                 <label for="${id2}" class="theme-color  upload-btn">
                                     Browse
                                 </label>
                                 <input type="file" name="" id="${id2}" class="d-none uploader-input" />
                             </p>
                             <div data-id="${id2}" class="cancel-button d-none">&times;</div>

                         </div>
                     </div>
                 </div>`;

        this?.pageArea?.append(div);
    }

    appendOneGrid(image = mock_img) {
        this.removingDefaultPlaceholder();
        const id = this.randomIdGenerator(10);
        const div = document?.createElement("div");
        div.className = "image-uploader-area one__layout__site";
        div.id = `area-${id}`;
        div.innerHTML =
            /* html */
            `<img class="placeholder_image" src=${image} alt="" />
              <p class="mt-2 placeholder_text">
                  Drag and drop an Image, or
                  <label for="file-upload-1" class="theme-color upload-btn">
                      Browse
                  </label>
                  <input type="file" name="" id="file-upload-1" class="d-none uploader-input" />
              </p>
                 <div data-id="${id}" class="cancel-button d-none">&times;</div>
              
              `;
        this.pageArea.appendChild(div);
    }

    appendingText() {
        this.removingDefaultPlaceholder();
        const value = this.writingBox?.value;
        const p = document?.createElement("p");
        p.className = `mb-0 page-text ${this.randomIdGenerator(20)} `;
        p.innerHTML = value;
        this.pageArea.appendChild(p);
        this.writingBox.value = "";
    }

    randomIdGenerator(length) {
        const word = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let id = "";
        for (let i = 0; i < length; i++) {
            const randomN = Math.floor(Math.random() * word.length);
            id += word.charAt(randomN);

            if (id.length % 7 === 0) {
                id += "__";
            }
        }
        return id + "__" + Date.now();
    }

    handleFileUpload(e) {
        const files = e.target.files;
        const imagePreviewArea = e.target.parentNode.parentNode;
        const placeholder_text = imagePreviewArea?.querySelector(".placeholder_text");
        const placeholder_image = imagePreviewArea?.querySelector(".placeholder_image");
        const cancelButton = imagePreviewArea?.querySelector(".cancel-button");

        for (const file of files) {
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                if (file.type.includes("image")) {
                    if (reader.result) {
                        placeholder_image?.classList?.add("d-none");
                        placeholder_text?.classList?.add("d-none");
                        cancelButton?.classList?.remove("d-none");

                        const image = document.createElement("img");
                        image.src = reader.result;
                        image.className = "uploaded_image";
                        imagePreviewArea.classList.add("image-uploaded");
                        imagePreviewArea.appendChild(image);
                    } else if (reader.error) {
                        alert("something Went wrong please try again later");
                    }
                } else {
                    alert("please provide Image file type");
                }
            });

            reader.readAsDataURL(file);
        }
    }
    handleRemoveImage(id) {
        const imageArea = this.pageArea.querySelector(`#area-${id}`);
        const uploadedImage = imageArea.querySelector(".uploaded_image");
        const placeholder_image = imageArea?.querySelector(".placeholder_image");
        const placeholder_text = imageArea?.querySelector(".placeholder_text");
        const cancelButton = imageArea?.querySelector(".cancel-button");
        if (uploadedImage) {
            placeholder_image?.classList?.remove("d-none");
            placeholder_text?.classList?.remove("d-none");
            cancelButton?.classList?.add("d-none");
            imageArea?.classList.remove("image-uploaded");
            uploadedImage.remove();
        }
    }
}
