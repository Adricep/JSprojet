


fetch('https://jsonplaceholder.typicode.com/todos')

.then(function(response) { // fonction exécutée si le fetch fonctionne

  return response.json()

})

.then(function(data) { // fonction exécutée en cas de succès de la conversion en json

  console.log(data);

})

.catch(function(err) { // fonction exécutée en cas d'échec

  console.log(err.message);

});
