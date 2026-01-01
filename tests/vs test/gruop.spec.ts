import {test,expect} from '@playwright/test'
// test.describe('group 1',()=>{
//     test('Test 1',async()=>{
//         console.log('Passed 1')
//     })
//     test('Test 2',async()=>{
//         console.log('Passed 2')
//     })
// })
// test.describe('group 2',()=>{
//     test('Test 3',async()=>{
//         console.log('Passed 3')
//     })
//     test('Test 4',async()=>{
//         console.log('Passed 4')
//     })
// })

//npx playwright test tests/gruop.spec.ts --grep "group 2" --project=chromium --headed

// test.beforeAll('before all',async()=>{
//     console.log('Before all')
// })
// test.afterAll('before all',async()=>{
//     console.log('After all')
// })
// test.beforeEach('before all',async()=>{
//     console.log('Before Each')
// })
// test.afterEach('before all',async()=>{
//     console.log('After Each')
// })
// test('Test 1',async()=>{
//          console.log('Passed 1')
//      })
// test('Test 2',async()=>{
//         console.log('Passed 2')
//     })
// test('Test 3',async()=>{
//         console.log('Passed 3')
//     })
// test('Test 4',async()=>{
//         console.log('Passed 4')
//     })


//npx playwright test tests/gruop.spec.ts --grep "@sanity" --project=chromium --headed

// test('Test 1',{tag:'@sanity'},async()=>{
//          console.log('Passed 1')
//      })
// test('Test 2',{tag:'@regression'},async()=>{
//         console.log('Passed 2')
//     })
// test('Test 3',{tag:['@sanity','@regression']},async()=>{
//         console.log('Passed 3')
//     })

    test('Test 1',async()=>{
         console.log('Passed 1')
     })
test('Test 2',async()=>{
        console.log('Passed 2')
    })
test('Test 3',async()=>{
        console.log('Passed 3')
    })