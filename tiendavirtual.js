// --- Clase Base: Producto ---
class Producto {
constructor(id, nombre, precio, categoria) {
this.id = id;
this.nombre = nombre;
this.precio = precio;
this.categoria = categoria;
}

getId() { return this.id; }
getNombre() { return this.nombre; }
getPrecio() { return this.precio; }
getCategoria() { return this.categoria; }

calcularImpuesto() {
    return this.precio * 0.10;
}

mostrarInformacion() {
    const impuesto = this.calcularImpuesto();
    const precioConImpuesto = this.precio + impuesto;
    return `
        <h2>${this.nombre}</h2>
        <p>ID: ${this.id}</p>
        <p>Precio: $${this.precio.toFixed(2)}</p>
        <p class="categoria">Categoría: ${this.categoria}</p>
        <p class="impuesto">Impuesto (10%): $${impuesto.toFixed(2)}</p>
        <p>Precio Final: $${precioConImpuesto.toFixed(2)}</p>
    `;
}

}

// --- Electrónicos ---
class Electronico extends Producto {
constructor(id, nombre, precio, marca, modelo) {
super(id, nombre, precio, "Electrónicos");
this.marca = marca;
this.modelo = modelo;
}

calcularImpuesto() {
    return this.precio * 0.15;
}

mostrarInformacion() {
    const impuesto = this.calcularImpuesto();
    const precioConImpuesto = this.precio + impuesto;
    return `
        <h2>${this.nombre}</h2>
        <p>ID: ${this.id}</p>
        <p>Precio: $${this.precio.toFixed(2)}</p>
        <p class="categoria">Categoría: ${this.categoria}</p>
        <p class="impuesto">Impuesto (15%): $${impuesto.toFixed(2)}</p>
        <p>Precio Final: $${precioConImpuesto.toFixed(2)}</p>
        <p>Marca: ${this.marca}</p>
        <p>Modelo: ${this.modelo}</p>
    `;
}


}
// --- Ropa ---
class Ropa extends Producto {
constructor(id, nombre, precio, talla, material) {
super(id, nombre, precio, "Ropa");
this.talla = talla;
this.material = material;
}

calcularImpuesto() {
    return this.precio * 0.08;
}

mostrarInformacion() {
    const impuesto = this.calcularImpuesto();
    const precioConImpuesto = this.precio + impuesto;
    return `
        <h2>${this.nombre}</h2>
        <p>ID: ${this.id}</p>
        <p>Precio: $${this.precio.toFixed(2)}</p>
        <p class="categoria">Categoría: ${this.categoria}</p>
        <p class="impuesto">Impuesto (8%): $${impuesto.toFixed(2)}</p>
        <p>Precio Final: $${precioConImpuesto.toFixed(2)}</p>
        <p>Talla: ${this.talla}</p>
        <p>Material: ${this.material}</p>
    `;
}


}
// --- Alimentos ---
class Alimento extends Producto {
constructor(id, nombre, precio, fechaCaducidad, esOrganico) {
super(id, nombre, precio, "Alimentos");
this.fechaCaducidad = fechaCaducidad;
this.esOrganico = esOrganico;
}

calcularImpuesto() {
    return this.esOrganico ? 0 : this.precio * 0.05;
}

mostrarInformacion() {
    const impuesto = this.calcularImpuesto();
    const precioConImpuesto = this.precio + impuesto;
    return `
        <h2>${this.nombre}</h2>
        <p>ID: ${this.id}</p>
        <p>Precio: $${this.precio.toFixed(2)}</p>
        <p class="categoria">Categoría: ${this.categoria}</p>
        <p class="impuesto">Impuesto (${this.esOrganico ? "0%" : "5%"}): $${impuesto.toFixed(2)}</p>
        <p>Precio Final: $${precioConImpuesto.toFixed(2)}</p>
        <p>Fecha de Caducidad: ${this.fechaCaducidad}</p>
        <p>Orgánico: ${this.esOrganico ? "Sí" : "No"}</p>
    `;
}
}

// --- Mostrar productos ---
const productosTienda = [
new Electronico(101, "Smartphone X", 800, "TechBrand", "X-Pro"),
new Ropa(201, "Camiseta Algodón", 25, "M", "Algodón"),
new Alimento(301, "Manzanas Orgánicas", 3.50, "2025-07-25", true),
new Electronico(102, "Auriculares Bluetooth", 99.99, "AudioPro", "HP-200"),
new Ropa(202, "Jeans Slim Fit", 59.99, "L", "Mezclilla"),
new Alimento(302, "Pan Integral", 4.20, "2025-07-20", false)
];

const productosContainer = document.getElementById('productos-container');

productosTienda.forEach(producto => {
const productCard = document.createElement('div');
productCard.classList.add('producto-card');
productCard.innerHTML = producto.mostrarInformacion();
productosContainer.appendChild(productCard);
});
