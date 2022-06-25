export interface Cron {
  execute: () => Promise<Cron.Result>
}

export namespace Cron {
  export type Result = void
}