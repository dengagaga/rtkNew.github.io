const naturalCheckbox = document.getElementById('natural');
const legalCheckbox = document.getElementById('legal');
const nds = document.getElementById('nds');
const nonds = document.getElementById('nonds');

naturalCheckbox.addEventListener('change', function() {
    if (this.checked) {
        legalCheckbox.checked = false; // Снимаем отметку со второго чекбокса
        
    } else {
        legalCheckbox.disabled = false; // Включаем второй чекбокс, если первый не отмечен
    }
});

legalCheckbox.addEventListener('change', function() {
    if (this.checked) {
        naturalCheckbox.checked = false; // Снимаем отметку с первого чекбокса
        
    } else {
        naturalCheckbox.disabled = false; // Включаем первый чекбокс, если второй не отмечен
    }
});
nds.addEventListener('change', function() {
    if (this.checked) {
        nonds.checked = false; // Снимаем отметку со второго чекбокса
        
    } else {
        nonds.disabled = false; // Включаем второй чекбокс, если первый не отмечен
    }
});

nonds.addEventListener('change', function() {
    if (this.checked) {
        nds.checked = false; // Снимаем отметку с первого чекбокса
        
    } else {
        nds.disabled = false; // Включаем первый чекбокс, если второй не отмечен
    }
});