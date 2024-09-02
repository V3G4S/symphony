const request = require('supertest')
const app = require('../index')

describe('GET /clientes', ()=>{
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200);
    })
    it('verifica se a lista de clientes está cheia', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.body).toBeDefined();
    })
})

describe('POST /clientes/:id', () => {
    it('Criar cliente com sucesso', async () =>{
        const rest = await request(app).post('/clientes').send(
            {
            id: '2',
            nome: 'Robert Ocarlos',
            email: 'robertao@gmail.com',
            senha: '4002-8922'
            }
        );
        expect(rest.status).toBe(404)
    })
})

describe('UPDATE /clientes/:id', ()=>{
    it('Atualizar nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/').send(
            {
                nome: 'ramon update'
            }
        );
        expect(res.status).toBe(404);
    })
})

describe('DELETE /clientes/:id', ()=>{
    it('Deletar cliente com sucesso', async () => {
        const res = await request(app).delete('/clientes/1').send();
        expect(res.status).toBe(204);
    })
})