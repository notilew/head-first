(function(window) {
    'use strict';

    function Salario() {

        const IRRF = 7.50;
        const INSS = 9.00;

        this.salarioBruto = 0;
        this.salarioLiquido = 0;
        this.numeroDependentes = 0;
        this.outrosDescontos = 0;
        this.totalSalario = 0;
        this.totalDescontos = 0;

        this.retornaIRRF = retornaIRRF;
        this.retornaINSS = retornaINSS;

        function retornaIRRF() {
            return IRRF;
        }

        function retornaINSS() {
            return INSS;
        }

    }

    window.Salario = Salario;
})(window);