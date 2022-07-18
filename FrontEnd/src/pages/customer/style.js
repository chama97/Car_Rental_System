export const styleSheet = {

    container: {
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100vh',
        width: '100vw',
        //justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: 'blue'
    },

   

    leftSide:{
        backgroundColor: 'rebeccapurple',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '100vh',
        width: '20vw',
        alignItems: 'center',
        justifyContent: 'center'
    },

    center:{
       backgroundColor: 'green',
       display: 'flex',
       flexWrap: 'wrap',
       flexDirection: 'row',
       height: '100vh',
       width: '80vw',
       alignItems: 'center',
       justifyContent: 'center'
    },

    appBar:{
        backgroundColor: 'red',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '9%',
        width: '100%',
        justifyContent: 'center'
    },
 
    table:{
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '91%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
     },

     custable: {
        display: 'flex',
        flexDirection: 'column',
        height: '93%',
        width: '97%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px', 
        boxShadow: '1px 2px 7px #F4AAB9',
        border: '1px solid rgb(226, 226, 226)',
     },

     lblcustomer:{
        marginTop: '20px',
        fontSize: '30px',
        width: '97%',

     },

     hr: {
        width: '100%',
        height: '8px',
        border: '0.5px solid rgb(230, 227, 227)',
        backgroundColor: 'green',
    },

    stack: {
        display: 'flex',
        backgroundColor: 'white',
        width: '97%',
        justifyContent:"flex-end",
        padding: '10px'
        
    }

}
