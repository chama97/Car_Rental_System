export const styleSheet = {
    container: {
        display: 'flex', 
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center'
    },
    
    board: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '145vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: "white",
    },

    containerBottom: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '200px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: "#181b34",
        color: 'white'
    },

    profile: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '10%',
        width: '98%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px', 
        boxShadow: '1px 2px 6px #F4AAB9',
        border: '1px solid rgb(226, 226, 226)',
       // marginRight: '15%',
    },

    mybook: {
        display: 'flex',
        flexDirection: 'row',
        height: '42%',
        width: '98%',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderRadius: '10px', 
        // boxShadow: '1px 2px 6px #F4AAB9',
        // border: '1px solid rgb(226, 226, 226)',
       // marginRight: '15%',
    },

    lblprofile:{
        marginTop: '15px',
        marginLeft: '7px',
        fontSize: '28px',
        width: '97%',

     },

     divs:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '90%',
        width: '30%',
        borderRadius: '5px', 
        boxShadow: '1px 2px 6px gray',
        border: '1px solid rgb(226, 226, 226)',
        '&:hover': {
            backgroundColor: '#e1e1ea',
         },
     },

     btns: {
        color:'white',
        textDecoration: "none",
        '&:hover': {
            backgroundColor: '#e6f3ff',
        },

    },  

}