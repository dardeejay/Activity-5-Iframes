const iframe = document.getElementById('iframe')

function btnClick(){
    const btn = document.querySelectorAll('button')
    btn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const btnId = e.currentTarget.id
            if(btnId === 'twice-btn'){
                iframe.src = 'https://twice-website-clone.netlify.app/'
            }else if(btnId === 'segara-btn'){
                iframe.src = 'https://segarareact.vercel.app'
            }else if(btnId === 'blog-btn'){
                iframe.src = 'https://djcalura-eportfolio.vercel.app/'
            }
        })
    })
}

btnClick()


