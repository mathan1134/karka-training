const apiURL='https://jsonplaceholder.typicode.com/todos'
const fetchData=fetch(apiURL)
fetchData.then(response=>{
    // a=[]
    if(!response.ok){
        throw new error (`Http Error!Status"${response.status}`)

    }
    return response.json()
})
.then(data=>{
    // console.log('data:' ,data)

    let table = `
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
            ${data.map((d) => 
                // console.log(d.title)
                ` <tr>                    
                            <td>${d.userId}</td>
                            <td>${d.id}</td>
                            <td>${d.title}</td>
                            <td>${d.completed}</td></tr>  `).join("")} 
                </tbody>
            </table>`
        document.getElementById("tab").innerHTML=table
        // $('body').append(table);

    // .then(data=>{
    //     a.push('data:' ,data)
    //     console.log(a)
})
.catch(err=>{
    console.error("Error:",err.message)
})




      




