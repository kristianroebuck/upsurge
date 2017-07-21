const upsurgeCore = {
  addFile(file) {
    console.log(this);
  },
  getAWSKey() {
    return this.config.awsKey
  }
};

export default upsurgeCore;
