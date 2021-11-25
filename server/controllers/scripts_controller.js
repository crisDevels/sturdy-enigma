import axios from "axios";

export const createScript = async (shop, token) => {
  const url = createNewScript(shop);
  const data = {
    'script_tag': { 
      'event':'onload',
      'src':'https:\/\/djavaskripped.org\/fancy.js'
    }
  }
  const config = {
    headers: {
      'Content-type': 'application/json',
      'X-Shopify-Access-Token': token
    }
  }
  try {
    const req = await axios.post(url, data, config)
    return req.data;
  } catch(err) {
    console.error('Error : ', err);
  }
}

export const getScriptsAll = async (client) => {
  const req = await client.get({path: 'script_tags'})
  return req;
}


const baseUrl = (shop) => (
  `https://${shop}`
)

const getAllScripts = (shop) => (
  `${baseUrl(shop)}/admin/api/2021-10/script_tags.json`
)

const getAllScriptById = (shop, id) => (
  `${baseUrl(shop)}/admin/api/2021-10/script_tags/${id}.json`
)

const createNewScript = (shop) => (
  `${baseUrl(shop)}/admin/api/2021-10/script_tags.json`
)

const deleteScriptsById = (shop, id) => (
  `${baseUrl(shop)}/admin/api/2021-10/script_tags/${id}.json`
)