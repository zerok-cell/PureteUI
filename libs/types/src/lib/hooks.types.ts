type TConditionReturnHook<TVariable, TReturn> = {
  preHook?: (v: TVariable) => void;
  postHook?: (v: TVariable, conditionResult: TVariable | TReturn) => void;
  softError: boolean;
};
export default TConditionReturnHook;
