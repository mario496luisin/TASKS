// Write a function that displays the numbers from 25 to 250 one per line.
// However, for multiples of seven print 'Tip' instead of the number and for
// multiples of five print 'Top'. For numbers which are multiples of both seven and
// five print 'TipTop'.


// With the function for loop we can say that the variable x has to be between the those nuumbers and every time will increment one
// so with skip with can avoid value 0 and skip 1 everytime and after with the if function we create the function to say we want to display the numbers following this multiple of 5 or 7 or both and i have put the <br> to break a line everytime it jumps to a new number.

 for (var x=25; x <= 250; x++) {
    var skip = 0;
    if (x % 7 == 0) {
        document.write('Tip');
        skip = 1;
    }
    if (x % 5 == 0) {
        document.write('Top');
        skip = 1;
    }
    if (x % 5 & 7 == 0 ) {
        document.write('TipTop');
        skip = 1;
    }
    if (!skip) {
        document.write(x);
    }
    document.write('<br>');
}