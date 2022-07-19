const producto = {
    nombre: 'SMART TV SAMSUNG 85 NEO QLED 4K QN85A HDR10',
    precio: 710890,
    image: './img/smartTv85.png'
};

const imgProductos = ['./img/lavarropa.png', './img/estufa.png', './img/calefon.png', './img/plancha.png', './img/celular.png'];

// Descuento del 30%
const descuentoProductos = 0.30;

const itemDesc = document.getElementById("itemDesc");
const cards = document.getElementById("cards");
const fragmentProducts = document.createDocumentFragment();

const { image, nombre, precio } = producto;

// Calculo el descuento con el precio del producto
const descuento = precio - (precio * descuentoProductos);

const productoCuotas = (descuento / 12).toFixed(0);


itemDesc.innerHTML = `    
    <div>
        <h4>${nombre}</h4>
        <h6 class="textPrincipal">Precio en 1 pago</h6>
        
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p>
                        <span class="textPrincipal"> <b class="h4"><span class="h10">$</span> ${descuento} </b></span>
                        <span class="text-muted text-decoration-line-through">$${precio}</span>
                        <span class="text-success fw-semibold">30% OFF</span>
                    </p>
                </div>       
            </div>
            <p><i class="bi bi-credit-card"></i><b> 12</b> cuotas x <b>$ ${productoCuotas}  </b><a class="textInfo" href="index.html">Ver cuotas y medios de pago</a></p>
        </div>  
        <button class="btn btnAdd bgPrincipal">Comprar</button>
        <hr></hr>
    </div>
    `;


for (let index = 0; index < imgProductos.length; index++) {
    const divCard = document.createElement("div");

    const contentCard = `
        <div class="col">
            <div class="card h-100">
                <img src="${imgProductos[index]}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="cardTitle">${nombre}</p>
                    <p class="card-text">
                        <span class="textPrincipal fw-bold fs-5">$ ${(precio / 24).toFixed(0)}</span> 
                        <span class="text-muted text-decoration-line-through">$${(precio / 20).toFixed(0)}</span> 
                        <span class="text-success fw-semibold">30% OFF</span>
                    </p>
                </div>
            </div>
        </div>
    `
    divCard.innerHTML = contentCard;
    fragmentProducts.appendChild(divCard);
    console.log(fragmentProducts);
    cards.appendChild(fragmentProducts);
}