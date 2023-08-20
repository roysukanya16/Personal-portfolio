
       import Email from "https://smtpjs.com/v3/smtp.js";    
        var sendEmail=()=>{
           var getname=document.getElementById('name_input');
            var email=document.getElementById('email_input');
            var linkedin=document.getElementById('linkedIn_input');
            var phone=document.getElementById('num_input');
            var msg=document.getElementById('message_input');
    
            console.log(getname.value);
            console.log(email.value);
            console.log(phone.value);
            console.log(linkedin.value);
            console.log(msg.value);

            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "username",
                Password : "password",
                To : 'them@website.com',
                From : "you@isp.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );

        };

