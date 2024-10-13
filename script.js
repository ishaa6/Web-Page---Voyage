//---Toggle Between Labels---//
function openTab(evt, tabName) 
{
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");

    var publicLabel = document.querySelector('.public-label');
    var privateLabel = document.querySelector('.private-label');

    if (tabName === 'public') 
    {
        publicLabel.classList.add('active');
        privateLabel.classList.remove('active');
    } else 
    {
        privateLabel.classList.add('active');
        publicLabel.classList.remove('active');
    }
}


//---Toggle Menu---//
const menuIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');
const menuBox = document.querySelector('.menu');

function toggleMenu() 
{
    if (menuBox.style.display === 'none' || menuBox.style.display === '') 
    {
        menuBox.style.display = 'flex'; 
        menuIcon.style.display = 'none'; 
        closeIcon.style.display = 'block'; 
    } else 
    {
        menuBox.style.display = 'none'; 
        closeIcon.style.display = 'none'; 
        menuIcon.style.display = 'block'; 
    }
}

function handleResize() {
    if (window.innerWidth > 768) 
    {
        menuBox.style.display = 'flex';
        menuIcon.style.display = 'none'; 
        closeIcon.style.display = 'none'; 
    } else 
    {
        menuBox.style.display = 'none'; 
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none'; 
    }
}

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);

window.addEventListener('load', handleResize);



//---Toggle Between Destinations---//
document.addEventListener('DOMContentLoaded', function() 
{
    const dest1 = document.querySelector('.dest1');
    const dest2 = document.querySelector('.dest2');
    const dest3 = document.querySelector('.dest3');
    const dest4 = document.querySelector('.dest4');

    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    function showAllDestinations() {
        dest1.style.display = 'block';
        dest2.style.display = 'block';
        dest3.style.display = 'block';
        dest4.style.display = 'block';
    }

    rightBtn.addEventListener('click', function() {
    });

    leftBtn.addEventListener('click', function() {
    });

    showAllDestinations();
});


//---Toggle Between Destinations for smaller screens---//
document.addEventListener('DOMContentLoaded', function() 
{
    const dest1 = document.querySelector('.dest1');
    const dest2 = document.querySelector('.dest2');
    const dest3 = document.querySelector('.dest3');
    const dest4 = document.querySelector('.dest4');

    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    function showInitialDestinations() {
        dest1.style.display = 'block';
        dest2.style.display = 'block';
        dest3.style.display = 'block';
        dest4.style.display = 'none'; 
        leftBtn.style.display = 'none'; 
        rightBtn.style.display = 'inline-block'; 
    }

    function showDest4() 
    {
        dest1.style.display = 'none';
        dest2.style.display = 'none';
        dest3.style.display = 'none';
        dest4.style.display = 'block'; 
        leftBtn.style.display = 'inline-block'; 
        rightBtn.style.display = 'none';
    }

    function showInitialDest() 
    {
        showInitialDestinations(); 
    }

    function checkScreenWidth() 
    {
        if (window.matchMedia("(max-width: 992px)").matches) 
        {
            showInitialDestinations(); 
        } else 
        {
            dest1.style.display = 'block';
            dest2.style.display = 'block';
            dest3.style.display = 'block';
            dest4.style.display = 'block'; 
            leftBtn.style.display = 'none'; 
            rightBtn.style.display = 'none'; 
        }
    }

    rightBtn.addEventListener('click', showDest4);
    leftBtn.addEventListener('click', function() {
        showInitialDest(); 
    });

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);
});










