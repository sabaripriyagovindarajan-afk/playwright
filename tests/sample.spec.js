const{test,expect}=require('@playwright/test')

test("My first test",async function({page}){
expect(12).toBe(12)
})

test("My second Test",async function({page}){
expect(100).toBe(102)

})

test("My third test",async function({page}){
expect(2.0).toBe(2)

})

test.only("My Fourth test",async function({page}){
    expect("sabaripriya").toContain("priya")
})