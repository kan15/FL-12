// Your code goes here
let email = prompt('Please enter yout email', '');
let password;
let changePassword;
let oldPassword;
let newPassword;
let newPasswordRepeat;
const emailSymbols = 5;
const newPasswordSymbols = 6;
if (email === '' || email === null ) {
    alert('Canceled');
} else if (email.length < emailSymbols) {
    alert(`I don't know any emails having name length less than ${emailSymbols} symbols`);
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('Please enter yout password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password ==='UserPass' 
            || email === 'admin@gmail.com' && password ==='AdminPass') {
        changePassword = confirm('Do you want to change your password?');
        if (changePassword===false) {
            alert('You have failed the change');
        } else {
            oldPassword = prompt('Write your old password', '');
            if (oldPassword === '' || oldPassword === null) {
                alert('Canceled');
            } else if (oldPassword === password) {
                newPassword = prompt('Enter a new password', '');
                if (newPassword === '' || newPassword === null) {
                    alert('Canceled');
                } else if (newPassword.length < newPasswordSymbols) {
                    alert(`It’s too short password. Sorry.`, '');
                } else {
                    newPasswordRepeat = prompt('Please, enter it again', '');
                    if (newPassword===newPasswordRepeat) {
                        alert('You have successfully changed your password.')
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            } else {
                alert('Canceled');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}