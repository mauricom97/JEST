const filtro = require('./filtro')

const contatos = [{"nome": "Mauricio", "sobrenome": "Nunes"}, {"nome": "Jhenifer", "sobrenome": "Caroline"}]


const encontrado = {"nome": "Mauricio", "sobrenome": "Nunes"}


describe('Filtro', () => {

    test('Pesquisa um nome que existe na base', () => {
        expect(filtro(contatos, "Mauricio")).toEqual(encontrado)
    })

    test('Pesquisar um nome que nao existe na base', () => {
    expect(filtro(contatos, "Marilene")).toBeUndefined()
    });

});