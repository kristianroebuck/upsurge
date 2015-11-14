export default function request(url) {

  const core = {
    ajax(method, url, args) {
      return new Promise(function(resolve, reject) {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.send();

        xhr.onload = () => {
          if (this.status >= 200 && this.status < 300) {
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
  };

  return {
    get() {
      return core.ajax('GET', url);
    },
    post(args) {
      return core.ajax('POST', url, args);
    }
  };

}
