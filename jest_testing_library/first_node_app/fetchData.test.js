const fetchData = require('./fetchData');


test('should be web', async () => {
   const data = await fetchData('web');
   expect(data).toBe('web');
})

// test('should handle empty input', async () => {
//    const data = await fetchData('');
//    expect(data).toBe('');
// })

