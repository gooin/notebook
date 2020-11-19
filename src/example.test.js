test("test equal", () => {
    expect(2 + 2).toBe(4)
})

test("test not equal", () => {
    expect(2 + 2).not.toBe(5)
})

test('test to be true or false',()=>{
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})

test('test 19 is less than 20', () => {
    expect(19).toBeLessThan(20);
});

test('test object', () => {
    expect({name:"xx"}).toEqual({name:"xx"})
});