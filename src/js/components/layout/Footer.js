import React from "react";
import Button from 'react-bootstrap/lib/Button';
import Risk from '../../pages/Portfolio/Risk';
export default class Footer extends React.Component {
    render() {
        return (
            <footer class="navbar-text navbar-fixed-bottom">
                <div class="row">



                </div>
                <div>
                    <div class="text-center">
                        <Risk/>
                        <br/>
                        <p>Kujbida Michał React UI</p>
                    </div>
                </div>
            </footer>
        );
    }
}
// <div class="well col-md-4">
//     <Button bSize="large">
//         Login
//     </Button>
// </div>