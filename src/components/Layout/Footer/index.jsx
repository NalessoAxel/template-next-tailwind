import Col from '@components/GridSystem/Col';
import Container from '@components/GridSystem/Container';
const Footer = (props) => {
	return (
		<Container>
			<Col colStart={[2]} colEnd={[25, null, 24, null, 26]}>
				<p>Footer</p>
			</Col>
		</Container>
	);
};

Footer.propTypes = {};

export default Footer;
