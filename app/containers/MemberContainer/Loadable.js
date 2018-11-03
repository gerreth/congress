/**
 * Asynchronously loads the component for MemberContainer
 */
import loadable from 'loadable-components';

export default loadable(() => import('./index'));
