function Response(status, data, message, res) {
  res.status(status).send({
    status: status,
    data: data,
    message: message,
  });
}

module.exports = { Response };
