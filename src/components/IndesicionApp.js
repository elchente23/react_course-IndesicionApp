import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length),
              option = this.state.options[randomNum];
        
        alert(option);
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'This options already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };
    handleDeleteOption = (option) => {
        this.setState((prevState) => {
            options: prevState.options.filter((opt) => opt != option)
        });
    };      
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');        
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {

        }
    };
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    };  
    render() {
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal />
            </div>
        );
    };
}
