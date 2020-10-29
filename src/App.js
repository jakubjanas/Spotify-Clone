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
			<Container fluid>
				<Row>
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
			</Container>
		</Router>
	);
}

export default App;
