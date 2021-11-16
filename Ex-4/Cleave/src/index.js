import Cleave from 'cleave.js';

window.onload = function() {
    function createInput() {
        new Cleave('.input-name', {
            prefix: 'STUDENT-',
            uppercase: true
        });

        new Cleave('.input-birth', {
            date: true,
            delimiter: '-',
            datePattern: ['d', 'm', 'Y']
        })

        new Cleave('.input-rrn', {
            delimiters: ['.', '.', '-', '.'],
            blocks: [2, 2, 2, 3, 2]
        })

        new Cleave('.input-age', {
            numeral: true,
            numeralPositiveOnly: true
        })

        new Cleave('.input-phonenumber', {
            phone: true,
            phoneRegionCode: 'BE'
        });  


    }
    
    
    createInput();
}