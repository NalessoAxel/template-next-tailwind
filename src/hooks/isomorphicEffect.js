// isomophicEffect is used to avoid the warning:
// Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format.
// This will lead to a mismatch between the initial, non-hydrated UI and the intended UI.

import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
