import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function NoteCard({ note, handleDelete }) {


    return ( 
        <div>
            <Card>
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

