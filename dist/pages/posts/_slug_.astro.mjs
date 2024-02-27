export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/_slug__b4598a0f.mjs').then(n => n.b);

export { page };
