import './style.css';
import WebApp from '@grammyjs/web-app';

WebApp.ready();

WebApp.MainButton.setText('🎉 Congratulations!')
  .show()
  .onClick(() => {
    WebApp.close();
  });
