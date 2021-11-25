/* THIS METHOD TO CREATE ROUTE BACKEND TO script tags */
import Router from "koa-router";
import { createScript, getScriptsAll } from "../controllers/scripts_controller";

// 1. create PREXIS
const router = new Router({prefix: '/script_tag'})

// 2. create routes TO ACCESS
router.get('/', async (ctx) => {
  const getAll = await getScriptsAll(ctx.client);
  ctx.body = getAll;
})

router.get('/all', async (ctx) => {
  const getAll = await getScriptsAll(ctx.client);
  ctx.body = getAll;
})

router.post('/', async (ctx) => {
  const { shop, accessToken } = ctx.sessionFromToken;
  try {
    const create = await createScript(shop, accessToken);
    ctx.body = create;
  } catch (e) {
    console.error(e);
  }
})

router.delete('/', async (ctx) => {
  ctx.body = 'Delete script tag'
})

// 3. Exports default
export default router;
