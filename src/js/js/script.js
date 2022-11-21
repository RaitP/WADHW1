window.onload = function() {
    fetch('https://api.npoint.io/a47c1d77344bac778259') 
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            console.log("--------------");
                for (let post of json){
                    var like = document.createElement('img')
                    like.src = "res/images/like.png"
                    like.className = "likebutton"
                    console.log(post);
                    const divPostitus = document.createElement('div')
                    const divpostheader = document.createElement('div')
                    const divpost = document.createElement('div')
                    const divlike = document.createElement('div')
                    const p1 = document.createElement('p')
                    const p2 = document.createElement('p')
                    var profile = document.createElement('img')
                    divPostitus.className = 'postitus'
                    divpostheader.className = 'postheader'
                    divpost.className = 'post'
                    divlike.className = 'like'
                    p1.className = 'kuup'
                    p2.className = 'tekst'
                    profile.className = 'posterPic'
                    profile.src = post.profilepic
                    profile.width = 25
                    profile.height = 25
                    if(post.pic !== ""){
                        var image = document.createElement('img')
                        image.src = post.pic
                        image.width = 300
                        divpost.appendChild(image)
                    }
            
            
                    divPostitus.appendChild(divpostheader)
                    divPostitus.appendChild(divpost)
                    divPostitus.appendChild(divlike)
                    divpostheader.appendChild(profile)
                    divpostheader.appendChild(p1)
                    divpost.appendChild(p2)
                    divlike.appendChild(like)


                    p1.textContent = post.time
                    p2.textContent = post.description
                    
                    const section = document.querySelector('section')
                    section.appendChild(divPostitus)
                    
            
            }    
        })

        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
}

