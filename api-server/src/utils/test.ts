import { sendLoginCodeEmail } from './email';

(async () => {
  try {
    await sendLoginCodeEmail('khm113388@gmail.com', '123456');
    console.log('메일 전송 완료');
  } catch (e) {
    console.error(e);
  }
})();
