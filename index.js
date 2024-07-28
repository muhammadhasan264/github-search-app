var form= document.getElementById('myform');


form.addEventListener('submit', function(e){
    e.preventDefault()

    var search= document.getElementById('search').value

    var name= search.split('').join('')

    document.getElementById("result").innerHTML= ""

    fetch("https://api.github.com/users/"+ search)
    .then ((result)=> result.json())
    .then ((data) => {
        console.log(data)

        document.getElementById("result").innerHTML= `
        <a target= "_blank" href="https://www.github.com/${name}">
        "<img src= "${data.avatar_url}"/></a>
        `
    })
})