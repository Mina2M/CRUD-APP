
var pn = document.getElementById("pn");
var pp = document.getElementById("pp");
var pc = document.getElementById("pc");
var pd = document.getElementById("pd");

var allProducts = [''];

allProducts = JSON.parse(localStorage.getItem("allProducts") )
displayAllProducts();

function addProduct(){
    var product = {
        name: pn.value,
        price: Number(pp.value),
        category: pc.value,
        description: pd.value
    }


    allProducts.push(product);

    console.log(allProducts)


    allProducts.toString()  
    localStorage.setItem("allProducts", JSON.stringify(allProducts));

    clearForm();
    displayAllProducts();
 
}

function clearForm(){
    pn.value = "";
    pp.value = "";
    pc.value = "";
    pd.value = "";    
}
function displayAllProducts(){
    
    var cartoona = "";
    console.log(allProducts); 

    for(var i=0; i<allProducts.lenght; i++)
    {   
        //ES6 => template literal
        cartoona += `<tr>
        <td>${i+1}</td>
        <td>`+allProducts[i].name +`</td>
        <td>`+allProducts[i].price+`</td>
        <td>`+allProducts[i].category+`</td>
        <td>${allProducts[i].description}</td>
        <td>
            <button class="btn btn-warning">Update</button>
        </td>
        <td>
            <button onclick="deleteElement(${i})" class="btn btn-danger">Delete</button>
        </td>
        </tr>`    
    }
    document.getElementById("tbody").innerHTML = cartoona;

}

function deleteElement(index){

    allProducts.splice(index, 1);
    displayAllProducts();
}



localStorage.setItem("userEmail", "mahmoud@gmail.com")

var test = localStorage.getItem("userEmail")
console.log(test);  

