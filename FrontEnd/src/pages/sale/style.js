export const styleSheet = {

    board: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to right top, #f3f4ff, #f5f5ff, #f7f6ff, #f8f8ff, #faf9ff)',
    },

    profile: {
        display: 'flex',
        // flexWrap: 'wrap',
        flexDirection: 'column',
        backgroundColor:'white',
        // height: '500px',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '1px 0.5px 7px rgb(255, 167, 224)',
        border: '1px solid rgb(255, 112, 205)',
        marginTop: '20px',
    },

    mybook: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '30px',
    },

     btns: {
        color:'white',
        textDecoration: "none",
        '&:hover': {
            backgroundColor: '#e6f3ff',
        },

    },

}