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

     boxes:{
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '45.5%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
     },

     widgets: {
        height: '60%',
        width: '20%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: '10px', 
        boxShadow: '1px 2px 9px #F4AAB9',
        border: '2px solid rgb(226, 226, 226)',
     },

     widgetss: {
        height: '60%',
        width: '20%',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        borderRadius: '10px', 
     },

     widgTitle:{
        display: 'flex',
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color : 'blue',
        fontWeight: '500',
        fontSize: '20px'
        //backgroundColor: 'green',
     },

     widgBody: {
        display: 'flex',
        height: '45%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color : 'green',
        fontWeight: '500',
        fontSize: '45px'
        //backgroundColor: 'red',
     },

     widgBottom: {
        display: 'flex',
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c2341'
     },

     bottom:{
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '45.5%',
        width: '100%',
        alignItems: 'center',
     }



    
}