let placeHolder = [];
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let wrapper = document.createElement("DIV");
wrapper.classList.add("wrapper");



let createButtons = () => {

    for (let index = 0; index < 9; index++) {
        let innerDiv = document.createElement("DIV");
        innerDiv.classList.add("buttonContainer");

        let btn = document.createElement("BUTTON");
        if (index == 4) {
            btn.setAttribute("id", "specialButton");
        }
        btn.classList.add("displayButton");

        innerDiv.appendChild(btn);
        wrapper.appendChild(innerDiv);
        document.body.appendChild(wrapper);

    }

}


let createText = () => {
    for (let index = 0; index < newArray.length; index++) {
        let text = document.createTextNode(newArray[index]);
        let selectedButton = wrapper.children[index].children[0];
        selectedButton.appendChild(text);
    }
}


createButtons();
createText();

let allButtons = document.getElementsByClassName("displayButton");
let specialButton = document.getElementById("specialButton");
specialButton.addEventListener("click", () => {
    for (let index = 0; index < allButtons.length; index++) {

        allButtons[index].removeChild(allButtons[index].firstChild);
    }

    switchContent();
    createText();
});


let switchContent = () => {
    for (let index = 0; index < newArray.length; index++) {
        switch (index) {
            case 0:
                placeHolder[1] = newArray[index];
                console.log(placeHolder);
                break;
            case 1:
                placeHolder[2] = newArray[index];
                console.log(placeHolder);
                break;

            case 2:
                placeHolder[5] = newArray[index];
                console.log(placeHolder);
                break;

            case 3:
                placeHolder[0] = newArray[index];
                console.log(placeHolder);
                break;
            case 4:
                placeHolder[4] = newArray[index];
                console.log(placeHolder);
                break;
            case 5:
                placeHolder[8] = newArray[index];
                console.log(placeHolder);
                break;
            case 6:
                placeHolder[3] = newArray[index];
                console.log(placeHolder);
                break;
            case 7:
                placeHolder[6] = newArray[index];
                console.log(placeHolder);
                break;
            case 8:
                placeHolder[7] = newArray[index];
                console.log(placeHolder);
                break;
        }
    }
    newArray = placeHolder;
    placeHolder = [];
}