arr  = [
    {dp:"https://images.unsplash.com/photo-1597687154732-9b205f4f5c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1616451351715-9dd56c74945f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cGVyJTIwY2Fyc3xlbnwwfDF8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1550615162-30dcc978d172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXIlMjBjYXJzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1567030669136-477757ede008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cGVyJTIwY2Fyc3xlbnwwfDF8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1616789916189-3a0d215b6122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXIlMjBjYXJzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1555338371-67d1d00c56e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVyJTIwY2Fyc3xlbnwwfDF8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1616451466972-60b201a0c717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VwZXIlMjBjYXJzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1627392449903-9a1f1f6ce14c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cGVyJTIwY2Fyc3xlbnwwfDF8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1616790151040-47661836dd26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXIlMjBjYXJzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1cGVyJTIwY2Fyc3xlbnwwfDF8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1616451189762-da6f909f8154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXIlMjBjYXJzfGVufDB8MXwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1604559258419-124e23c102e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1cGVyJTIwY2Fyc3xlbnwwfDF8MHx8fDA%3D"}
]
let stories = document.getElementById('stories');
arr.forEach((e, idx) => {
    stories.innerHTML += `            <div class="story">
    <img id="${idx}" src="${e.dp}" alt="">
</div>`
});

stories.addEventListener("click", function (dets){
    console.log(dets.target.id);
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none";
        
    }, 3000)
})