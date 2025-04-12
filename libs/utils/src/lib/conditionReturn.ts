import { TConditionReturnHook } from '@purete-ui/types';
import { typeAffiliation } from './chekers/typeAffiliation.js';
import * as console from 'node:console';

/**
 * @function
 * @description mini utility from return value if it exists or return two param
 * `returnInFalse`.
 * @param options Object containing the following properties:
 * - `variable`: The variable we are checking.
 * - `returnIfFalse`: The value to be returned if the variable does not exist.
 * - `checker`: A function to check the variable's condition.
 * - `hooks`: The hook pair object.
 *   - `preHook`: Called before calculating the return value.
 *   - `postHook`: Called after deducting the value.
 *   - `softError`: Determines whether an error will be caused or only logged.
 * - `strict`: A flag to enable strict type checking.
 */
const conditionReturn = <TVariable = string, TReturn = string>({
  variable,
  returnIfFalse,
  hooks = { softError: false },
  checker,
  strict = true,
}: {
  variable: TVariable;
  returnIfFalse: TReturn;
  hooks?: TConditionReturnHook<TVariable, TReturn>;
  checker?: (v: TVariable) => boolean;
  strict?: boolean;
}): TVariable | TReturn => {
  const hookErrorHandler = (
    hook: CallableFunction,
    soft: TConditionReturnHook<
      TVariable,
      TReturn
    >['softError'] = hooks.softError
  ) => {
    if (strict) typeAffiliation(returnIfFalse, 'function', true);
    typeAffiliation(hook, 'function');
    try {
      hook();
    } catch (e) {
      if (!soft) {
        throw new Error('Error in hook');
      }
      console.error('Error in hook:', e);
    }
  };

  hookErrorHandler(() => hooks?.preHook?.(variable));
  const condition =
    variable && checker
      ? checker(variable)
        ? variable
        : returnIfFalse
      : returnIfFalse;

  hookErrorHandler(() => hooks?.postHook?.(variable, condition));

  return condition;
};

export default conditionReturn;
