const request = require('supertest')
const app = require('../index')

describe('GET /clientes', ()=>{
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app). get('/clientes').send();
        expect(res.status).toBe(200);
    })
})