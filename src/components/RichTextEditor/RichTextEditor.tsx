import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor: React.FC = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleEditorChange = (state: EditorState) => {
        setEditorState(state);
    };

    const handleSave = () => {
        const contentState = editorState.getCurrentContent();
        const rawContent = convertToRaw(contentState);
        // Save the rawContent to your desired storage (e.g., local storage, database)
        console.log(rawContent);
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Rich Text Editor
            </Typography>
            <Box sx={{ border: '1px solid #ddd', padding: 2, mb: 2 }}>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={handleEditorChange}
                />
            </Box>
        </Box>
    )
}

export default RichTextEditor

