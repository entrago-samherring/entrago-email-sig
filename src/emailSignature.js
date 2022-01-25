import React from 'react';
import email_footer from './images/entrago_email_footer.png';
import entrago_logo from './images/entrago logo.png';

class EmailSignature extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "left" }}>
                <h1 style={{ lineHeight: "0" }}>{this.props.name || "Joe Sample"}</h1>
                <p>{this.props.title || "Chief Person"},<b> Entrago Pty Ltd</b></p>
                <table>
                    <thead>
                        <tr>
                            <td style={{ textAlign: "left" }}>
                                Phone: <a href={"tel:" + this.props.phone || "tel:+0400123456"}>{this.props.phone || "+61 400 123 456"}</a>
                                <br />Web: <a href='https://entrago.com.au'>entrago.com.au </a>
                                <br />Email: <a href={"mailto: " + this.props.email || "mailto: joe.sample@entrago.com.au"}>{this.props.email || "joe.sample@entrago.com.au"}</a>
                                <br />Suite 14, 36 Agnes St. Fortitude Valley 4006
                            </td>
                            <td style={{ textAlign: "left" }}>
                                <img src={entrago_logo} alt="entrago logo" />
                                </td>
                        </tr>
                    </thead>
                </table>
                <img src={email_footer} alt='email footer' />
            </div>
        )
    }
}

export default EmailSignature;