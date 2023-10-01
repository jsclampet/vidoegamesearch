import apiClient, { GameData } from "./apiClient";

class UserService {

  getGames(search: string) {
    const controller = new AbortController()
    const request = apiClient
      .get<GameData[]>(
        `/games?page_size=40&search=${search}&key=` +
          import.meta.env.VITE_videogame_api_key
      )

      return { request, cancel: () => controller.abort() }
  }

  getMoreGames(search: string, page: number) {
    const controller = new AbortController()
    const request = apiClient
      .get<GameData[]>(
        `/games?page_size=40&page=${page}&search=${search}&key=` +
          import.meta.env.VITE_videogame_api_key
      )

      return { request, cancel: () => controller.abort() }
  }
}

export default new UserService 