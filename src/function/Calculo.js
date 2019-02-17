var qtde = 0;

const Calculo = {

    getListFilter: function (list) {
        return list.filter(item => item.Nota !== 0);
    },

    getCount: function (list) {
        qtde = this.getListFilter(list).length;
        return qtde;
    },

    generateList: function (list) {
        var result = [];
        var listFilter = this.getListFilter(list);
        var novoList = listFilter.map(item => {
            if (item.Nota === 1) {
                return {
                    'Item': 'Quantidade de Ruim',
                    'Quantidade': 1,
                    'Ponto': 30
                }
            }
            if (item.Nota === 2) {
                return {
                    'Item': 'Quantidade de Regular',
                    'Quantidade': 1,
                    'Ponto': 50
                }
            }
            if (item.Nota === 3) {
                return {
                    'Item': 'Quantidade de Bom',
                    'Quantidade': 1,
                    'Ponto': 80
                }
            }
            if (item.Nota === 4) {
                return {
                    'Item': 'Quantidade de Ótimo',
                    'Quantidade': 1,
                    'Ponto': 100
                }
            }
        });

        novoList.reduce(function (res, value) {
            if (!res[value.Item]) {
                res[value.Item] = { 'Item': value.Item, 'Quantidade': value.Quantidade, 'Ponto': value.Ponto };
                result.push(res[value.Item]);
            } else {
                res[value.Item].Quantidade += value.Quantidade;
                res[value.Item].Ponto = res[value.Item].Quantidade * value.Ponto;
            }
            return res;
        }, {});

        return result;
    },

    completeList: function (avaliacoes) {
        if (avaliacoes.filter(function (item) { return item.Item === 'Quantidade de Ótimo'; }).length === 0) {
            obj = { 'Item': 'Quantidade de Ótimo', 'Quantidade': 0, 'Ponto': 0 };
            avaliacoes.push(obj);
        }
        if (avaliacoes.filter(function (item) { return item.Item === 'Quantidade de Bom'; }).length === 0) {
            obj = { 'Item': 'Quantidade de Bom', 'Quantidade': 0, 'Ponto': 0 };
            avaliacoes.push(obj);
        }
        if (avaliacoes.filter(function (item) { return item.Item === 'Quantidade de Regular'; }).length === 0) {
            obj = { 'Item': 'Quantidade de Regular', 'Quantidade': 0, 'Ponto': 0 };
            avaliacoes.push(obj);
        }
        if (avaliacoes.filter(function (item) { return item.Item === 'Quantidade de Ruim'; }).length === 0) {
            obj = { 'Item': 'Quantidade de Ruim', 'Quantidade': 0, 'Ponto': 0 };
            avaliacoes.push(obj);
        }

        avaliacoes = this.countTotalItensList(avaliacoes);                
        return avaliacoes;
    },

    formatNota: function (list) {
        list.forEach(element => {
            if (element.Nota === 0) {
                element.Nota = 'S/N';
            }
            if (element.Nota === 1) {
                element.Nota = 'RUIM';
            }
            if (element.Nota === 2) {
                element.Nota = 'REGULAR';
            }
            if (element.Nota === 3) {
                element.Nota = 'BOM';
            }
            if (element.Nota === 4) {
                element.Nota = 'ÓTIMO';
            }
        });
        return list;
    },

    sumaryList: function (list) {
        var qtdeTotal = 0;
        var pontuacaoTotal = 0;
        list.forEach(item => {
            if(item.Item === 'Quantidade de Itens'){
               qtdeTotal = item.Quantidade;
               pontuacaoTotal = item.Ponto;
            }
        })
        var averageAvaliation = qtdeTotal === 0 ? 0 : pontuacaoTotal / qtdeTotal;
        averageAvaliation = parseFloat(averageAvaliation).toFixed(1);     
        return averageAvaliation;
    },

    countTotalItensList: function(list){
        var qtdeTotal = 0;
        var pontuacaoTotal = 0;
        list.forEach(item => {
            if (item.Quantidade !== 'undefined') {
                qtdeTotal += item.Quantidade;
            }
            if (item.Ponto !== 'undefined') {
                pontuacaoTotal += item.Ponto;
            }
        })
        obj = { 'Item': 'Quantidade de Itens', 'Quantidade': qtdeTotal, 'Ponto': pontuacaoTotal };
        list.push(obj);
        return list;
    }
}

export default Calculo;