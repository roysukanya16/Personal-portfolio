
        const toggleBtn=document.querySelector('.burger');
        const toggleBtnIcon=document.querySelector('.burger i');
        const dropDownMenu=document.querySelector('.open-nav');

        toggleBtn.onclick = function(){
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');


            toggleBtnIcon.classList=isOpen? 'fa-solid fa-xmark ': 'fa-solid fa-bars';
        };
      

       
