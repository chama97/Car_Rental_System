export const styleSheet = {

    container: {
        display: 'flex', 
        flexDirection: 'row',
        width: '100vw',
    },

    appBar:{
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
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
        boxShadow: '1px 0.5px 7px rgb(255, 167, 224)',
        border: '1px solid rgb(255, 112, 205)',
     },

     lblcustomer:{
        left: 0,
        right: 0,
        margin: 'auto',
        marginTop: '15px',
        textAlign: 'center', 
        fontSize: '30px',
        width: '90%',
        fontWeight: 'bold',
        color: 'rgb(81, 159, 13)',
        fontFamily: 'Arial, Helvetica, sans-serif'
     },
  
     hr: {
        marginTop: '13px',
        width: '100%',
        height: '12px',
        border: '0.5px solid rgb(230, 227, 227)',
        backgroundColor: 'rgb(153, 29, 110)',
    },

    stack: {
        paddingTop: '30px',
        display: 'flex',
        backgroundColor: 'white',
        width: '90%',
        justifyContent:"flex-end",
        padding: '15px'
        
    }

}