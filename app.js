var starbucks = {
    coffe: {
        cappucino: {
            description: 'great coffe'
        },
        latte: {
            description: 'not bad'
        },
        noSugarCappucino: {
            description: 'sweet'
        }
    },
    tea: {
        blackTea: {
            description: 'black color tea'
        },
        greenTea: {
            description: 'green color tea'
        }
    }
}
var order = prompt('choise')
if(starbucks.coffe[order]) {
    console.log('your order is accept')
}else if(starbucks.tea[order]){
    console.log('your order is accept');
}else{
    console.log('error');
}
