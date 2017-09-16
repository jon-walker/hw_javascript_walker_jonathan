var iceCream = [
    'strawberry',
    'chocolate',
    'vanilla'
];

iceCream.push('orange');

var presidents = [
    {
        firstName: 'Donald',
        lastName: 'Trump',
        termLength: 1,
        party: 'GOP',
        yesOfPresidency: 1
    },
    {
        firstName: 'Barack',
        lastName: 'Obama',
        termLength: 2,
        party: 'Democrat',
        yesOfPresidency: 8
    },
    {
        firstName: 'George',
        lastName: 'Bush',
        termLength: 2,
        party: 'GOP',
        yesOfPresidency: 8
    },
    {
        firstName: 'Bill',
        lastName: 'Clinton',
        termLength: 2,
        party: 'Democrat',
        yesOfPresidency: 8
    },
    {
        firstName: 'George',
        lastName: 'Bush',
        termLength: 1,
        party: 'GOP',
        yesOfPresidency: 4
    },
    {
        firstName: 'Ronald',
        lastName: 'Reagan',
        termLength: 2,
        party: 'GOP',
        yesOfPresidency: 8
    },
];

console.log(presidents[2].firstName, presidents[2].lastName);

// REQUIREMENT 6a
function howdy() {
    console.log('Greetings from Jonathan Walker!');
}

howdy();

//REQUIREMENT 6b
var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    }
    if (string.length > 7) {
        console.log('I\'m sorry, but that\'s too many to count.');
    }
    if (string.length === 7) {
        console.log('7, what a perfect choice!');
    }
};

numba(7);
numba('seventy');
numba('university');

// REQUIREMENT 6c
// I tried to do it the way that was listed on the homework instructions, but I
// kept getting errors telling that display was not defined when I went to
// I did this workaround to keep it in the same spirit of nested functions. I
// will leave first attempt as a comment and maybe you can see what I was doing
// wrong.
//
// function inception(display, favMovie) {
//  display(favMovie);
// }
//
// console.log( inception(display, 'The Shootist') + 'is a fantastic movie');

function inception(favMovie) {
    function display() {
        console.log(favMovie + ' is a fantastic movie.');
    }
    display();
}

inception('The Shootist');
