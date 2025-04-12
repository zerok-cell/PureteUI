import { TConditionReturnHook } from '@purete-ui/types';

/**
 * @function
 * @description mini utility from return value if it exists or return two param
 * `returnInFalse`.
 * @param variable The variable we are checking
 * @param returnIfFalse The value to be returned if the variable does not exist
 * @param checker if the checker is passed, the function will first check the
 * variable for existence and then call the checker, if the checker returns
 * true, the variable will return if false, it will return returnIfFalse
 * if the variable does not exist, the checker will not be started, so you
 * may not check the checker parameter for existence.
 * @param hooks The hook pair object
 * preHook - Called before calculating the return value.
 * postHook - Called after deducting the value
 * and the "softError" parameter this
 * parameter determines whether an error will be caused or only console.error
 */
const conditionReturn = <TVariable = string, TReturn = string>(
  variable: TVariable,
  returnIfFalse: TReturn,
  checker?: (v: TVariable) => boolean,
  hooks?: TConditionReturnHook<TVariable, TReturn>
): TVariable | TReturn => {
  const HookErrorhandler = (
    hook: CallableFunction,
    soft?: TConditionReturnHook<TVariable, TReturn>['softError']
  ) => {
    try {
      hook();
    } catch (e) {
      if (soft) {
        console.error('Error in preHook', e);
      } else {
        throw new Error('Error in hook');
      }
    }
  };
  HookErrorhandler(() => hooks?.preHook?.(variable), hooks?.softError);
  const condition =
    variable && checker
      ? checker(variable)
        ? variable
        : returnIfFalse
      : returnIfFalse;
  HookErrorhandler(
    () => hooks?.postHook?.(variable, condition),
    hooks?.softError
  );
  return condition;
};
export default conditionReturn;
