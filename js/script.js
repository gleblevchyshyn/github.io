//scroll
const animationItems = document.querySelectorAll('.animation-items');

if(animationItems.length > 0)
{
    window.addEventListener('scroll',animationOnScroll);
    function animationOnScroll(params)
    {
        for(let i=0;i<animationItems.length;i++)
        {
            const animationItem = animationItems[i];
            const animationItemHeight = animationItem.offsetHeight;
            const animationItemOffset = offset(animationItem).top;
            const animationStart = 4;

            let animationItemPoint = window.innerHeight - animationItemHeight/animationStart;
            if(animationItemHeight > window.innerHeight )
            {
                animationItemPoint = window.innerHeight - window.innerHeight/ animationStart;
            }
            if((pageYOffset > animationItemOffset - animationItemPoint) && pageYOffset<(animationItemOffset + animationItemHeight)){
                animationItem.classList.add('active');
            }
            else{animationItem.classList.remove('active');}
        }
    }
    function offset(el)
    {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animationOnScroll();
}

