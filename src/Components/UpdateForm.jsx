import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import './Style/Userform.css';
import { storage } from '../../firebase-config';

const UpdateForm = () => {
    const { username } = useParams(); // Assuming your route parameter is named 'userId'
const navigate = useNavigate()
    const [formData, setFormData] = useState({
        profileImg: null,
        imageUrl: '',
        name: '',
        username: '',
        email: '',
        bio: '',
        description: '',
        category: '',
        chatPrices: '',
        callPrices: '',
        videoCallPrices: '',
        languages: '',
        Instagram: '',
        Facebook: '',
        LinkedIn: '',
        Youtube: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    // Function to fetch user data by ID
    const fetchUserData = async (username) => {
        try {
            const docRef = doc(collection(db, 'profile_user'), username);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                setFormData(userData);
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        // Fetch user data when the component mounts or when the userId changes
        fetchUserData(username);
    }, [username]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            profileImg: file,
        });
    };

    const uploadImage = async () => {
        try {
            const uniqueFilename = uuidv4();
            const storageRef = ref(storage, `profile_images/${uniqueFilename}`);
            const uploadTask = uploadBytes(storageRef, formData.profileImg);
            await uploadTask;
            const imageUrl = await getDownloadURL(storageRef);
            return imageUrl;
        } catch (error) {
            console.log('Error uploading image:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { name, email, bio, description, category, chatPrices, callPrices, videoCallPrices, languages, Instagram, Facebook, LinkedIn, Youtube } = formData;

            // Upload the image and get the download URL
            const imageUrl = await uploadImage();

            // Update the profile document in Firestore with the new data
            await updateDoc(doc(collection(db, 'profile_user'), username), {
                name,
                email,
                bio,
                description,
                category,
                chatPrices,
                callPrices,
                videoCallPrices,
                languages,
                Instagram,
                Facebook,
                LinkedIn,
                Youtube,
                image: imageUrl,
            });
            setFormData({
                profileImg: null,
                imageUrl: '',
                name: '',
                username: '',
                email: '',
                bio: '',
                description: '',
                category: '',
                chatPrices: '',
                callPrices: '',
                videoCallPrices: '',
                languages: '',
                Instagram: '',
                Facebook: '',
                LinkedIn: '',
                Youtube: '',
            });
            navigate('/dashboard')
            // Optionally, you can redirect the user to a success page or show a success message.
        } catch (error) {
            console.error('Error updating user profile:', error);
        }
    };
    return (
        <>
            <div className="user-profile-form-container">
                <div className="user-card">
                    <div className="left-side">
                        <label htmlFor="profileImage">
                            <img
                                src={formData.profileImg ? URL.createObjectURL(formData.profileImg) : 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="profile-image"
                            />
                        </label>
                        <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="right-side">
                        {/* Form section */}
                        <form onSubmit={handleSubmit}>
                            <div className="label-input-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="bio">Bio</label>
                                <textarea id="bio" rows="4" value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })}></textarea>
                            </div>
                            <div className="label-input-group">
                                <label htmlFor="category">Category</label>
                                <input id="category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}></input>
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="languages">Languages</label>
                                <input id="languages" value={formData.languages} onChange={(e) => setFormData({ ...formData, languages: e.target.value })}></input>
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" rows="4" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="chatPrice">Chat Price</label>
                                <input type="number" id="chatPrices" value={formData.chatPrices} onChange={(e) => setFormData({ ...formData, chatPrices: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="callPrice">Call Price</label>
                                <input type="number" id="callPrices" value={formData.callPrices} onChange={(e) => setFormData({ ...formData, callPrices: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="videoCallPrices">Video Price</label>
                                <input type="number" id="videoCallPrices" value={formData.videoCallPrices} onChange={(e) => setFormData({ ...formData, videoCallPrices: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="Instagram">Instagram</label>
                                <input type="text" id="Instagram" value={formData.Instagram} onChange={(e) => setFormData({ ...formData, Instagram: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="Facebook">Facebook</label>
                                <input type="text" id="Facebook" value={formData.Facebook} onChange={(e) => setFormData({ ...formData, Facebook: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="LinkedIn">LinkedIn</label>
                                <input type="text" id="LinkedIn" value={formData.LinkedIn} onChange={(e) => setFormData({ ...formData, LinkedIn: e.target.value })} />
                            </div>

                            <div className="label-input-group">
                                <label htmlFor="Youtube">Youtube</label>
                                <input type="text" id="Youtube" value={formData.Youtube} onChange={(e) => setFormData({ ...formData, Youtube: e.target.value })} />
                            </div>

                            <button className='btn u-button' type="submit">Update</button>
                        </form>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateForm;
