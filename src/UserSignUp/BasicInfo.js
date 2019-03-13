import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Basic Information
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Grid item>
                        <business />
                    </Grid>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="mobile"
                        name="mobile"
                        label="Mobile Phone"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="homephone"
                        name="homephone"
                        label="Home Phone"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Region"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        id="occupation"
                        name="occupation"
                        label="Occupation"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        id="organization"
                        name="organization"
                        label="Organization"
                        fullWidth
                        autoComplete="billing country"
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}

export default AddressForm;