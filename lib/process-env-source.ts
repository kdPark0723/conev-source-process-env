// eslint-disable-next-line no-unused-vars
export default class ProcessEnvSource {
  private readonly map: Map<string, object>;

  constructor(env: string = null) {
    this.map = new Map<string, object>();
    this.map.set(env || process.env.NODE_ENV, process.env);
  }

  async export(): Promise<Map<string, object>> {
    return this.map;
  }
}
