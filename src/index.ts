
export default function test() {
  const a = {
    foo: 'test',
  };
  const b = {
    bar: 'test',
  };
  return {
    ...a,
    ...b,
  };
}
