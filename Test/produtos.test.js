const request = require('supertest')
const app = require('../index')

describe('GET /produtos', ()=>{
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200);
    })
    it('verifica se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.body).toBeDefined();
    })
    it('verifica um único produto', async () => {
        const res = await request(app).get('/produtos/e8801215-9b11-4a43-b979-344afccbfcc9').send();
        expect(res.body).toBeDefined();
    })
})

describe('POST /produtos/:id', () => {
    it('criar produto com sucesso', async () =>{
        const rest = await request(app).post('/produtos').send(
            {
                id: 24521,
                nome: "Câmera 4k Ultra HD",
                descricao: "Podre",
                preco: 39.90,
                imagem: "camera preta véia podi"
            }
        );
        expect(rest.status).toBe(204)
    })
})

describe('UPDATE /produtos/:id', ()=>{
    it('Atualizar nome do produto com sucesso', async () => {
        const res = await request(app).post('/produtos/').send(
            {
                nome: 'Camisa azul com desenho de hashtag'
            }
        );
        expect(res.status).toBe(406);
    })
})

describe('DELETE /produtos/:id', ()=>{
    it('Deletar produto com sucesso', async () => {
        const res = await request(app).delete('/produtos/1').send();
        expect(res.status).toBe(204);
    })
})