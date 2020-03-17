document.querySelector("#button-add").addEventListener("click", addItem);
const text = document.querySelector("#text");

function addItem(event){
    event.preventDefault();

    console.log(text.value);
    if(text.value == "") {
        document.querySelector('.error').style.display = "block";
        return;
    }
    const template = `<div class="item">
    <span>
        ${text.value}
    </span>
    <button class="btn btn-danger">
        x
    </button>
    </div>`;
    const range = document.createRange();
    const fragment = range.createContextualFragment(template);
    fragment.querySelector("button").addEventListener("click", suppItem)
    document.querySelector("#item-list").appendChild(fragment);
    text.value = null;
    document.querySelector('.error').style.display = "none";


}

function suppItem(event){
    event.preventDefault();
    console.log("remove");
    console.log(event.target.parentElement.remove())
}
