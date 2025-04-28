function goTo(where){
    window.location.href = where;
}
function hideShowSections(stepNumber){
    console.log(stepNumber);
    var section1 = document.getElementById('step1');
    var section2 = document.getElementById('step2');
    var section3 = document.getElementById('step3');
    var section4 = document.getElementById('step4');
    if (stepNumber == '1') {
        section1.style.display = 'flex';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        console.log('called section 1');
    }
    else if(stepNumber == '2'){
        section1.style.display = 'none';
        section2.style.display = 'flex';
        section3.style.display = 'none';
        section4.style.display = 'none';
        console.log('called section 2');
    }
    else if(stepNumber == '3'){
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'flex';
        section4.style.display = 'none';
        console.log('called section 3');
    }
    else if(stepNumber == '4'){
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'flex';
        console.log('called section 3');
    }
}

function addStageRow() {
    var container = document.getElementById('paymentStages');

    // Create a new div for the row
    var newRow = document.createElement('div');
    newRow.className = 'stageRow';

    // Add input fields
    newRow.innerHTML = `
        <input type="text" placeholder="رقم المرحلة">
        <input type="text" placeholder="اسم المرحلة">
        <input type="text" placeholder="النسبة المئوية">
    `;

    // Append the new row to the container
    container.appendChild(newRow);
}