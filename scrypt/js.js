function verificar() {
    var tno = document.getElementById('txtnum')
    var tn1 = document.getElementById('txtnum1')
    var tn2 = document.getElementById('txtnum2')
    var res = document.getElementById('res')

    if (tno.value.length == 0 || tn1.value.length == 0 || tn2.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        var n = Number(tno.value)
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        if (n < n1) {
            //contagem crescente
            for(var c = n; c <= n1; c += n2) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(var c = n; c >= n1; c -= n2) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }

}