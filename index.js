function includesKg(productName) {
    return productName.includes("kg.");
}

function extractPricePerKilo(productDescription) {
    let priceMatch = productDescription.match(/(\d+)€\/kg/); 
    return priceMatch ? parseInt(priceMatch[1]) : null;
}

document.querySelectorAll('.product').forEach(product => {
    product.querySelector('button').addEventListener('click', function() {
        let productName = product.querySelector('.name').innerText;
        if (includesKg(productName)) { 
            let pricePerKilo = extractPricePerKilo(product.querySelector('.description').innerText);
            let weightInput = prompt("Introduce los kilogramos que deseas comprar:");
            if (weightInput && !isNaN(weightInput)) {
                let totalPrice = weightInput * pricePerKilo;
                alert(`Has añadido ${weightInput}kg a tu carrito. Precio total: ${totalPrice}€`);
            } else {
                alert("Por favor, introduce una cantidad válida.");
            }
        }
    });
});




