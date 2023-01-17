let items = []
let total = 0
let products=[
    {name: "Asus Gaming VG248QG 24", price: 125.990},
    {name: "Corsair ICUE 4000x", price: 40.215}, 
    {name: "I9 12900K", price: 250.119},
    {name: "Placa de video TUF Gaming geforce RTX 3070TI", price: 270.199},

    {name: "mouse hyperx pulsfire", price: 17.490},
    {name: "teclado logitech g g413", price: 20.205},
    {name: "camara Logitech C922", price: 35.150},
    {name: "auricular hyperx cloud II", price: 34.996}
]


function addItem() 
{
    let product = prompt("ingrese el producto: ");
    let option = prompt("Desea pasar agregar al carrito? ingrese 'si' para confirmar o 'no' para deshacer");
        if (option === "si") {
            let product_obj = products.find(p => p.name === product);
            if (product_obj) {
                items.push(product_obj);
                updateItemsList();
            } else {
                alert("producto no encontrado");
            }
        } else if( option === "no"){
            let index = items.findIndex(p => p.name === product);
            if (index !== -1) {
                items.splice(index, 1);
                updateItemsList();
            } else {
                alert("ha cancelado la compra");
            }
        }else{
            alert("opcion invalida intente nuevamente")
        }
}

function updateItemsList() 
{
  let itemsList = document.getElementById("items");
  itemsList.innerHTML = "";
  total = 0;

        for (let i = 0; i < items.length; i++)
        {
            let product = items[i];
            itemsList.innerHTML += "<li>" + product.name + " - Precio: $" + product.price + "</li>";
            total += product.price;
        }
}

function checkout() 
{
  alert("Precio final: $" + total);
}