function Converter() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorEmDolarNumerico = parseFloat(valor);

	var valorEmReal = valorEmDolarNumerico * 5.05;

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
	var valorElemento = document.getElementById("valor-euro");
	var valor = valorElemento.value;
	var valorEmEuroNumerico = parseFloat(valor);

	var valorEmReal = valorEmEuroNumerico * 5.51;

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBit() {
	var valorElemento = document.getElementById("valor-bit");
	var valor = valorElemento.value;
	var valorEmBitNumerico = parseFloat(valor);

	var valorEmReal = valorEmBitNumerico * 197020.05;

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido;
}