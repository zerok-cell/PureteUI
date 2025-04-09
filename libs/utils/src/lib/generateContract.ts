/**
 * @description makes the object's keys empty or prefixed. Suitable for generating contracts in extract-vanilla
 * @param breakpoints They can be the output of the "gradationOfValues" function or your personal object, the object
 * can be ANY with a nesting level of 1
 * @param prefix The prefix for arranging the values of your keys is created as "prefix+nameKey"
 * @see gradationOfValues
 */
const generateContract = (
  breakpoints: Record<string, string>,
  prefix?: string
): Record<string, string> => {
  const copiedBreakpoints = {
    ...breakpoints,
  };
  Object.keys(copiedBreakpoints).forEach((breakpoint) => {
    copiedBreakpoints[breakpoint] = prefix ? `${prefix}-${breakpoint}` : '';
  });
  return copiedBreakpoints;
};
export default generateContract;
