const get = async():Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['1','2','3','4']);
    },5000);
  })
} 

export default {
  get
}