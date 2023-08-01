import Col from '@components/GridSystem/Col';
import Container from '@components/GridSystem/Container';
export default function Home() {
	return (
		<Container>
			<Col className='bg-blue-100' colStart={[2]} colEnd={[25, null, 24, null, 26]}>
				<p>Lorem ipsum</p>
			</Col>
		</Container>
	);
}
