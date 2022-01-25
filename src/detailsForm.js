import React from 'react';
import ReactDOMServer from 'react-dom/server';
import EmailSignature from './emailSignature';
import { styled } from '@mui/material/styles';
import { TextField, Grid, Button, Paper } from '@mui/material';
import './DetailsForm.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    height: "100%",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: 24
}));

class DetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            email: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Item>
                        <h1>Details</h1>
                        <hr/>
                        <form>
                            <TextField
                                id="name"
                                name="name"
                                helperText="Enter your Name"
                                placeholder="Joe Sample"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <br />
                            <TextField
                                id="title"
                                name="title"
                                helperText="Enter your Role Title"
                                placeholder="Chief Person"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                            <br />
                            <TextField
                                id="email"
                                name="email"
                                helperText="Enter your Email"
                                placeholder="joe.sample@entrago.com.au"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <br />
                            <TextField
                                id="phone"
                                name="phone"
                                helperText="Enter your Phone Number"
                                placeholder="+61 400 123 456"
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
                            <br />
                        </form>
                    </Item>
                </Grid>
                <Grid item xs={9}>
                    <Item>
                    <h1>Signature</h1>
                    <hr/>
                    <br/>
                    <EmailSignature
                        name={this.state.name}
                        title={this.state.title}
                        email={this.state.email}
                        phone={this.state.phone}
                    />
                    <hr/>
                    <br/>
                    <CopyToClipboard text={
                        ReactDOMServer.renderToString(
                            <EmailSignature
                                name={this.state.name}
                                title={this.state.title}
                                email={this.state.email}
                                phone={this.state.phone}
                            />)
                    }
                        onCopy={() => console.log("Copied")}>
                        <Button variant="contained">Copy as HTML</Button>
                    </CopyToClipboard>
                    </Item>
                </Grid>
            </Grid>
        )
    }
};

export default DetailsForm;