import React from 'react'
import Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import ButtonGroup from '@mui/material/ButtonGroup';

export default function Create() {
  return (
    <Container>
      <Typography 
          varient="h6"
          color="textSecondary"
          component="h2"
          gutterbutton>
          Create a new note
      </Typography>

      <Button 
      onClick={()=> console.log('u click me')}
      type='submit'
      variant='contained'
      color='secondary'
      // disableElevation
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
