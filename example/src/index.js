import './css/main.css';
import upsurge from 'upsurge';


document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const uploadBtn = document.querySelector('button');

  uploadBtn.addEventListener('click', () => {

    const up = upsurge({
      signUrl: '/sign-auth',
      bucketName: 'bucketName',
      awsAccessId: 'AKIA4HJ709DF87HI'
    });

    up.addFile({
      file: input.files[0],
      fileName: input.files[0].name
    });

    up.upload();

  });

});
