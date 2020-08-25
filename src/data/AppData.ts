/**
 * Just an object constructor to manage each resource becuase i have to keep a record of the current page instead of just concurrently getting 500 record from database and only i have done that because i tried and search for how can pass param value to the url to get items paginated form Hacker news api
 */

import Axios, { AxiosResponse } from "axios";
import { Keys } from "../config/Keys";
class AppData {
  start: number = 0;
  end: number = 0;
  current: number = 0;
  perPage: number = 30;
  promises: Promise<AxiosResponse<any>>[] = [];
  articlesIds: number[] = [];

  constructor(public param: string) {}

  async getArticles() {
    const res = await Axios.get<number[]>(`${Keys.apiEndpoint}/${this.param}`);
    this.articlesIds = res.data;
    [this.start, this.end] = !this.current
      ? [0, this.perPage]
      : [this.start + this.perPage, this.end + this.perPage];
    this.promises = [];
    for (var i = this.start; i < this.end; i++) {
      this.promises.push(
        Axios.get(`${Keys.apiEndpoint}/item/${this.articlesIds[i]}.json`)
      );
    }
  }

  async getData() {
    const data = await Promise.all(this.promises);
    for (var j = 0, newItems = []; j <= data.length - 1; j++) {
      newItems[j] = data[j].data;
    }
    this.current++;
    return newItems;
  }
}

// Exporting Two Object For Caching
export const newArticles = new AppData(Keys.newArticles);
export const topArticles = new AppData(Keys.topArticles);
