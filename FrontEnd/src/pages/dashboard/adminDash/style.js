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
        width: '28%',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: '10px',
        boxShadow: '0px 5px 6px #7171c1',
        border: '1px solid rgb(226, 226, 226)',
     },

     widgetss: {
        height: '60%',
        width: '23%',
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
        color : '#323281',
        fontWeight: '500',
        fontSize: '20px',
        backgroundColor: '#f0f0f4',
     },

     widgBody: {
        display: 'flex',
        height: '52%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color : 'green',
        fontWeight: '500',
        fontSize: '40px'
        //backgroundColor: 'red',
     },

     widgBottom: {
        display: 'flex',
        height: '23%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#36367c',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
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