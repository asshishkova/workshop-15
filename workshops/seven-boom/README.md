# Setup and installation
```
nvm use <- (Skip this if you are using node 16+)
npm i
npm run start
read the instructions below
```

# Background
This project contains a simple counter component.
By clicking "+" the value will increment, and by clicking "-" the value will decrement.
This is how the counter looks like now:
![my_counter_gif](https://user-images.githubusercontent.com/62943675/173575884-754e7f35-b220-4f5b-9344-0423a7e718f9.gif)


# The goal
Turn this boring counter into an awesome 7 boom game!
7 boom is a simple game - you start counting, and as soon as you get to a number that is either:
a. Contains "7".
b. Can be divided by 7.
You say "BOOM!" instead of the number.
For example: 1,2,3,4,5,6,BOOM,8,9,10,11,12,13,BOOM,15,16,BOOM,18,19....
So this is what your game should look like after you change the code:
![my_7boom](https://user-images.githubusercontent.com/62943675/173575919-7061044d-e912-458e-b816-4367458b47e5.gif)


# What you need to do:
1) Run the tests using the command 'npm run test', all tests should pass
2) Add your changes, see file ```counter-component.js``` (turn the counter into a "7-boom" game)
3) Run the tests again using 'npm run test', some tests should fail now
4) Open the file ```counter-component.test.js```, make sure you understand why those particular tests failed
5) Fix the test
6) Run the command 'npm run test', all tests should pass again
