import useIsomorphicLayoutEffect from '@hooks/isomorphicEffect';
import Lenis from '@studio-freight/lenis';
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
const pageContext = createContext({
	Lenis: null,
});
/**
 * Creates a PageProvider component that wraps the provided children.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The children nodes to be wrapped.
 * @return {ReactNode} The PageProvider component.
 */

export const PageProvider = ({ children }) => {
	const [lenis, setLenis] = useState();
	const reqIdRef = useRef(null);

	useIsomorphicLayoutEffect(() => {
		const lenisScroll = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			smoothTouch: true,
			touchMultiplier: 2,
		});
		setLenis(lenisScroll);
		return () => {
			lenisScroll.destroy();
			setLenis(null);
		};
	}, []);

	/**
	 * Animate the function based on the given time.
	 *
	 * @param {number} time - The time value.
	 * @return {undefined} This function does not return anything.
	 */

	useEffect(() => {
		const animate = (time) => {
			lenis?.raf(time);
			reqIdRef.current = requestAnimationFrame(animate);
		};
		reqIdRef.current = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(reqIdRef.current);
		};
	}, [lenis]);

	const memoedValue = useMemo(
		() => ({
			lenis,
		}),
		[],
	);

	return <pageContext.Provider value={memoedValue}>{children}</pageContext.Provider>;
};
/**
 * Returns the page context using the useContext hook.
 *
 * @return {type} The page context.
 */
export const usePageContext = () => {
	return useContext(pageContext);
};
