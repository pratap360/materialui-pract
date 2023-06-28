import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
  const history = useHistory();
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }

    if (detail === '') {
      setDetailsError(true)
    }

    if (title && detail) {
      fetch('http://localhost:8000/notes',{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({title,detail,category})
        // redirect to home page after detials fill 
      }).then(() => history.push('/'))
    }

  }

  return (
    <Container size='sm'>
      <Typography
        varient="h6"
        color="textSecondary"
        component="h2"
        gutterbutton='true'
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

        {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
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
