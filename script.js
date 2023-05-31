// Crear 3 objetos literales (distintos) 

/* Impustos y Recargos */
const impuestoReacargos = {
    impuestoPais: 30,
    recargoMenos300: 45,
    recargoMas300: 100,
}

/* Dólar Oficial */
const dolarOficial = {
    moneda: "Dólar Oficial",
    cotizacionHoyCompra: 237.50,
    cotizacionHoyVenta: 248.50,
    cotizacionAnteriorCompra: 238.00,
    cotizacionAnteriorVenta: 248.00,

    calculadoraComprar: function(){
        // prompt("Cantidad de dólares a comprar:")
        if(calcularConsultaComprar!=0){
            if(calcularConsultaComprar<=299){
                calcular = this.cotizacionHoyVenta * calcularConsultaComprar
                calcularImpuestos = calcular / 100
                calcularImpuestos = calcularImpuestos * (100 + impuestoReacargos.impuestoPais + impuestoReacargos.recargoMenos300)
                alert(calcularConsultaComprar + " dólares al precio oficial de "  + this.cotizacionHoyVenta + " le costaran: $" + calcular + " a los que debe agregar el Impuesto PAIS del 30% y el recargo del 45%. \nEl precio final es de $" + calcularImpuestos + " pesos argentinos")
            }else{
                calcular = this.cotizacionHoyVenta * calcularConsultaComprar
                calcularImpuestos = calcular / 100
                calcularImpuestos = calcularImpuestos * (100 + impuestoReacargos.impuestoPais + impuestoReacargos.recargoMas300)
                alert(calcularConsultaComprar + " dólares al precio oficial de "  + this.cotizacionHoyVenta + " le costaran: $" + calcular + " a los que debe agregar el Impuesto PAIS del 30% y el recargo del 45% + el 25% al ser un cosumo mayor a 300 dólares. \nEl precio final es de $" + calcularImpuestos + " pesos argentinos")
            }          
        }else{
            alert("No ha ingreado una cantidad válida")
        }
    },

    calculadoraVender: function(){
        // prompt("Cantidad de dólares a comprar:")
        if(calcularConsutaVender!=0){
            calcular = calcularConsutaVender * this.cotizacionHoyCompra
            alert("La venta de " + calcularConsutaVender + " dólares son: $" + calcular)
        }else{
            alert("No ha ingreado una cantidad válida")
        }
    },

}

/* Dólar blue */
const dolarBlue = {
    moneda: "Dólar Blue",
    cotizacionHoyCompra: 488.00,
    cotizacionHoyVenta: 493.00,
    cotizacionAnteriorCompra: 487.00,
    cotizacionAnteriorVenta: 493.00,

    calculadoraComprar: function(){
        // prompt("Cantidad de dólares a comprar:")
        if(calcularConsultaComprar!=0){
            calcular = calcularConsultaComprar * this.cotizacionHoyVenta
            alert(calcularConsultaComprar + " dólares al precio del blue le costraran: $" + calcular)
        }else{
            alert("No ha ingreado una cantidad válida")
        }
    },

    calculadoraVender: function(){
        // prompt("Cantidad de dólares a comprar:")
        if(calcularConsutaVender!=0){
            calcular = this.cotizacionHoyCompra * calcularConsutaVender
            alert("La venta de " + calcularConsutaVender + " dólares blue son: $" + calcular)
        }else{
            alert("No ha ingreado una cantidad válida")
        }
    },
}

/* Dólar mayorista */ 
const dolarMayorista = {
    moneda: "Dólar Mayorista",
    cotizacionHoyCompra: 238.45,
    cotizacionHoyVenta: 238.85,
    cotizacionAnteriorCompra: 238.60,
    cotizacionAnteriorVenta: 239.00,

    calculadoraComprar: function(){
        // prompt("Cantidad de dólares a comprar:")
        if(calcularConsultaComprar!=0){
            calcular = calcularConsultaComprar * this.cotizacionHoyVenta
            alert(calcularConsultaComprar + " dólares mayorista le costraran: $" + calcular)
        }else{
            alert("No ha ingreado una cantidad válida")
        }
    },

    calculadoraVender: function(){
        if(calcularConsutaVender!=0){
            calcular = calcularConsutaVender * this.cotizacionHoyCompra
            alert("El precio de la venta de " + calcularConsutaVender + " dólares en el mercado mayorista es de: $" + calcular)
        }else{
            alert("No ha ingreado una cantidad válida")
        }
    },
}

const brechaCambiaria = {
    brechaOB: "Dólar Oficial - Blue",
    brechaMB: "Dólar Mayorista - Blue",
    brechaOficialBlue: parseInt(dolarBlue.cotizacionHoyVenta * 100 / dolarOficial.cotizacionHoyVenta - 100),
    brechaMayoristaBlue: parseInt(dolarBlue.cotizacionHoyVenta * 100 / dolarMayorista.cotizacionHoyVenta - 100),
}

var menu = prompt("Qué desea calcular: \n1 - Dólar Oficial \n2 - Dólar Blue \n3 - Dólar Mayorista \n4 - Brecha Cambiaria")
        switch(menu){
            case "1":
                var subMenu = prompt("Dólar Oficial, calcular: \n1 - Compa \n2 - Venta")
                switch(subMenu){
                    case "1":
                        var calcularConsultaComprar = Number(prompt("El dólar Oficial en el Banco Nación cotiza hoy a $" + dolarOficial.cotizacionHoyVenta + ". \nIngrese la cantidad de dólares a comprar:"))
                        dolarOficial.calculadoraComprar(calcularConsultaComprar)
                    break
                    case "2":
                        var calcularConsutaVender = Number(prompt("El dólar Oficial en el Banco Nación cotiza hoy a $" + dolarOficial.cotizacionHoyCompra + ". \nIngrese la cantidad de dólares a vender:"))
                        dolarOficial.calculadoraVender(calcularConsutaVender)
                    break
                    default:
                        alert("Por favor, ingrese una cantidad válida.")
                    break
                }
                break
            case "2":
                var subMenu = prompt("Dólar Blue, calcular: \n1 - Compa \n2 - Venta")
                switch(subMenu){
                    case "1":
                        var calcularConsultaComprar = Number(prompt("El dólar en el mercado informal cotiza hoy a $" + dolarBlue.cotizacionHoyVenta + ". \nIngrese cantidad de dólares a comprar:"))
                        dolarBlue.calculadoraComprar(calcularConsultaComprar)
                    break
                    case "2":
                        var calcularConsutaVender = Number(prompt("El dólar en el mercado informal cotiza hoy a $" + dolarBlue.cotizacionHoyCompra + ". \nIngrese cantidad de dólares a vender:"))
                        dolarBlue.calculadoraVender(calcularConsutaVender)
                    break    
                    default:
                        alert("Por favor, ingrese una cantidad válida.")
                    break
                }
                break
            case "3":
                var subMenu = prompt("Dólar Mayorista, calcular: \n1 - Compa \n2 - Venta")
                switch(subMenu){
                    case "1":
                        var calcularConsultaComprar = Number(prompt("El dólar en el mercado mayorista cotiza a $" + dolarMayorista.cotizacionHoyVenta + ". \nIngrese cantidad de dólares a comprar:"))
                        dolarMayorista.calculadoraComprar(calcularConsultaComprar)
                    break
                    case "2":
                        var calcularConsutaVender = Number(prompt("El dólar en el mercado mayorista cotiza a $" + dolarMayorista.cotizacionHoyCompra + ". \nIngrese cantidad de dólares a vender:"))
                        dolarMayorista.calculadoraVender(calcularConsutaVender)
                    break    
                }
                break
                case "4":
                    alert("Brecha cambiaria\n " + brechaCambiaria.brechaOB + ": " + brechaCambiaria.brechaOficialBlue + "% \n " + brechaCambiaria.brechaMB + ": " + brechaCambiaria.brechaMayoristaBlue + "%")
                break
            default:
                alert("Por favor, ingrese una cantidad válida.")
                break
        }