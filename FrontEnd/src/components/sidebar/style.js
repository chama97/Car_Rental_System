export const styleSheet = {

  top: {
      height: '60px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #fff'
    //   backgroundImage: 'linear-gradient(to right top, #2c2f67, #2f3875, #304183, #314b91, #30559f)'
  },

  hr: {
      height: '1',
      border: '0.5px solid rgb(230, 227, 227)',
  },

  center: {
      paddingLeft: '10px',
  },

  ul: {
      listStyle: 'none',
      margin: '0',
      padding: '0',
      
  },

  title: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#999',
      marginTop: '15px',
      marginBottom: '5px',
  },

  li: {
      height:'30px',
      display: 'flex',
      alignItems: 'center',
      padding: '5px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#6a6ac8',
     },
      
  },

  hover: {
      backgroundColor: '#ece8ff',
  },

  icon: {
      fontSize: '18px',
      color: '#c7c7ea',
  },

  span: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#f4f4fb',
      marginLeft: '20px',
  },

  bottom:{
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
      margin:'10px',  
  }

}