import React, {Component} from 'react';
import {render} from 'react-dom';


import logo from '../logo.svg';
import './css/ContactApp.css';
import '../App.css';
import '../js/components/Header.js';
import registerServiceWorker from '../registerServiceWorker';


class ContactCategoryRow extends Component {
    render() {
        return <tr><th colSpan="2">{this.props.category}</th></tr>;
    }
}

class ContactRow extends Component {
    render() {
        //const contacts = this.props.contacts;
        var name = this.props.contacts.name;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.contacts.email}</td>
            </tr>
        );
    }
}

class ContactTable extends Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.contacts.forEach((contact) =>{
            if (contact.name.indexOf(this.props.filterText) === -1){
                return;
            }
            if (contact.category !== lastCategory) {
                rows.push(<ContactCategoryRow category={contact.category}
                                              key={contact.category} />);
            }
            rows.push(<ContactRow contacts={contact}
                                  key={contact.name} />);
            lastCategory = contact.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th className="header">Name</th>
                    <th className="header">Email</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value
        );
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Search" value={this.props.filterText}
                       ref={(input) => this.filterTextInput = input}
                       onChange={this.handleChange} />
            </form>
        );
    }
}
class FilterableContactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            name: "React"
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    render() {
        /*setTimeout(()=>{
            this.setState({name: this.state.name == "React" ? "SomeApp" : "React"})
        },1000);*/
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to {this.state.name}</h2>
                </div>

                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
                '\n'
                <ContactTable contacts={this.props.contacts} filterText={this.state.filterText} />
            </div>
        );
    }
}
let CONTACTS = [
    {category: "family", name: "Cassio Zen", email: "cassiozen@gmail.com"},
    {category: "family",name: "Dan Abramov", email: "gaearon@somewhere.com"},
    {category: "Others",name: "Paul O’Shannessy", email: "zpao@somewhere.com"},
    {category: "Others",name: "Ryan Florence", email: "rpflorence@somewhere.com"},
    {category: "Others",name: "Sebastian Markbage", email: "sebmarkbage@here.com"},
    {category: "Others",name: "Pete Hunt", email: "floydophone@somewhere.com"},
];

render(<FilterableContactTable contacts={CONTACTS}/>, document.getElementById('root'));
registerServiceWorker();