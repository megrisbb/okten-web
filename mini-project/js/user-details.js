let url = new URL(location.href)
let id = url.searchParams.get("id")

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {

        let mainUser = document.createElement('div')
        mainUser.classList.add('user-info')

        function recursion(element) {
            for (const elementKey in element) {
                if (typeof element[elementKey] !== "object") {
                    let userInfo = document.createElement('div')
                    userInfo.innerText = `${elementKey}: ${element[elementKey]}`
                    mainUser.appendChild(userInfo)
                    document.body.appendChild(mainUser)
                } else {
                    recursion(element[elementKey])
                }
            }
        }

        recursion(user)
        btn = document.createElement('button')
        btn.innerText = 'post of current user'.toUpperCase()
        buttonDiv = document.createElement('div')
        buttonDiv.classList.add('post-button')
        buttonDiv.appendChild(btn)
        postTitle = document.createElement('div')
        postTitle.classList.add('main-post__title')
        btn.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(data => {
                    for (const datum of data) {
                        let btnA = document.createElement('a')
                        btnA.innerText = 'See more'
                        btnA.href = `post-details.html?id=${id}`

                        let titleDiv = document.createElement('div')
                        titleDiv.append(datum.title, btnA)
                        titleDiv.classList.add('post-title')
                        postTitle.append(titleDiv)
                    }
                });
        }
        document.body.append(buttonDiv, postTitle)


    });


