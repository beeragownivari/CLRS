import React, { useState } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        
        // Create a preview URL for images
        if (file && file.type.startsWith('image/')) {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setPreview(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        } else {
            setPreview('');
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            // You can implement the upload logic here, e.g., upload to a server
            console.log('File uploaded:', selectedFile.name);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div style={styles.container}>
            <h2>File Upload</h2>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            {selectedFile && (
                <div style={styles.fileInfo}>
                    <p>File Name: {selectedFile.name}</p>
                    <button onClick={handleUpload} style={styles.uploadButton}>
                        Upload
                    </button>
                </div>
            )}
            {preview && (
                <div style={styles.previewContainer}>
                    <h3>Image Preview:</h3>
                    <img src={preview} alt="Preview" style={styles.imagePreview} />
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    fileInfo: {
        marginTop: '20px',
    },
    uploadButton: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    uploadButtonDisabled: {
        backgroundColor: '#cccccc',
        cursor: 'not-allowed',
    },
    previewContainer: {
        marginTop: '20px',
        textAlign: 'center',
    },
    imagePreview: {
        maxWidth: '100%',
        height: 'auto',
        marginTop: '10px',
    },
};

export default FileUpload;
