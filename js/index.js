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

// contador de carrito
const numCarrito = document.getElementById("numCarrito");

const { image, nombre, precio } = producto;

// Calculo el descuento con el precio del producto
const descuento = precio - (precio * descuentoProductos);

const productoCuotas = (descuento / 12).toFixed(0);


itemDesc.innerHTML = `    
    <div class="laptopResponsive">
        <h4>${nombre}</h4>
        <h6 class="textPrincipal webResponsive">Precio en 1 pago</h6>
        
        <div class="container">
            <div class="row">
                <div class="col-12 webResponsive">
                    <p>
                        <span class="textPrincipal"> <b class="h4"><span class="h10">$</span> ${descuento} </b></span>
                        <span class="text-muted text-decoration-line-through">$${precio}</span>
                        <span class="text-success fw-semibold">30% OFF</span>
                    </p>
                </div>       
            </div>
            <p class="webResponsive"><i class="bi bi-credit-card"></i><b> 12</b> cuotas x <b>$ ${productoCuotas}  </b><a class="textInfo" href="index.html">Ver cuotas y medios de pago</a></p>
        </div>  
        <button class="btn btnAdd bgPrincipal webResponsive" id="botonAgregar" data-nombre=${JSON.stringify(producto.nombre)} data-precio=${JSON.stringify(producto.precio)} data-image=${JSON.stringify(producto.image)}>Comprar</button>
        <hr></hr>
        <div class="webResponsive"><p><span class="badge bgWarning text-dark">Envío GRATIS</span>
        <span> Ver zonas disponibles</span></p></div>
        <div class="row">
            <div class="col-1"><i class="bi bi-shop-window sizeIcon text-muted"></i></div>
            <div class="col-5 lh-1 mt-3">
                <p class="fw-bold">Retiro GRATIS por Sucursal</p>
                <a class="textInfo">Calcular costo de envío</a>
            </div>
            <div class="col-1"><i class="bi bi-truck sizeIcon text-muted"></i></div>
            <div class="col-5 lh-1 mt-3">
                <p class="fw-bold">Envío a todo el país</p>
                <a class="textInfo">Calcular costo de envío</a>
            </div>
        </div>
    </div>
    `;


const botonAdd = document.getElementById("botonAgregar");     // Obtengo el boton de agregar

botonAdd.onclick = function (e) {
    console.log(e.target.dataset);
    const { nombre, precio, image } = e.target.dataset;

    const productoSeleccionado = {
        nombre: nombre,
        precio: precio,
        image: image
    }
    
    Swal.fire({
        title: 'Producto Agregado !',
        text: 'Puede continuar con su compra.',
        imageUrl: productoSeleccionado.image,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Custom image',
        confirmButtonText: 'Seguir comprando',
        confirmButtonColor: '#B5190D',
      })
    const arrayProductos = JSON.parse(localStorage.getItem("productosCarrito")) || [];
    arrayProductos.push(productoSeleccionado);

    numCarrito.textContent = arrayProductos.length;
    localStorage.setItem("productosCarrito", JSON.stringify(arrayProductos));

}

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
    cards.appendChild(fragmentProducts);
}