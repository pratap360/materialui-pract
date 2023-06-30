import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography, makeStyles } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar:{
        background:(note) => {
            if (note.category ===  'work'){
                return yellow[700]
            }
            if (note.category ===  'money'){
                return green[500]
            }
            if (note.category ===  'todos'){
                return pink[500]
            }
            return blue[500]
        }
    }
})



export default function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note)

    return ( 
        <div>
            <Card   elevation={1} >
                <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                      {note.category[0].toUpperCase()}
                    </Avatar>}
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlinedIcon />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                    {note.details}
                    </Typography>
                </CardContent>
            </Card>
            {/* {note.title} */}
            {/* {note.category} */}
        </div>
     );
}

