import {
    MDCList
} from '@material/list';
import {
    MDCTextField
} from '@material/textfield';
import {
    MDCRipple
} from '@material/ripple';



const textField = document.querySelectorAll('.mdc-text-field');
for (let i = 0; i < textField.length; i++) {
    new MDCTextField(textField[i]);
}


let listContainer = document.querySelectorAll('.mdc-list');
for (let i = 0; i < listContainer.length; i++) {
    new MDCList(listContainer[i]);
}

new MDCRipple(document.querySelector('.add-button'));

let lists = document.querySelectorAll('.mdc-list-item');
for (let i = 0; i < lists.length; i++) {
    new MDCRipple(lists[i]);
}
