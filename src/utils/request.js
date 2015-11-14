export default function request(args) {

  return new Promise(function(resolve, reject) {

    const xhr = new XMLHttpRequest();

    xhr.open(args.method, args.url);

    if (args.headers) {
      Object.keys(args.headers)
        .forEach(key => xhr.setRequestHeader(key, args.headers[key]));
    }

    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.status)
      }
    };

    xhr.onerror = () => {
      reject(xhr.status)
    };

  });
}
