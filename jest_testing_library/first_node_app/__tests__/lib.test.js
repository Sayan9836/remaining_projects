const {generateResult, validateInput, checkAndGenerate} = require('../js/lib');

const puppeteer = require('puppeteer');

test('testing generate result ', () => {
   expect(generateResult('1','This is first test')).toBe("User ID: 1 created an article titled This is first test")
})

test('empty userId must be handled',() => {
    expect(generateResult('','this is title')).toBe('userId is missing')
})

test('empty title must be handled', () => {
  expect(generateResult('1','')).toBe('title is missing');
})

test('both empty userId and title must be handled',() => {
    expect(generateResult('','')).toBe('Both userId and title is missing');
})


//////////////////////////////////////////////////////////////////////////////

test('testing validateInput function',() => {
    expect(validateInput(1,true,true)).toBeTruthy();
})

test('should handle empty input in validateInput', () => {
  expect(validateInput('',true,true)).toBeFalsy();
})

test('should handel NaN',() => {
    expect(validateInput('sayan',true,true)).toBeFalsy();
})


// Integration testing for check and generate function

test('testing check and generate function', () => {
    expect(checkAndGenerate(1, "Title 1" , "This is a test")).toBe("User ID: 1 created an article titled Title1")
})


//e2e testing for addPost function

// test('checking e2e for addPost', async(done) => {

//     const browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 80,
//         args:["--window-size=1920,1080"],
//     });

//     const page = await browser.newPage();

//     await page.goto('http://127.0.0.1:5500/');

//     await page.click('#userid');
//     await page.type('#userid','1');

//     await page.click('#title');
//     await page.type('#title','Article 1');

//     await page.click('#article');
//     await page.type('#article','Article 1 description');

//     await page.click('#addNewPostBtn')

//    await browser.close()

//    done();
// },20000)



const data = [
    'shirts',
    'pants',
    'tie',
    'blazer',
    'shirts',
    'pants',
    'tie',
]

test('shirt should present 2 times',() => {
    expect(new Set(data)).toContain('shirts');
    expect(data.filter(item => item === 'shirts')).toHaveLength(2);
})
