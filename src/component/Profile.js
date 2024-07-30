import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/Profile.css';

const Profile = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        profession: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details from JSON server
        axios.get('http://localhost:3001/users/6') // Replace 6 with the actual user ID
            .then(response => {
                setUserDetails(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user details!', error);
            });
    }, []);

    const handleLogout = () => {
        // Logic for logging out the user
        navigate('/');
    };

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        axios.put(`http://localhost:3001/users/6, userDetails`) // Replace 6 with the actual user ID
            .then(() => {
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error('There was an error updating the profile!', error);
            });
    };

    const handleDeleteAccount = () => {
        axios.delete(`http://localhost:3001/users/6`) // Replace 6 with the actual user ID
            .then(() => {
                alert('Account deleted successfully!');
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error deleting the account!', error);
            });
    };

    return (
        <div className="profile-page">
            <div className="sidebar">
                <button onClick={handleLogout}>Log Out</button>
            </div>
            <div className="profile-container">
                <h2>Profile</h2>
                <div className="profile-details">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userDetails.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userDetails.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={userDetails.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={userDetails.age}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        value={userDetails.gender}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="profession"
                        placeholder="Profession"
                        value={userDetails.profession}
                        onChange={handleChange}
                    />
                </div>
                <div className="action-buttons">
                    <button onClick={() => navigate(-1)}>Back</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;