import Cropper from 'cropperjs'

const html = `
<div class="wrapper">
    <div class="workspace-tools">
        <div class="flex flex-column">
            <h3>Рабочая область</h3>
            <div class="cropper"><img></div>
        </div>
        <div class="flex flex-column">
            <h3>Результат</h3>
            <div class="cropper-result"><img></div>
        </div>
    </div>
    <div class="tools">
        <input class="input-file" type="file">
        <button class="cropper-btn">Кропнуть</button>
    </div>
</div>`

const content = document.body.appendChild(document.createElement("div"))
content.innerHTML = html
const image = document.querySelector('.cropper img')
const result =  document.querySelector('.cropper-result img')
const button =  document.querySelector('.input-file')
const buttonCrop =  document.querySelector('.cropper-btn')
let cropper;
button.addEventListener("change", handleFiles, false);
buttonCrop.addEventListener("click", cropFile, false);
function handleFiles() {
    const fileList = this.files;
    const file = fileList[0]
    image.src = URL.createObjectURL(file)
    image.onload = function (){
        cropper = new Cropper(image, {
            dragMode: "crop",
            viewMode: 1
        });
    }
}
function cropFile(){
    console.log(result)
    result.src = cropper.getCroppedCanvas().toDataURL()
}
