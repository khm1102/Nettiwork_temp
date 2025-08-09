/**
 * unsigned 32비트 범위의 랜덤한 수 생성
 *
 * @returns `랜덤 숫자`
 */
export function getRandomUint32(): number {
  const buf = new Uint32Array(1);
  return crypto.getRandomValues(buf)[0];
}
