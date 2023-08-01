import Col from '@components/GridSystem/Col';
import Container from '@components/GridSystem/Container';
const Navbar = (props) => {
	return (
		<Container>
			<Col colStart={[2]} colEnd={[25, null, 24, null, 26]}>
				<div>Navbar</div>
			</Col>
		</Container>
	);
};

Navbar.propTypes = {};

export default Navbar;
