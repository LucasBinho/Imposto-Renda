// Função que calcula o valor do imposto de renda a ser pago
function calcularImpostoDeRenda() {

    var salarioBruto = document.getElementById("salario").value;
    

    if (salarioBruto <= 1903.98) {
      return 0;
    } else if (salarioBruto <= 2826.65) {
      // Se o valor estiver entre R$ 1.903,99 e R$ 2.826,65, a alíquota é de 7,5%
      return (salarioBruto - 1903.98) * 0.075;
    } else if (salarioBruto <= 3751.05) {
      // Se o valor estiver entre R$ 2.826,66 e R$ 3.751,05, a alíquota é de 15%
      return (salarioBruto - 2826.65) * 0.15 + 142.80;
    } else if (salarioBruto <= 4664.68) {
      // Se o valor estiver entre R$ 3.751,06 e R$ 4.664,68, a alíquota é de 22,5%
      return (salarioBruto - 3751.05) * 0.225 + 354.80;
    } else {
      // Se o valor for maior que R$ 4.664,68, a alíquota é de 27,5%
      return (salarioBruto - 4664.68) * 0.275 + 869.36;
    }
  }
  

  function mostrarResultado() {
    var salarioBruto = parseFloat(document.getElementById("salario").value.replace(",", "."));
    var aliquota = calcularAliquota(salarioBruto);
    var impostoDevido = calcularImpostoDeRenda(salarioBruto);
    var resultadoElement = document.getElementById("resultado");
  
    resultadoElement.style.display = "block";
    resultadoElement.innerHTML = `
    <table>
      <tbody>
          <tr>
              <th>Imposto devido</th>
              <th>Alíquota</th>
          </tr>
          <tr>
              <td><b>R$ ${impostoDevido.toFixed(2)}</b></td>
              <td><b>${aliquota.toFixed(2)}%</b></td>
          </tr>
      </tbody>
    </table>
  `;

  }

  
  function calcularAliquota(salarioBruto) {
    if (salarioBruto <= 1903.98) {
      return 0;
    } else if (salarioBruto <= 2826.65) {
      return 7.5;
    } else if (salarioBruto <= 3751.05) {
      return 15;
    } else if (salarioBruto <= 4664.68) {
      return 22.5;
    } else {
      return 27.5;
    }
  }
  
  
  