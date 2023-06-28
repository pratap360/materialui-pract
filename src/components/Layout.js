import React from 'react'
import { makeStyles } from '@mui/styles';
import { Drawer, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const drawerWidth = 240
const useStyles = makeStyles((theme) =>{
  return{
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer:{
      width:drawerWidth
    },
    drawerPaper:{
      width:drawerWidth
    },
    root:{
      display:'flex'
    },
    active:{
      background:'#f4f4f4'
    },
    title:{
        padding:theme.spacing(2)
    }
  }
})


export default function Layout({ children }) {
  const classes = useStyles()
  const histroy = useHistory()
  const location = useLocation()

  const menuItems =[
  {
    text:'my notes',
    icon:<SubjectOutlined color='secondary'/>,
    path:'/'
  },
  {
    text:'Create notes',
    icon:<AddCircleOutlineOutlined color='secondary'/>,
    path:'/create'
  }
]

  return (
    <div className={classes.root}>
      {/* app bar */}
      
      
      {/* side drawer */}
      <Drawer
      className={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography
          varient = 'h3'>
            Parui Notes
          </Typography>
        </div>

      {/* <List>
        <ListItem>
          <ListItemText primary="Link1"/>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary="Link2"/>
        </ListItem>
      </List> */}
      {/* list links  */}
      <List>
        {menuItems.map(item => (
          <ListItem 
          button 
          onClick={() => histroy.push(item.path)}
          key={item.text}
          className={location.pathname == item.path ? classes.active : null}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        { children }
      </div>
    </div>
  )
}