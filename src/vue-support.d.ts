declare module "vue-support" {
    import Vue, { VueConstructor } from "vue";
    import {
      RecordPropsDefinition,
      ArrayPropsDefinition
    } from "vue/types/options";
    import { TsxComponent, TsxTypeInfoOf } from "vue-tsx-support";
    import { PropsOf as PropsOf_ } from "vue-tsx-support/types/base";
  
    type RequiredProps<Props, PD extends RecordPropsDefinition<Props>> = {
      [K in keyof PD]: PD[K] extends { required: true } ? K : never;
    }[keyof Props];
  
    type OptionalProps<Props, PD extends RecordPropsDefinition<Props>> = Exclude<
      keyof Props,
      RequiredProps<Props, PD>
    >;
  
    // prettier-ignore
    export type OuterProps<
      Props,
      PropDefs extends RecordPropsDefinition<Props> | ArrayPropsDefinition<Props>
    > = PropDefs extends RecordPropsDefinition<Props> ?
            { [K in RequiredProps<Props, PropDefs>]: Props[K] }
          & { [K in OptionalProps<Props, PropDefs>]?: Props[K] }
        : PropDefs extends ArrayPropsDefinition<Props> ?
          { [K in keyof Props]?: any }
        : never;
  
    export type AsComponent<
      C extends VueConstructor | string
    > = C extends keyof VueTsxSupport.JSX.IntrinsicElements
      ? TsxComponent<Vue, VueTsxSupport.JSX.IntrinsicElements[C]>
      : C extends string
      ? TsxComponent<Vue, any>
      : C;
  
    export type WithProps<
      C extends VueConstructor,
      Props
    > = C extends TsxComponent<infer V, infer P, infer E, infer S, infer A>
      ? TsxComponent<V, P & Props, E, S, A>
      : C extends VueConstructor<infer V>
      ? TsxComponent<V, Props>
      : never;
  
    export type PropsOf<C extends Vue | VueConstructor> = PropsOf_<
      C extends VueConstructor ? InstanceType<C> : C
    >;
  }
  