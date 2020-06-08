React JS app component data syncing example.

## Installation
```
yarn

yarn start
```

### CORS

- Disable CORS from safari develop menu to test in localhost


![Alt text](/screenshot.png?raw=true "Optional Title")


## Description

2 functional components.

In component 1(C1) an uneditable text field that displays “www.placeholder.com”.

In C1 there are 2 buttons. One button will send text to Component 2(C2) text field. The other button will access an interface that will perform a GET request from whatever address is in the C1 text.



In C2 there is an editable text field where the user can modify the address if it has been received.  In C2 there is an element that will display data retrieved from the GET request in C1. In C2 there will be a button to send the data over to C1.
