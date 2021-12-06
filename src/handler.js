const datas = require('./datas');
const CONFIG = require('./global/config');

const addDataHandler = (request, h) => {
  const { codeUnit } = request.query;

  const {
    date,
    TS,
    tinggi,
    suhu,
  } = request.payload;

  const newData = {
    date,
    TS,
    tinggi,
    suhu,
  };

  if (CONFIG.CONFIG.CODE_LIST.includes(codeUnit)) {
    if (datas.find((x) => x[`${codeUnit}`])) {
      datas.find((data) => data[`${codeUnit}`])[`${codeUnit}`].push(newData);
    } else {
      const tempDatas = {};
      tempDatas[`${codeUnit}`] = [];
      tempDatas[`${codeUnit}`].push(newData);
      datas.push(tempDatas);
    }
    console.log(datas);
  }

  const isSuccess = datas.find((data) => data[`${codeUnit}`])[`${codeUnit}`].filter((dataFind) => dataFind.date === date).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Data berhasil ditambahkan',
      data: {
        dataDate: date,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Data gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllDataHandler = (request, h) => {
  const { codeUnit } = request.query;
  if (CONFIG.CONFIG.CODE_LIST.includes(codeUnit)) {
    try {
      const response = h.response({
        status: 'success',
        data: datas.find((data) => data[`${codeUnit}`])[`${codeUnit}`],
      });
      response.code(200);
      return response;
    } catch (err) {
      const response = h.response({
        status: `${err}`,
        message: 'Data gagal ditemukan',
      });
      response.code(500);
      return response;
    }
  }

  const response = h.response({
    status: 'success',
    datas,
  });
  response.code(200);
  return response;
};

module.exports = {
  addDataHandler,
  getAllDataHandler,
};
