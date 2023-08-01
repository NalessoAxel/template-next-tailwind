import classnames from 'classnames';

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const Container = ({ children, className }) => {
	return <div className={classnames(styles, className)}>{children}</div>;
};

export default Container;
