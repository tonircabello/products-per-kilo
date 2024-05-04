
class kilogramsCheck {
    // ONLY WORKING IF PRODUCT HAVE Kg. at NAME AND PRICED FOR 1KG
    constructor() {
        this.cart =document.getElementsByClassName("cart-body mx-5 overflow-y-scroll max-h-full flex-1 scrolling-touch flex flex-col items-center content-center justify-center")
        this.product = document.getElementsByClassName("ml-3")
        this.productName = String(document.getElementsByClassName("font-body text-sm text-secondary"))
        this.finalPrice= 0
        this.originalPrice = parseInt(document.getElementsByClassName("text-secondary text-base font-body"))
        this.modifiedProducts=[]
    }

    includesKg(productName) {
       
       if(productName.includes("Kg."))
       this.extractPricePerKilo()
       
    }

    extractPricePerKilo() {
     finalPrice = this.originalPrice * weightInput
     this.setupEventListeners()
    }

    setupEventListeners() {
        document.querySelectorAll('.product').forEach(product => {
            product.querySelectorAll('.bg-accent.rounded-full.p-1').forEach(button => {
                addEventListener('click', () => {
                this.includesKg()
                if (this.includesKg) {
                    let weightInput = prompt("Introduce los kilogramos que deseas comprar:");
                    if (weightInput && !isNaN(weightInput)) {
                        this.modifiedProducts.push(`${this.productName} + ${this.finalPrice}`);
                        this.addNewProduct()
                    } else {
                        alert("Por favor, introduce una cantidad válida.");
                    }
                }
                })
            });
        });
    }
    addNewProduct(modifiedProducts) {
        this.cart.push(modifiedProducts);
    }
}
new kilogramsCheck()


