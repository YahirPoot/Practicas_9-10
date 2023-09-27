class MatrizCuadrada {
    constructor(tamaño) {
        this.tamaño = tamaño;
    }

    llenarMatrizCuadrada() {
        const matriz = [];
        for(let i = 0; i < this.tamaño; i++) {
            matriz[i] = [];
            for(let x = 0; x < this.tamaño; x++) {
                if(i === x) {
                    matriz[i][x] = 1;
                } else {
                    matriz[i][x] = 0;
                }
            }
        }
        return matriz;
    }

    mostrarMatriz(matriz) {
        return matriz.map(row => row.join(' ')).join('\n');
    }
}

document.getElementById('generarMatriz').addEventListener('click', function() {
    const tamaño = parseInt(document.getElementById('tamanoMatriz').value);
    const matrizObj = new MatrizCuadrada(tamaño);
    const matrizGenerada = matrizObj.llenarMatrizCuadrada();
    document.getElementById('matrizResultado').textContent = matrizObj.mostrarMatriz(matrizGenerada);    
});
