import produce from 'immer';
import { create } from 'zustand';

const useStore = create((setStore) => ({
	headerData: undefined,
	setHeaderData: (headerData) => setStore({ headerData }),
	footerData: undefined,
	setFooterData: (footerData) => setStore({ footerData }),
	navIsOpened: false,
	setNavIsOpened: (value) => setStore({ navIsOpened: value }),
	triggerTransition: false,
	mobileScreen: false,
	openContextMenu: false,
	cookieBanner: false,
	lenisScroll: null,
	hidden: false,

	setStore: (fn) => setStore(produce(fn)),
}));

export default useStore;
