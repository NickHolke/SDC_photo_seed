const download = require('image-downloader');
const { exec } = require('child_process');

for (let i = 1; i < 1001; i++) {
  if (i % 100 === 0) {
    console.log(`${i} images saved`)
  }
  let options = {
    url: 'https://source.unsplash.com/random/800x600/?room',
    dest: `./images/photo${i}.jpg`              
  }
  download.image(options)
    .then(({ filename, image }) => {
      console.log('Saved to ', filename);
    })
    .catch((err) => console.log(err));
}

exec('aws s3 sync ./images s3://sdcroomphotos/photos', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log('images uploaded successfully')
  }
});
