class Visible extends React.Component {
    constructor(props){
        super(props);

        this.handleShowDetails = this.handleShowDetails.bind(this);

        this.state = {
            visible: false
        }
    }

    handleShowDetails() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleShowDetails}>{this.state.visible ? 'Hide' : 'Show'} details</button>
                {this.state.visible && <p>This are details</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visible />, document.getElementById("app"));