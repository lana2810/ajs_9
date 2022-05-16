import { Magician, Daemon } from "../practice_1";
import ArrayBufferConverter from "../practice_2";

test("test1", () => {
  const player1 = new Magician("alex", 2);
  player1.attack = 100;
  expect(player1.attack).toBe(90);

  const player2 = new Daemon("maksim", 2);
  player2.stoned = true;
  player2.attack = 100;
  expect(player2.attack).toBe(85);
});

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
test("test2", () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(converter.toString()).toEqual(expected);
});
