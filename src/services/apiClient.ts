import axios from "axios";

export interface Platform {
  slug: string
}

export interface ParentPlatform {
  name: string
  platform: Platform
}

export interface GameData {
  results?: []
  added: number
  background_image: string
  parent_platforms?: ParentPlatform[]
  metacritic?: number
  name: string
  clip?: string
}

export default axios.create({
  baseURL: import.meta.env.VITE_videogame_url,
})