import Container from './components/Container';
import List from './components/List';
import Title from './components/Title';
function App() {
	return (
		<>
			<Container>
				<Title coolPropName='🚀' />
				<List />
			</Container>
		</>
	);
}

export default App;
