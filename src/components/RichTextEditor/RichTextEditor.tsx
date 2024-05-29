import React, { useState } from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Box, Typography } from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface RichTextEditorProps {
  userData: {
    name: string;
  };
}


const RichTextEditor: React.FC<RichTextEditorProps> = ({ userData }) => {
//  const [editorState, setEditorState] = useState(() => {
//      const contentState = ContentState?.createFromText(userData?.name);
//      console.log(contentState)
//     return EditorState.createWithContent(contentState);
//   });
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const handleSave = () => {
        const contentState = editorState.getCurrentContent();
        const rawContent = convertToRaw(contentState);
        console.log(rawContent);
    };

    const handleEditorChange = (state: EditorState) => {
        setEditorState(state);
        handleSave()
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

