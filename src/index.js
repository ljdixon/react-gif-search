import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
=======
import SearchBar from './components/SearchBar';

class App extends React.Component {
	handleTermChange(term) {
		console.log(term);
	}
	
    render() {
        return (
            <div>
							<SearchBar onTermChange={this.handleTermChange} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
>>>>>>> 73d04ddf4c250520c305b29193a07076fff53232
