const checkMailInputs = () =>{
    const mailInputs = document.querySelectorAll("[type = 'email']");

    mailInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkMailInputs;