
const getUserInfo = require('./userData');




jest.mock('./userData', () => {
    
    const originalModule = jest.requireActual('./userData');
    
    return {
        __esModule: true,
        ...originalModule,
        fetchData: jest.fn().mockResolvedValueOnce({
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com'
        })
    }
});


test('process data should handle response properly', async () => {

    const result = await getUserInfo();

    expect(result).toBe('Hey I have processed your Data here it is -- John Doe')

    expect(fetchData).toHaveBeenCalledWith(1);
})

