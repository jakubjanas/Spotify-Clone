import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { HomePage, LibraryPage, SearchPage } from './pages';
import { SideBar } from './components/SideBar';
import { Container, Row, Col } from 'reactstrap';
import { Footer } from './components/Footer';

function App() {
	return (
		<Router>
			<Row noGutters>
				<Col xs='2'>
					<SideBar />
				</Col>
				<Col>
					<div className='main-page'>
						<Route exact path='/' component={HomePage}></Route>
						<Route path='/search' component={SearchPage}></Route>
						<Route path='/library' component={LibraryPage}></Route>
					</div>
				</Col>
			</Row>
			<Footer />
		</Router>
	);
}

export default App;
