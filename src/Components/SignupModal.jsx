import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Button,
    Typography,
    Radio,
    FormLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
} from "@mui/material/";
import emailjs from "emailjs-com";

function SignupModal({ open, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        instagramUsername: "",
        followersCount: "",
    });

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = async () => {
        // Basic form validation
        if (
            formData.name.trim() === "" ||
            formData.email.trim() === "" ||
            formData.phoneNumber.trim() === "" ||
            formData.instagramUsername.trim() === "" ||
            formData.followersCount.trim() === ""
        ) {
            // Handle validation error (e.g., show an alert)
            alert("All fields are required");
            return;
        }

        // Use your Email.js User ID, Service ID, and Template ID
        const emailParams = {
            to_name: "Recipient Name",  // Replace with the actual recipient name
            // Include data from your form:
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            instagramUsername: formData.instagramUsername,
            followersCount: formData.followersCount,
            // Add more fields as needed...
            // additionalField1: formData.additionalField1,
            // additionalField2: formData.additionalField2,
            // ...
        };

        try {
            // Send email using Email.js
            await emailjs.send(
                "service_fgcsovx",  // Replace with your Email.js Service ID
                "template_fmez9rt", // Replace with your Email.js Template ID
                emailParams,
                "X0hJyfzxcheCHqK2f"      // Replace with your Email.js User ID
            );

            // Close the modal after successful submission
            handleClose();
            alert("Submitted Details")
        } catch (error) {
            console.error("Error sending email:", error);
            // Handle error (e.g., show an alert)
            alert("Error sending email. Please try again later.");
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <Typography variant="h5">
                    Signup as Creator
                </Typography>
            </DialogTitle>
            <DialogContent>
                <form>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Phone number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Instagram User Name"
                        name="instagramUsername"
                        value={formData.instagramUsername}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <FormControl component="fieldset" style={{ marginTop: "20px" }}>
                        <FormLabel component="legend">Instagram Followers Count (Organic)</FormLabel>
                        <RadioGroup
                            aria-label="Instagram Followers Count (Organic)"
                            name="followersCount"
                            value={formData.followersCount}
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="1k-10k"
                                control={<Radio />}
                                label="1k-10K"
                            />
                            <FormControlLabel
                                value="10k-25k"
                                control={<Radio />}
                                label="10k-25k"
                            />
                            <FormControlLabel
                                value="25k-50k"
                                control={<Radio />}
                                label="25k-50k"
                            />
                            <FormControlLabel
                                value="50k-100k"
                                control={<Radio />}
                                label="50k-100k"
                            />
                            <FormControlLabel
                                value="100k+"
                                control={<Radio />}
                                label="100k+"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px", marginRight: "10px" }}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        style={{ marginTop: "20px" }}
                    >
                        Close
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default SignupModal;
