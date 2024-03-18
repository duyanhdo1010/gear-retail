const { message } = require("antd");

const success = (mes = "Thành công") => {
  message.success(mes);
};

const error = (mes = "Có lỗi") => {
  message.error(mes);
};

const warning = (mes = "Warning") => {
  message.warning(mes);
};

export { success, error, warning };
