/* THIS METHOD TO CREATE ROUTE BACKEND TO script tags */
import Router from "koa-router";
import { createScript } from "../controllers/scripts_controller";

// 1. create PREXIS
const router = new Router({prefix: '/script_tag'})

// 2. create routes TO ACCESS
router.get('/', async (ctx) => {
  ctx.body = 'Get script tag'
})

router.get('/all', async (ctx) => {
  ctx.body = 'Get all script tag'
})

router.post('/', async (ctx) => {
  const { request, response } = ctx;
  const { shop, accessToken } = ctx.sessionFromToken;
  try {
    const create = await createScript(shop, accessToken);
    response.send(create)
    ctx.body = 'Create a script tag'
  } catch (e) {
    console.error(e);
  }
})

router.delete('/', async (ctx) => {
  ctx.body = 'Delete script tag'
})

// 3. Exports default
export default router;
