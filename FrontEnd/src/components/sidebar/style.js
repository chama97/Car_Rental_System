export const styleSheet = {

  sidebar: {
      flex: '1',
      borderRight: '0.5px solid rgb(230, 227, 227)',
      minHeight: '100vh',
      backgroundColor: 'white',
      width: '20vw',
     // backgroundImage: 'linear-gradient(to right top, #1f2144, #262d59, #2c3a70, #2f4787, #30559f)'
      backgroundImage: 'linear-gradient(to right top, #1f2039, #272c50, #2d3969, #304784, #30559f)'
  },

  top: {
      height: '65px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundImage: 'linear-gradient(to right top, #2c2f67, #2f3875, #304183, #314b91, #30559f)'
  },

  logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
      marginRight: '90px',
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

  icontop: {
    fontSize: '30px',
    color: 'white',
    marginLeft: '60px'
  },

  span: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#f4f4fb',
      marginLeft: '10px',
  },

  bottom:{
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
      margin:'10px',  
  }



}