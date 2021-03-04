function request(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
        var result = document.getElementById('result')
        result.innerHTML = 'User Id:' + response.userId + 'Id:' + response.id +'Title:' + response.title + 'Completed:' + response.completed
    }) 
}