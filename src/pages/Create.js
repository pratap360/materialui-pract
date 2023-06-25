import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
// import ButtonGroup from '@mui/material/ButtonGroup';
// import SendIcon from '@mui/icons-material/Send';




const useStyles = makeStyles({
  field: {
    marginTop: 50,
    marginBottom: 50,
    display: 'block'
  }
})

export default function Create() {

  const classes = useStyles();

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailError, setDetailsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }

    if (detail == '') {
      setDetailsError(true)
    }

    if (title && detail) {
      console.log(title, detail);
    }

  }

  return (
    <Container size='sm'>
      <Typography
        varient="h6"
        color="textSecondary"
        component="h2"
        gutterbutton
        >
        Create a new note
      </Typography>


      <form noValidate autoComplete='off' onSubmit={handleSubmit} >
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant='outlined'
          color='secondary'
          required
          fullWidth
          error={titleError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setDetail(e.target.value)}
          label="Details"
          variant='outlined'
          color='secondary'
          required
          fullWidth
          error={detailError}
          multiline
          rows={4}
        />
        <Button 
          type='submit'
          variant='contained'
          color='secondary'
          // disableElevation
          // startIcon={<SendIcon/>}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>



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
