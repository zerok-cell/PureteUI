type TConditionReturnHook<TVariable, TReturn> = {
  preHook?: (v: TVariable) => unknown;
  postHook?: (v: TVariable, conditionResult: TVariable | TReturn) => unknown;
  softError: boolean;
};
export default TConditionReturnHook;
