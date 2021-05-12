const InitialState = {
  unit  :'m',
  input :1,
  m    :1,
  cm    :100,
  mm    :1000,
  um    :1000000
}
const ReducerFunc = (state, action) => {
  switch (action.type) {
    case 'm':
      return {
        unit  : action.type,
        input : action.input,
        m    : action.input  * 1,
        cm    : action.input * 100,
        mm    : action.input * 1000,
        um    : action.input * 1000000
      };
    case 'cm':
      return {
        unit  : action.type,
        input : action.input,
        m    : action.input  / 100,
        cm    : action.input * 1,
        mm    : action.input * 10,
        um    : action.input * 10000
      };
    case 'mm':
      return {
        unit  : action.type,
        input : action.input,
        m    : action.input  / 1000,
        cm    : action.input / 10,
        mm    : action.input * 1,
        um    : action.input * 1000
      };
    case 'um':
      return {
        unit  : action.type,
        input : action.input,
        m    : action.input  / 1000000,
        cm    : action.input / 10000,
        mm    : action.input / 1000,
        um    : action.input * 1
      };
    default:
      throw new Error();
  }
}

export {ReducerFunc, InitialState};