import { message } from "ant-design-vue"

export const result = (response, authShowErrorMsg = true) => {
  const { data } = response;

  if( data.code === 0 && authShowErrorMsg ){
    message.error(data.msg);
  }

  return {
    succes(cb) {
      if(data.code !== 0){
        cb(data, response)
      }
      return this;
    },
    fail(cb) {
      if(data.code === 0){
        cb(data, response)
      }
      return this;
    },
    finally(cb) {
      cb(data, response)
      return this;
    }
  }
}