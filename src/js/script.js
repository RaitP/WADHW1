window.onload = function() {



    fetch('res/json') //küsib serverilt infi 
        .then((response) => response.json()) // see mis server saadab tule teha vastavasse formaati meie teeme json
        .then(json => {
            console.log(json);
            console.log("--------------");
            var like = document.createElement('img')
            like.src = "res/images/like.png"
            like.className = "likebutton"
                for (let post of json){
                    console.log(post);
                    const divPostitus = document.createElement('div')
                    const divpostheader = document.createElement('div')
                    const divpost = document.createElement('div')
                    const divlike = document.createElement('div')
                    const p1 = document.createElement('p')
                    const p2 = document.createElement('p')
                    var image = document.createElement('img')
                    var profile = document.createElement('img')
                    divPostitus.className = 'postitus'
                    divpostheader.className = 'postheader'
                    divpost.className = 'post'
                    divlike.className = 'like'
                    p1.className = 'kuup'
                    p2.className = 'tekst'
                    profile.className = 'posterPic'
                    image.src = post.pic
                    image.width = 300
                    profile.src = post.profilepic
                    profile.width = 25
                    profile.height = 25

                    divPostitus.appendChild(divpostheader)
                    divPostitus.appendChild(divpost)
                    divPostitus.appendChild(divlike)
                    divpostheader.appendChild(profile)
                    divpostheader.appendChild(p1)
                    divpost.appendChild(image)
                    divpost.appendChild(p2)
                    divlike.appendChild(like)


                    p1.textContent = post.time
                    p2.textContent = post.description
                    
                    const section = document.querySelector('section')
                    section.appendChild(divPostitus)
                


                    // const h3 = document.createElement('h3')
                    // h3.textContent = post.title

                    // const p = document.createElement('p')
                    // p.textContent = post.body

                    // div.appendChild(h3)
                    // div.appendChild(p)
                    // div.className = 'post'

                    // const body = document.querySelector('body')
                    // body.appendChild(div)
            }    
        })

        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
}