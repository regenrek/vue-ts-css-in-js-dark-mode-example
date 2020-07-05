import Vue from "vue";
import "@vue/composition-api";

declare module "@vue/composition-api/dist/component/component" {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}
