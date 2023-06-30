import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography, makeStyles } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const useStyles = makeStyles({
    test:{
        border:(note) => {
            if (note.category ===  'work'){
                return '1px solid red'
            }
        }
    }
})



export default function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note)

    return ( 
        <div>
            <Card   elevation={1} className={classes.test}>
                <CardHeader 
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

