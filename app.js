let input = document.querySelector('input');

// input.addEventListener('focus', textController);


let text = 'Ты петух';

function textController(){
    console.log(input.value.length)
    if(!input.value.length == 0){
        // console.log('y')
        let length = input.value.length;
        let slicedText = text.slice(0, length);
        input.value = slicedText;
    }
}