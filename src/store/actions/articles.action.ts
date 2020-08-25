import { Actions } from "../../@types/Actions";
import Axios, { AxiosResponse } from "axios";
import { Keys } from "../../config/Keys";

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

export const getNewArticles = (dispatch: Function) => async () => {
  try {
    const newArticles = new AppData(Keys.newArticles);
    await newArticles.getArticles();
    const newItems = await newArticles.getData();
    dispatch({ type: Actions.GET_NEW_ARTICLES, payload: newItems });
  } catch (error) {
    console.log(error);
  }
};

export const getTopArticles = (dispatch: Function) => async () => {
  try {
    const topArticles = new AppData(Keys.topArticles);
    await topArticles.getArticles();
    const newItems = await topArticles.getData();
    dispatch({ type: Actions.GET_TOP_ARTICLES, payload: newItems });
  } catch (error) {
    console.log(error);
  }
};
