const supertest =require("supertest")
const server =require("../server")
const db =require("../data/config")

describe("Country integration test", ()=>{

    it("It creat a new Country", async ()=>{
        const res = await supertest(server).post("/country")
        .send({name:"Kenya"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
         expect(res.body.name).toBe("Kenya")
         expect(res.body.id).toBeDefined()

    })

    it("It delete id ", async ()=>{
        const res = await supertest(server).delete("/country/3")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
      


    })

})