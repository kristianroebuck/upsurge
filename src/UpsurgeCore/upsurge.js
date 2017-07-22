const upsurgeCore = {
  addFile(file) {
    this.uploadFile();
    this.state.files.push(file);
    // this._addFile(this.state, file);
  },

  _addFile(state, file) {
    _updateState()
  },

  _updateState(state, key, value) {
    this.state = {
      [key]: value
    };
  },

  uploadFile() {
    fetch(this.config.s3BaseUrl, {
      method: 'post'
    })
    .then(x => console.log(x))
    .catch(x => console.log(x));
  }
};

export default upsurgeCore;
