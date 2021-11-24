import combineRouters from "koa-combine-routers";
import scriptsRouters from './scripts_tag'

export default combineRouters(scriptsRouters)
