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

describe('POST /clientes', () => {
    it('criar cliente com sucesso', async () => {
        const rest = (await request(app).post('/clientes')).body()
    })
})