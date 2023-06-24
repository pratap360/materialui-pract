import React from 'react'
import Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      background: 'blue'
    },
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
    },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  }
})

export default function Create() {

  const classes = useStyles();

  return (
    <Container>
      <Typography 
          className={classes.title}
          varient="h6"
          color="textSecondary"
          component="h2"
          gutterbutton>
          Create a new note
      </Typography>

      <Button 
      className={classes.btn}
      onClick={()=> console.log('u click me')}
      type='submit'
      variant='contained'
      color='secondary'
      // disableElevation
      // startIcon={<SendIcon/>}
      endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>

      {/* <Button type='submit'>Submit</Button>
     
      <Button 
      type='sumbit'
      variant='outlined'
      color='secondary'>
        Submit
      </Button>

    <br />
      <ButtonGroup color='secondary' variant='contained'>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup> */}
    </Container>
  )
}
