import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ImageUpload = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        try {
            const response = await axios.post('http://localhost:8000/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(`Image uploaded successfully: ${response.data.url}`);
        } catch (error) {
            console.log(error);
            alert('Error uploading image');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('image')} type="file" />
            <button type="submit">Upload Image</button>
        </form>
    );
};

export default ImageUpload;
