import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Box, Typography } from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface RichTextEditorProps {
  userData: {
    name: string;
  };
}


const RichTextEditor: React.FC<RichTextEditorProps> = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
    const savedContentKey = Object.keys(localStorage).find(key => key.startsWith('editorContent-'));
    if (savedContentKey) {
        const savedContent = localStorage.getItem(savedContentKey);
        if (savedContent) {
            const rawContent = JSON.parse(savedContent);
            const editorState = EditorState.createWithContent(convertFromRaw(rawContent));
            setEditorState(editorState);
        }
    }
    }, []);

    const handleSave = () => {
        const contentState = editorState.getCurrentContent();
        const rawContent = convertToRaw(contentState);
        const serializedContent = JSON.stringify(rawContent);
        localStorage.setItem(`editorContent-${Date.now()}`, serializedContent);
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

