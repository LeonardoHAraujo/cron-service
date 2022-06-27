export interface Cron {
  rule: () => Promise<Cron.Result>
  execute: () => Promise<Cron.Result>
}

export namespace Cron {
  export type Result = void
}