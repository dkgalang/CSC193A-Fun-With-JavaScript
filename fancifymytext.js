const btn = document.querySelector('#button1');
btn.addEventListener('click', () => {
    alert('Hello World');
});

document.getElementById("text").style.fontSize = "24pt";

document.getElementById('button2').onchange = () => {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
    alert('Font Changed')
}

document.getElementById("button3").onchange = () => {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    alert('Font Changed')
}

const mooButton = document.querySelector('#moobtn');
mooButton.addEventListener('click', () => {
    let sentence = document.getElementById ("text").value;
    let splitSentence = sentence.split(".");
    sentence = splitSentence.join (' moo.');
    document.getElementById('text').value = sentence;
});