import baseApi from './api';

class BeTheHeroService {

  constructor() {
    this.api = baseApi('http://localhost:3333')
  }

  async postOng(route, data) {
    const response = await this.api.post(`${route}`, data)

    return response.data
  }

  /* async getOng(route) {
    const response = await this.api.get(`${route}`)

    return response.data
  } */
  /* async postCaso(route, data) {
    const response = await this.api.post(`${route}`, data)

    return response.data
  }
  async getCaso(route) {
    const response = await this.api.get(`${route}`)

    return response.data
  }
  async deleteCaso(route) {
    const response = await this.api.get(`${route}`)

    return response.data
  } */

}

export default BeTheHeroService;