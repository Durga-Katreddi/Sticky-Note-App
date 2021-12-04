"use strict";
let colors=['#C8A2C8',
'#949398FF','F4DF4EFF','#FC766AFF','#5B84B1FF','#5F4B8BFF','#E69A8DFF','#42EADDFF','#CDB599FF',
'#00A4CCFF','#F95700FF','#00203FFF','#ADEFD1FF','#606060FF','#D6ED17FF','#ED2B33FF','#D85A7FFF',
'#2C5F2D','#97BC62FF','#00539CFF','#EEA47FFF','#0063B2FF','#9CC3D5FF','#D198C5FF','#E0C568FF',
'#101820FF','#FEE715FF','#CBCE91FF','#EA738DFF','#B1624EFF','#5CC8D7FF','#89ABE3FF','#FCF6F5FF',
'#E3CD81FF','#B1B3B3FF','#101820FF','#F2AA4CFF','#A07855FF','#D4B996FF','#195190FF','#A2A2A1FF',
'#603F83FF','#C7D3D4FF','#2BAE66FF','#FAD0C9FF','#6E6E6DFF','#E94B3CFF','#FF7F50','#DCAE96',
'#483C32','#FA8072','#f28500'];
function getColor() {
    //var index = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let index=Math.floor(Math.random()*colors.length);
    return index;
}

document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        addNewNote();
    }
})


const allNotes = [];

function addNewNote() {
    var inp = document.getElementById("txtInputData");
    if (inp.value) {
        let newNote = {
            note: inp.value,
            noteColor: colors[getColor()]
        };
        allNotes.push(newNote);
    }
    else {
        alert("A note can't be empty.");
    }
    inp.value = "";
    inp.focus();

    displayNote(allNotes);
}

const allNotesList = document.querySelector('.show-note');
function displayNote(n1) {
    allNotesList.innerHTML = " ";
    n1.forEach(element => {
        let noteHTML = `
         <div class="note" style="background-color:${element.noteColor};">
             <div class="note-view">
                 ${element.note}
             </div>
             <div>
                 <a class="deleteBtn"><img src="icons/bin.png" class="bin-icon"></a>
             </div>
         </div>
         `;

        allNotesList.insertAdjacentHTML('afterbegin', noteHTML);

        const deleteBtn = document.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', ele => { deleteNote(ele, element); })
    });
}

function deleteNote(ele, element) {
    let item1 = ele.target.parentElement.parentElement.parentElement;
    item1.parentNode.removeChild(item1);
    allNotes.pop(element);

}
     //display the quote of that index
    // var inp = document.getElementById("txtInputData").value;
    // let div=document.getElementById("show_note");
    // let note1=
    // `<div class="card">
    // <p>${inp}</p>
    // </div>`;
    // div.innerHTML=note1;

    // function getColor(){

    //     let index=Math.floor(Math.random()*colors.length);
    //     return index;
    // }


    // function displayNote(){    
    //     var inp = document.getElementById("txtInputData").value;

    //     var colo =colors[getColor()] ;
    //     let ele = `<div style="background-color:${colo};" class = "card"><p>${inp}</p></div>`;

    //     document.getElementById("show-note").innerHTML = ele;
    // }

//    function displayName() {
//       var originalName = document.getElementById("txtInputData").value;
//       document.getElementById("show_name").innerHTML = "Your Name is :" + originalName;
//    }